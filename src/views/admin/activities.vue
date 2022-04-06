<template>
  <el-table :data="activities">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="活动ID">
            <span>{{ props.row.productId }}</span>
          </el-form-item>
          <el-form-item label="活动名称">
            <span>{{ props.row.productName }}</span>
          </el-form-item>
          <el-form-item label="年利率">
            <span>{{ props.row.productAagr }}</span>
          </el-form-item>
          <el-form-item label="价格">
            <span>{{ props.row.productPrice }}</span>
          </el-form-item>
          <el-form-item label="活动分类">
            <span>{{ props.row.productType }}</span>
          </el-form-item>
          <el-form-item label="活动描述">
            <span>{{ props.row.productDetail }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="活动 ID" prop="productId"> </el-table-column>
    <el-table-column label="活动名称" prop="productName"> </el-table-column>
    <el-table-column label="描述" prop="productDetail"> </el-table-column>
    <el-table-column label="操作" prop="productId">
      <!-- <el-button size="mini" @click="pushmanage(productId)">管理</el-button> -->
      <template slot-scope="scope">
        <el-button size="mini" @click="pushmanage(scope.row)">管理活动</el-button>
        <el-button size="mini" @click="pushdetail(scope.row)">秒杀详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-table {
  width: 600px;
  margin: 0 auto;
}
</style>

<script>
import { mapState } from "vuex";
export default {
  name: "Activities",
  data() {
    return {};
  },
  computed: {
    ...mapState("activity", ["activities"]),
  },
  methods: {
    pushmanage(row) {
      // console.log(index);
      console.log(row);
      let product_id = row.productId;
      console.log(product_id);
      this.$store.dispatch("activity/oneProduct", { product_id });
      this.$router.push({ name: "Manage" });
    },
    pushdetail(row){
      console.log(row);
      this.$router.push({ name: "Details" });
    }
  },
  // 页面一挂载，就去获取商品列表
  mounted() {
    this.$store.dispatch("activity/productList");
  },
};
</script>