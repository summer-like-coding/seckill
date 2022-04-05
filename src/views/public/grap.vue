<template>
  <el-form ref="product" :model="product" label-width="80px">
    <el-form-item label="活动名称">
      <!-- <el-input v-model="product.productName"></el-input> -->
      {{ product.productName }}
    </el-form-item>
    <el-form-item label="价格">
      <!-- <el-input v-model="product.productPrice"></el-input> -->
      {{ product.productPrice }}
    </el-form-item>
    <el-form-item label="类型">
      <!-- <el-input v-model="product.productType"></el-input> -->
      {{ product.productType }}
    </el-form-item>
    <el-form-item label="利率">
      <!-- <el-input v-model="product.productAagr"></el-input> -->
      {{ product.productAagr }}
    </el-form-item>
    <!-- <el-form-item label="时间">
      <el-date-picker
        v-model="product.startDate"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
    </el-form-item> -->
    <el-form-item label="库存">
      <!-- <el-input v-model="product.stockCount"></el-input> -->
      {{ product.stockCount }}
    </el-form-item>
    <el-form-item label="活动形式">
      <!-- <el-input type="textarea" v-model="product.productDetail"></el-input> -->
      {{ product.productDetail }}
    </el-form-item>
    <el-form-item>
      <el-button @click="pushShow()">点击购买</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import _ from "lodash";
import { mapState } from "vuex";
export default {
  name: "Grap",
  data() {
    return {
      num: 1,
      isPay: "",
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
    handleChange(value) {
      console.log(value);
    },
    // pushShow: _.throttle(() => {
    //   this.$alert("<strong>余额支付</strong>", "请支付", {
    //     dangerouslyUseHTMLString: true,
    //     showCancelButton: true,
    //     beforeClose: (action, instance, done) => {
    //       // console.log(instance);
    //       if (action === "confirm") {
    //         this.$store.commit("activity/pay", action);
    //         done();
    //         this.$router.push({ name: "Orders" });
    //       } else {
    //         // 如果用户未点击
    //         // this.IsPay = action
    //         // done();
    //         this.$store.commit("activity/pay", action);
    //         done();
    //         // this.$bus.$emit('IsPay',this.isPay);
    //         // this.IsPay = this.isPay;
    //         this.$router.push({ name: "Orders" });
    //         // console.log(this.IsPay);
    //       }
    //     },
    //   });
    // }, 3000),

    pushShow() {
      let _this = this;
      console.log("外层",_this);
      _.throttle(() => {
        console.log("点击");
        console.log("内存",_this);
        _this.$alert("<strong>余额支付</strong>", "请支付", {
          dangerouslyUseHTMLString: true,
          showCancelButton: true,
          beforeClose: (action, instance, done) => {
            // console.log(instance);
            // 发送ajax请求，获取path值
            let user_id = _this.userInfo.userId;
            let product_id = _this.product.productId;
            console.log(user_id);
            console.log(product_id);
            _this.$store.dispatch("activity/getPath", { user_id, product_id });
            if (action === "confirm") {
              // 现在获得真正的路径
              _this.$state.dispatch("activity/");
              done();
              // this.$router.push({ name: "Orders" });
            } else {
              // 不和服务器交互，自己搞一点其他的
              // done();
              // this.$router.push({ name: "Orders" });
            }
          },
        });
      });
    },
  },
  computed: {
    ...mapState("activity", ["product"]),
    ...mapState("activity", ["activities"]),
    ...mapState("user", ["userInfo"]),
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
