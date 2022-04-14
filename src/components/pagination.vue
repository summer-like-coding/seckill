<template>
  <div class="block">
    <!-- <span class="demonstration">显示总数</span> -->
    <el-pagination
      @current-change="handleCurrentChange"
      @prev-click="handlePrevClick"
      @next-click="handleNextClick"
      :current-page.sync="current"
      :page-size="size"
      layout="total, prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
  name: "Pagination",
  props:['size','total','pages','current'],
  methods: {
    handleCurrentChange(val) {  
      // console.log(`我是处理当前页: ${val}`);
      // console.log("搜索内容",userName);
      // console.log(b);
      // this.$store.dispatch("currentList",val,)
      this.$emit("getPages",val)
    },
    handlePrevClick(val) {
      // console.log(`我是处理前一页: ${val}`);
      // console.log("++++++",this.newsize,this.newtotal,this.newcurrent);
      this.$emit("getPages",val)
    },
    handleNextClick(val) {
      // console.log(`我是处理后一页: ${val}`);
      this.$emit("getPages",val)
    },
  },
  data() {
    return {
      // currentPage: 5,
      newsize:this.size,
      newtotal:this.total,
      newpages:this.pages,
      newcurrent:this.current
    };
  },
  watch:{
    size(newval, oldval){
      this.newsize = newval
    }
  }
  // pages,页数
  // total，请求数
  // current，当前页数
  // size，页面大小
};
</script>

<style scoped>
.block {
  /* margin-top: 30px; */
  /* margin: 0 auto; */
  margin-top: 30px;
}
</style>