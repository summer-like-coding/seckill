<template>
  <el-table :data="activities" >
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="活动名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="活动 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="活动分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="活动描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="活动 ID" prop="id"> </el-table-column>
    <el-table-column label="活动名称" prop="name"> </el-table-column>
    <el-table-column label="描述" prop="desc"> </el-table-column>
    <el-table-column label="操作" >
      <el-button size="mini" @click="pushmanage()">管理</el-button>
    </el-table-column>
  </el-table>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-table{
  width: 600px;
  margin: 0 auto;
}
</style>

<script>
import { mapState } from 'vuex';
export default {
  name: "Activities",
  data() {
    return {
    };
  },
  computed:{
    ...mapState('Activity',['activities'])
  },
  methods:{
    pushmanage(){
      this.$router.push({
        name:"Manage"
      })
    }
  }
};
</script>