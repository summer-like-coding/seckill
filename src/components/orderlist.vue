<template>
  <el-descriptions :column="2" :colon='false' title="订单信息">
    <el-descriptions-item label="活动名">{{item.productName}}</el-descriptions-item>
    <el-descriptions-item label="价格" >{{item.productPrice}}</el-descriptions-item>
    <el-descriptions-item label="年利率" >{{item.productAagr}}</el-descriptions-item>
    <el-descriptions-item label="存款时间" >{{item.productTime}}</el-descriptions-item>
    <el-descriptions-item label="存款类型" >{{item.productType}}</el-descriptions-item>
    <el-descriptions-item label="结束时间" >{{item.endDate}}</el-descriptions-item>
    <el-descriptions-item label="简介" :span='2' >{{item.productDetail}}</el-descriptions-item>
    <el-descriptions-item ><el-button @click="pushgrap()"  size="mini">查看活动</el-button></el-descriptions-item>
    <el-descriptions-item >
      <el-button size="mini" @click="pushpay()">去付款</el-button>
      <el-button size="mini">已付款</el-button>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "orderlist",
  data(){
    return {
      
    }
  },
  methods:{
    pushgrap(){
      this.$router.push({
        name:"Grap"
      })
    },
  },
  props:['item'],
  computed:{
    // ...mapState(['IsPay'])
  },
};
</script>

<style scoped>

</style>