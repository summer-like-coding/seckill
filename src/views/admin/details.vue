<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="姓名"
      prop="name">
    </el-table-column>
    <el-table-column
      label="电话"
      prop="phone">
    </el-table-column>
    <el-table-column
      label="状态"
      prop="state">
    </el-table-column>
    <el-table-column
      label="原因"
      prop="reason">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id:1,
          name: '王小虎',
          phone:12345678,
          state:'否',
          reason:"不诚信"
        }, 
        {
          id:1,
          name: '王小虎',
          phone:12345678,
          state:'否',
          reason:"不诚信"
        },
        {
          id:1,
          name: '王小虎',
          phone:12345678,
          state:'否',
          reason:"不诚信"
        },
        {
          id:1,
          name: '王小虎',
          phone:12345678,
          state:'否',
          reason:"不诚信"
        },
        {
          id:1,
          name: '王小虎',
          phone:12345678,
          state:'否',
          reason:"不诚信"
        }],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>