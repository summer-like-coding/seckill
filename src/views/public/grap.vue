<template>
  <el-form ref="product" :model="product" label-width="80px">
    <el-form-item label="活动名称">
      <!-- {{ product.productName }} -->
      <el-input v-model="product.productName" :readonly="true"></el-input>
    </el-form-item>
    <el-form-item label="价格">
      <el-input v-model="product.productPrice" :readonly="true"></el-input>
      <!-- {{ product.productPrice }} -->
    </el-form-item>
    <el-form-item label="类型">
      <el-input v-model="product.productType" :readonly="true"></el-input>
      <!-- {{ product.productType }} -->
    </el-form-item>
    <el-form-item label="利率">
      <el-input v-model="product.productAagr" :readonly="true"></el-input>
      <!-- {{ product.productAagr }} -->
    </el-form-item>
    <el-form-item label="时间">
      <el-date-picker
        v-model="times"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :readonly="true"
        :clearable="false"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="库存">
      <el-input v-model="product.stockCount" :readonly="true"></el-input>
      <!-- {{ product.stockCount }} -->
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input v-model="product.productDetail" :readonly="true"></el-input>
      <!-- {{ product.productDetail }} -->
    </el-form-item>
    <el-form-item>
      <el-button @click="pushShow()">点击购买</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import _ from "lodash";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Grap",
  data() {
    return {
      num: 1,
      isPay: "",
    };
  },
  methods: {
    pushShow: _.throttle(function () {
      console.log("this", this);
      this.$alert("<strong>余额支付</strong>", "请支付", {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        beforeClose: async (action, instance, done) => {
          // console.log(instance);
          // 发送ajax请求，获取path值
          let user_id = this.userInfo.userId;
          let product_id = this.product.productId;
          console.log(user_id);
          console.log(product_id);
          await this.$store.dispatch("activity/getPath", {
            user_id,
            product_id,
          });
          try {
            if (action === "confirm") {
              // 现在获得真正的路径
              let userId = this.userInfo.userId;
              let path = this.onePath;
              let productId = this.product.productId;
              console.log(userId);
              console.log(path);
              console.log(productId);
              this.$store.dispatch("activity/getTruePath", {
                userId,
                path,
                productId,
              });
              done();
            } else {
              // 不和服务器交互，自己搞一点其他的
              done();
              // 我没有秒杀
            }
          } catch (error) {
            console.log("出错",error);
          }
        },
      });
    }, 5000),
  },
  computed: {
    ...mapState("activity", ["product", "activities", "onePath"]),
    // ...mapState("activity", ["activities"]),
    ...mapState("user", ["userInfo"]),
    ...mapGetters("activity", ["times"]),
  },
};
</script>

<style scoped>
.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
  overflow: hidden;
  /* line-height: 200px; */
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}
.el-button {
  margin-left: 30px;
}
.el-input-number {
  margin-right: 30px;
}
</style>
