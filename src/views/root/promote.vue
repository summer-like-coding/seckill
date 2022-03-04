<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="ID" label="ID号"> </el-table-column>
    <el-table-column prop="name" label="姓名"> </el-table-column>
    <el-table-column prop="age" label="年龄"> </el-table-column>
    <el-table-column prop="phone" label="电话"> </el-table-column>
    <el-table-column prop="late" label="三年逾期情况"> </el-table-column>
    <el-table-column prop="honest" label="诚信程度"> </el-table-column>
    <el-table-column label="操作">
      <el-button type="success" size="mini">提升</el-button>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "Promote",
  data() {
    return {
      tableData: [
        {
          ID: 123,
          name: "张三",
          age: 13,
          phone: 123456789,
          late: "false",
          honest: "true",
        },
        {
          ID: 123,
          name: "张三",
          age: 13,
          phone: 123456789,
          late: "false",
          honest: "true",
        },
        {
          ID: 123,
          name: "张三",
          age: 13,
          phone: 123456789,
          late: "false",
          honest: "true",
        },
        {
          ID: 123,
          name: "张三",
          age: 13,
          phone: 123456789,
          late: "false",
          honest: "true",
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>