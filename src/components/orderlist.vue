<template>
  <el-descriptions class="margin-top" :column="2" direction="horizontal" border>
    <el-descriptions-item label="订单编号">11111111111</el-descriptions-item>
    <el-descriptions-item label="金额">1810</el-descriptions-item>
    <el-descriptions-item label="下单时间">2021-11-5 16:34</el-descriptions-item>
    <el-descriptions-item label="支付时间">2021-11-5 17:56</el-descriptions-item>
    <el-descriptions-item label="原活动名" :span="2">余额宝</el-descriptions-item>
    <el-descriptions-item ><el-button size="mini" @click="pushgrap()">查看活动</el-button></el-descriptions-item>
    <el-descriptions-item ><el-button size="mini" @click="pushpay()" v-show="IsPay === 'cancel'">去付款</el-button><el-button size="mini" v-show="IsPay === 'confirm'">已付款</el-button></el-descriptions-item>
    <!-- <el-descriptions-item ><el-button size="mini" v-show="IsPay === 'cancel'">已付款</el-button></el-descriptions-item> -->
  </el-descriptions>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "orderlist",
  methods:{
    pushgrap(){
      this.$router.push({
        name:"Grap"
      })
    },
    // pushpay(){
    //   this.$router.push({
    //     name:"Pay"
    //   })
    // }
  },
  computed:{
    ...mapState(['IsPay'])
  },
};
</script>

<style>
</style>