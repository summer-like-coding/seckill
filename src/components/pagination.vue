<template>
  <div class="block">
    <!-- <span class="demonstration">显示总数</span> -->
    <el-pagination
      @current-change="handleCurrentChange"
      @prev-click="handlePrevClick"
      @next-click="handleNextClick"
      :current-page.sync="alllist.pageNum"
      :page-size="alllist.size"
      layout="total, prev, pager, next"
      :total="alllist.total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Pagination",
  methods: {
    handleCurrentChange(val) {  
      console.log(`我是处理当前页: ${val}`);
      // console.log(b);
      // this.$store.dispatch("currentList",val,)
    },
    handlePrevClick(val,b) {
      console.log(`我是处理前一页: ${val}`);
    },
    handleNextClick(val) {
      console.log(`我是处理后一页: ${val}`);
    },
  },
  data() {
    return {
      // currentPage: 5,
    };
  },
  computed: {
    ...mapState('user',["alllist"]),
  },
  props:['paginationData']
};
</script>

<style scoped>
.block {
  /* margin-top: 30px; */
  /* margin: 0 auto; */
  margin-top: 30px;
}
</style>