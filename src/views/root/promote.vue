<template>
  <div>
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
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row);open()"
            >提升</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click.prevent="handleDelete(scope.$index, scope.row);open()"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加分页器 -->
    <Pagination></Pagination>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
// import pagination from '../../components/pagination.vue';
export default {
  // components: { pagination },
  name: "Promote",
  data() {
    return {
      search: "",
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
    open(){
      // 在这里面进行异步操作，点击以后，我再次判断一次，如果有，我就成功，没有就失败
        this.$notify({
          title: '成功',
          message: '操作完成',
          type:'success'
        });
    },

    // ...mapMutations("User",['newdata'])
  },
};
</script>

<style scoped>
</style>