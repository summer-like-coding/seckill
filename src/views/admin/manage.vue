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
      <el-button type="primary" @click="onupdate">修改</el-button>
      <el-button type="primary" @click="ondelete">删除</el-button>
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
    // ...mapGetters("activity", ["times"]),
    // times() {
    //   let time = [];
    //   time.push(this.product.startDate);
    //   time.push(this.product.endDate);
    //   return time;
    // },
  },
  methods: {
    async onupdate() {
      // console.log("submit!");
      // 到时候直接将product传过去就行了
      // 现在我要增加活动
      let startDate = this.times[0];
      let endDate = this.times[1];
      let productAagr = this.product.productAagr + "";
      let productDetail = this.product.productDetail;
      let productId = this.product.productId + "";
      let productName = this.product.productName;
      let productPrice = this.product.productPrice + "";
      let productTime = this.product.productTime + "";
      let productType = this.product.productType;
      let stockCount = this.product.stockCount + "";

      // console.log(startDate);
      // console.log(endDate);
      let product = {
        productPrice,
        productTime,
        productType,
        productName,
        productId,
        productDetail,
        productAagr,
        stockCount,
        startDate,
        endDate,
      };
      console.log(product);
      await this.$store.dispatch("activity/updateProduct", product);
      this.$router.push({
        name: "Activities",
      });
    },
    async ondelete() {
      // 发送请求删除这个活动
      try {
        let productId = this.product.productId;
        console.log(productId);
        await this.$store.dispatch("activity/deleteProduct", productId);
        this.$router.push({
          name: "Activities",
        });
      } catch (error) {
        this.$message({
          type: "error",
          message: "不可修改，请检查修改是否合理",
        });
      }
    },
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