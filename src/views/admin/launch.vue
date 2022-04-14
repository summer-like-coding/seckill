<template>
  <el-form ref="product" :model="product" label-width="80px">
    <el-form-item label="活动名称">
      <!-- {{ product.productName }} -->
      <el-input v-model="product.productName"></el-input>
    </el-form-item>
    <el-form-item label="价格">
      <el-input v-model="product.productPrice"></el-input>
      <!-- {{ product.productPrice }} -->
    </el-form-item>
    <el-form-item label="类型">
      <el-input v-model="product.productType"></el-input>
      <!-- {{ product.productType }} -->
    </el-form-item>
    <el-form-item label="存款时间">
      <el-input v-model="product.productTime"></el-input>
      <!-- {{ product.productPrice }} -->
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
        value-format="yyyy-MM-ddTHH:mm:ss"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="库存">
      <el-input v-model="product.stockCount"></el-input>
      <!-- {{ product.stockCount }} -->
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input
        v-model="product.productDetail"
        type="textarea"
        :rows="8"
      ></el-input>
      <!-- {{ product.productDetail }} -->
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button type="primary" @click="ondelete">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Manage",
  data() {
    return {
      times: [],
    };
  },
  computed: {
    ...mapState("activity", ["product"]),
  },
  methods: {
    async onSubmit() {
      // console.log("submit!");
      // 到时候直接将product传过去就行了
      // 现在我要增加活动
      let startDate = this.times[0];
      let endDate = this.times[1];
      console.log(startDate);
      console.log(endDate);
      this.product.startDate= startDate;
      this.product.endDate = endDate;
      console.log(this.product);
      await this.$store.dispatch("activity/AddProduct", this.product);
      this.$router.push({
        name:'Activities'
      })
    },
    ondelete(){
      // 发送请求删除这个活动
      // let productId = this.product.productId
      // this.$store.dispatch  ("activity/DeleteProduct",{productId})
      this.$router.push({
        name:'Activities'
      })
    }
  },
};
</script>

<style scoped>
.el-button {
  /* margin-left: 30px; */
  background: darkred;
  border: darkred;
  color: #fff;
}
.el-button:hover {
  /* margin-left: 30px; */
  background: rgb(228, 147, 147);
  border: rgb(154, 56, 56);
  color: rgb(200, 29, 29);
}
</style>