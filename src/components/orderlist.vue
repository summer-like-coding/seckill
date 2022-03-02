<template>
  <el-descriptions class="margin-top" :column="2" direction="horizontal" border>
  <el-descriptions-item label="订单编号">11111111111</el-descriptions-item>
  <el-descriptions-item label="金额">1810</el-descriptions-item>
  <el-descriptions-item label="下单时间">2021-11-5 16:34</el-descriptions-item>
  <el-descriptions-item label="支付时间">2021-11-5 17:56</el-descriptions-item>
  <el-descriptions-item label="原活动名" :span="2">余额宝</el-descriptions-item>
</el-descriptions>
</template>

<script>
export default {
    name:'orderlist'
}
</script>

<style>

</style>