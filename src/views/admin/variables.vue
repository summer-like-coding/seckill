<template>
  <!-- scope.$index,可以获取行 -->
  <!-- scope.$row,可以获取数据 -->
  <el-card class="box-card">
    <div style="margin-bottom: 50px">
      <el-table :data="list" style="width: 100%">
        <el-table-column label="序号">
          <template slot-scope="scope">
            <span>{{ scope.$index }}</span>
          </template>
        </el-table-column>
        <el-table-column label="变量名">
          <template slot-scope="scope">
            <span>{{ list[scope.$index].name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="变量描述">
          <template slot-scope="scope">
            <span>{{ list[scope.$index].description }}</span>
          </template>
        </el-table-column>
        <el-table-column label="类型">
          <template slot-scope="scope">
            <span>{{ list[scope.$index].type }}</span>
          </template>
        </el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-button type="primary" @click="dialogFormVisible = true"
              >增加变量</el-button
            >
          </template>
          <template slot-scope="scope">
            <el-button type="danger" @click="delvar(scope.$index, scope.row)"
              >删除变量
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="增加变量" :visible.sync="dialogFormVisible">
        <el-form :model="variables">
          <el-form-item label="变量名称" :label-width="formLabelWidth">
            <el-input v-model="variables.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="变量类型" :label-width="formLabelWidth">
            <el-input v-model="variables.type" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="变量描述" :label-width="formLabelWidth">
            <el-input v-model="variables.description" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmVar()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </el-card>
</template>

<script>
import { listVariable } from "@/api/rule.js";
const constant = require("@/utils/constant");
import { mapState } from "vuex";

export default {
  data() {
    return {
      list: [],
      variables: {},
      mapper: {},
      variables: {
        name: "",
        type: "",
        description: "",
      },
      formLabelWidth: "120px",
      dialogFormVisible: false,
    };
  },
  created() {
    this.mapper = constant.m;
    this.fetchData();
  },
  methods: {
    fetchData() {
      listVariable().then((response) => {
        this.list = response.data.list;
      });
    },
    async delvar(index, row) {
      console.log("index", index);
      console.log("row", row);
      // ------------------------------------------------------
      try {
        let id = row.id;
        await this.$store.dispatch("rules/deleteVariables", id);
        console.log(index);
        this.list.splice(index,1)
      } catch (error) {
        console.log(error);
      }
      // 此处缺少id
      // this.$store.dispatch('deleteVariables',)
      // 发送请求，删除变量
    },
    async confirmVar() {
      let name = this.variables.name;
      let type = this.variables.type;
      let description = this.variables.description;
      console.log({ name, type, description });
      console.log(this.$store);
      await this.$store.dispatch("rules/addVariables", { name, type, description });
      // 这边需要刷新下
      this.dialogFormVisible = false;
      //添加 
      let newvar = {name:name,type:type,description:description}
      console.log(newvar);
      this.list.push(newvar)
    },
  },
};
</script>
