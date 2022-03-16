<template>
  <div class="block">
    <!-- <span class="demonstration">显示总数</span> -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
    name:"Pagination",
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage: 5,
      };
    }
}
</script>

<style scoped>
    .block{
        /* margin-top: 30px; */
        /* margin: 0 auto; */
        margin-top: 30px;
    }
</style>