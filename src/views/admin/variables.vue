<template>
<!-- scope.$index,可以获取行 -->
<!-- scope.$row,可以获取数据 -->
  <el-card class="box-card">
    <div style="margin-bottom: 50px">
      <el-table :data="list" style="width: 100%">
        <el-table-column  label="序号">
          <template slot-scope="scope">
            <span>{{ scope.$index }}</span>
          </template>
        </el-table-column>
        <el-table-column  label="变量名">
          <template slot-scope="scope">
            <span>{{ list[scope.$index].name }}</span>
          </template>
        </el-table-column>
        <el-table-column  label="变量描述">
          <template slot-scope="scope">
            <span>{{ list[scope.$index].description }}</span>
          </template>
        </el-table-column>
        <el-table-column  label="类型">
          <template slot-scope="scope">
            <span>{{ list[scope.$index].type }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
// import { listVariable } from "@/api/rule.js";
const constant = require("@/utils/constant");

export default {
  data() {
    return {
      list: [],
      variables: {},
      mapper: {},
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
  },
};
</script>