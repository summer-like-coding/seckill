<template>
  <el-table
    :data="
      tableData.filter(
        (data) =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      )
    "
  >
    <el-table-column prop="ID" label="ID号"> </el-table-column>
    <el-table-column prop="name" label="姓名"> </el-table-column>
    <el-table-column prop="age" label="年龄"> </el-table-column>
    <el-table-column prop="phone" label="电话"> </el-table-column>
    <el-table-column prop="late" label="三年逾期情况"> </el-table-column>
    <el-table-column prop="honest" label="诚信程度"> </el-table-column>
    <el-table-column align="right">
      <template slot="header">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >提升</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import {mapMutations, mapState} from 'vuex'
export default {
  name: "Promote",
  data() {
    return {
      search:''
    };
  },
  computed: {
    ...mapState("User", ["tableData"]),
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    // ...mapMutations("User",['newdata'])
  },
};
</script>

<style scoped>
</style>