<template>
  <div class="dashboard-container">
    <div class="fixed-div">
      <el-button type="primary" @click="handleAddRule()">增加规则</el-button>
      <el-button type="primary" @click="handleUpdateRule()">提交修改</el-button>
    </div>
    <div id="test" v-loading="loading" class="rules" style="margin-top: 20px">
      <el-row v-for="(item, index) in list" :key="index">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            规则名
            <el-input style="width: 200px;" class="filter-item" placeholder="必选" v-model="list[index].name">
            </el-input>
          </div>
          <el-button size="mini" type="primary" @click="handleAddRelation(index)">增加表达式    
          </el-button>
          <el-button type="danger" size="mini" @click="handleDeleteRelation(index)">删除表达式
          </el-button>
          <div style="margin-bottom:50px;">
              <el-table :data="item.rule" style="width: 100%">
                <el-table-column width="180">
                  <template slot-scope="scope">
                    <!-- <el-select filterable v-if="scope.$index % 2 == 0" style="width: 150px" class="filter-item" v-model="scope.row.l" clearable>
                      <el-option v-for="t in variables" :key="t.name" :label="t.name" :value="t.name">
                      </el-option>
                    </el-select> -->
                    <el-input v-if="scope.$index % 2 == 0" style="width: 150px;" class="filter-item"  v-model="scope.row.l" :placeholder="scope.row.l">
                    </el-input>
                  </template>
                </el-table-column>
                <el-table-column width="180">
                  <template slot-scope="scope">
                    <el-select v-if="scope.$index % 2 == 0 && scope.row.l == ''" style="width: 150px" class="filter-item" v-model="scope.row.o" clearable>
                      <el-option v-for="t in expressionOp" :key="t" :label="t" :value="t">
                      </el-option>
                    </el-select>
                    <el-select v-else-if="scope.$index % 2 == 0 && scope.row.l != ''" style="width: 150px" class="filter-item" v-model="scope.row.o" clearable>
                      <el-option v-for="t in expressionOp" :key="t" :label="t" :value="t">
                      </el-option>
                    </el-select>
                    <el-select v-else-if="scope.$index % 2 == 1" style="width: 150px" class="filter-item" v-model="scope.row.o" clearable>
                      <el-option v-for="t in op" :key="t" :label="t" :value="t">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column>
                  <template slot-scope="scope">
                    <el-input v-if="scope.$index % 2 == 0" style="width: 150px;" class="filter-item" :placeholder="scope.row.r" v-model="scope.row.r">
                    </el-input>
                  </template>
                </el-table-column>
            </el-table>       
          </div>        
        </el-card>
      </el-row>
    </div>
  </div>
</template>

<script>
// 引入的发送数据的东西
import { getLatestRule, insertRule } from '@/api/rule'
import { listVariable } from '@/api/variable'
// 一些js方法
import { clone } from '@/utils/util'
const constant = require('@/utils/constant')

let nid = 100

export default {
  name: 'dashboard',
  data() {
    return {
      form: {
        value: '',
        variable: '',
        determine: ''
      },
      list: [],
      variables: [],
      variablesMap: {},
      // todo refine
      listDisplay: [],
      mapper: {}, // chinese->english
      op: [],
      expressionOp: [],
      dialogFormVisible: false,
      curRule: {},
      curRuleLeftType: '',
      boolList: ['是', '否'],
      hitRadio: 'or',
      rule: {},
      operations: [
        { op: 'and' },
        { op: 'or' }
      ],
      flowSelect: '',
      flowRuleSelect: '',
      flow: [],
      flowFormVisible: false,
      currentNode: {},
      actionSelect: '',
      actionMap: {},
      actionConstant: {},
      loading: false
    }
  },
  created() {
    this.mapper = constant.m
    this.op = constant.op
    this.expressionOp = constant.expressionOp
  },
  methods: {
    fetchData() {
      listVariable().then(response => {
        this.variables = response.data.list
        for (let i in this.variables) {
          this.variablesMap[this.variables[i].name] = this.variables[i].type
        }
        console.log(this.variablesMap)
        this.loading = true
        getLatestRule().then(response => {
          this.rule = response.data
          let input = JSON.parse(response.data.input)
          this.hitRadio = input.expression.coarse
          this.flow = input.expression.fine
          this.list = input.rules
        }).finally(() => {
          this.loading = false
        })
      })
    },
    handleDeleteRelation(listIdx) {
      this.list[listIdx].rule.splice(-1, 1)
    },
    handleDeleteRule(listIdx) {
      this.list.splice(listIdx, 1)
    },
    handleUpdateRule() {
      // todo 增量修改
      let listCopy = clone(this.list)
      let result = {
        ver: constant.ruleVersion,
        rules: listCopy,
        expression: {}
      }
      let valid = true
      let error = ''
      listCopy.forEach(function(element) {
        if (element.name === '') {
          valid = false
        }
        let rule = element.rule
        rule.forEach(function(element, index) {
          console.log(element)
          console.log(this.variablesMap)
          if (element.l !== '') {
            element.r_t = this.variablesMap[element.l]
          }
          if (index % 2 === 0) {
            valid = (element.l !== '' && element.o !== '' && element.r !== '')
          }
          if (index % 2 === 1) {
            valid = (element.o !== '')
          }
          console.log(element)
        }, this)
        if (rule.length % 2 === 0) {
          valid = false
        }
      }, this)
      if (!valid) {
        this.$message('请填写完整')
        return
      }
      if (error !== '') {
        this.$message(error)
        return
      }
      console.log(result)
      console.log(JSON.stringify(result))
      result.expression.coarse = this.hitRadio
      result.expression.fine = this.flow
      insertRule({ input: JSON.stringify(result), id: 1, name: this.rule.name }).then(response => {
        this.$message('保存成功')
        this.fetchData()
      })
    },
    handleAddRelation(listIdx) {
      let item = {
        l: '',
        o: '',
        r: '',
        r_t: ''
      }
      this.list[listIdx].rule.push(item)
    },
    handleAddRule(listIdx) {
      let rule = {
        'name': '',
        'rule': [],
        'level': '',
        'source': '',
        'detail': {
          'desc': {
            'enabled': false,
            'value': ''
          },
          'variable': {
            'enabled': false,
            'members': []
          },
          'udf': {
            'enabled': false,
            'variables': []
          }
        }
      }
      this.list.push(rule)
    },
    handleUpdateRight(rule) {
      this.curRule = rule
      this.curRuleLeftType = this.variables[this.mapper[rule.l]].type
      this.form.variable = ''
      this.form.value = ''
      this.form.determine = ''
      this.dialogFormVisible = true
    },
    saveRightValue() {
      if (this.form.determine !== '' && this.curRuleLeftType === 'Boolean') {
        // bool型
        this.curRule.r = this.form.determine
        this.curRule.r_t = 'Boolean'
      } else if (this.form.value !== '') { // 优先数值
        this.curRule.r = this.form.value
        this.curRule.r_t = '' // 类型由最后提交的时候修改
      } else if (this.form.variable !== '') {
        this.curRule.r = this.form.variable // 优先数值
        this.curRule.r_t = 'v' // 变量
      }
      this.dialogFormVisible = false
    },
    renderContent(h, { node, data, store }) {
      return (
        <span class='custom-tree-node'>
          <span>{node.label}</span>
          <span>
            <el-button size='mini' type='text' on-click={ () => this.appendExpression(data) }>增加子表达式</el-button>
            <el-button size='mini' type='text' on-click={ () => this.removeExpression(node, data) }>删除该表达式</el-button>
          </span>
        </span>)
    },
    addRootExpression() {
      this.flowSelect = ''
      this.flowRuleSelect = ''
      this.flowFormVisible = true
      this.currentNode = this.flow
    },
    saveExpression() {
      let select = ''
      if (this.flowSelect !== '') {
        select = this.flowSelect
      } else if (this.flowRuleSelect !== '') {
        select = this.flowRuleSelect
      }
      if (select === '') {
        this.flowFormVisible = false
        return
      }
      if (this.currentNode === this.flow) {
        // root
        const oldChild = clone(this.flow)
        const newChild = { id: nid++, label: select, children: oldChild }
        this.flow = []
        this.flow.push(newChild)
      } else {
        const newChild = { id: nid++, label: select, children: [] }
        this.currentNode.children.push(newChild)
      }
      this.flowFormVisible = false
    },
    appendExpression(data) {
      if (data.label !== 'or' && data.label !== 'and') {
        this.$message('不能添加')
        return
      }
      this.currentNode = data
      this.flowSelect = ''
      this.flowRuleSelect = ''
      this.flowFormVisible = true
    },
    removeExpression(node, data) {
      const parent = node.parent
      if (!(parent.data instanceof Array)) {
        const index = parent.data.children.indexOf(data)
        parent.data.children.splice(index, 1)
      } else {
        // root
        const children = parent.data
        const index = children.indexOf(data)
        children.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.enable_rule_button {
  right: 30px;
  position: absolute;
}
</style>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.fixed-div {
  position: fixed;
  top: 80px;
  right: 15%;
  bottom: 0px;
  margin: 0;
  z-index: 2000;
  height: 40px;
}
</style>