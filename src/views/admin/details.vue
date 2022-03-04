<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="ID" label="ID号"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="phone" label="电话"> </el-table-column>
      <el-table-column prop="state" label="状态"></el-table-column>
      <el-table-column label="操作">
        <el-button type="success" size="mini">提升</el-button>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      tableData: [
        {
          ID: 123,
          name: "张三",
          age: 13,
          phone: 123456789,
          state: "false",
        },
        {
          ID: 123,
          name: "张三",
          age: 13,
          phone: 123456789,
          state: "false",
        },
        {
          ID: 123,
          name: "张三",
          age: 13,
          phone: 123456789,
          state: "false",
        },
        {
          ID: 123,
          name: "张三",
          age: 13,
          phone: 123456789,
          state: "false",
        },
        {
          ID: 123,
          name: "张三",
          age: 13,
          phone: 123456789,
          state: "false",
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-pagination{
  text-align: center;
  margin-top: 30px;
}
</style>