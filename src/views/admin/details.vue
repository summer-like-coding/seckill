<template>
  <div>
    <el-table :data="orderList" style="width: 100%">
      <el-table-column label="ID" prop="id"> </el-table-column>
      <el-table-column label="商品ID" prop="productId"> </el-table-column>
      <el-table-column label="用户ID" prop="userId" > </el-table-column>
      <el-table-column label="数量" prop="payCount" > </el-table-column>
      <el-table-column label="价格" prop="payPrice" > </el-table-column>
      <el-table-column label="支付时间" prop='payDate' :formatter="dateFormat">
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <Pagination class="pagination" :size = 'size' :total = 'total' :pages = 'pages' :current = 'current' @getPages = 'getpage'></Pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
import pagination from '../../components/pagination.vue';
export default {
  components: { pagination },
  name:"Details",
  data() {
    return {
      search: "",
      paginationData: {
        pageNum: 1,
        pageSize: 10
      },
    };
  },
  computed:{
    ...mapGetters('activity',['orderList','size','total','pages','current'])
  },
  methods: {
    // 获取页面
    getpage(val) {
      // console.log("current", val);
      let pageNum = val;
      let pageSize = this.paginationData.pageSize;
      // let userName = this.paginationData.userName;
      console.log("请求消息", pageNum, pageSize);
      this.$store.dispatch("activity/getOrderList", { pageNum, pageSize});
    },
    // 格式化时间
    dateFormat (row, column){
	    let date = row[column.property]
	    if (date === undefined){
	      return ''
	    }
	    return moment(date).format("YYYY-MM-DD HH:mm:ss")
	  }
  },
  mounted(){
    // 在挂载前，就去获取
    let {pageNum,pageSize} = this.paginationData;
    let productId = this.$store.state.activity.productId
    this.$store.dispatch('activity/getOrderList',{pageNum,pageSize,productId})
  }
};
</script>
