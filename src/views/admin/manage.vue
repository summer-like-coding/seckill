<template>
<el-form ref="product" :model="product" label-width="80px">
    <el-form-item label="活动名称">
      <!-- {{ product.productName }} -->
      <el-input v-model="product.productName" ></el-input>
    </el-form-item>
    <el-form-item label="价格">
      <el-input v-model="product.productPrice"></el-input>
      <!-- {{ product.productPrice }} -->
    </el-form-item>
    <el-form-item label="类型">
      <el-input v-model="product.productType"></el-input>
      <!-- {{ product.productType }} -->
    </el-form-item>
    <el-form-item label="利率">
      <el-input v-model="product.productAagr"></el-input>
      <!-- {{ product.productAagr }} -->
    </el-form-item>
    <el-form-item label="时间">
      <el-date-picker
        v-model="times"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :clearable="false"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="库存">
      <el-input v-model="product.stockCount"></el-input>
      <!-- {{ product.stockCount }} -->
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input v-model="product.productDetail"  type="textarea" :rows="8"></el-input>
      <!-- {{ product.productDetail }} -->
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Manage",
  data() {
    return {
    };
  },
  computed:{
    ...mapState('activity',['product']),
    ...mapGetters("activity", ["times"]),
  },
  methods: {
    onSubmit() {
      // console.log("submit!");
      // 到时候直接将product传过去就行了
    },
  },
};
</script>

<style scoped>
</style>