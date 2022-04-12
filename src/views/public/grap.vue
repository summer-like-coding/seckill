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
      <el-input
        v-model="product.productDetail"
        type="textarea"
        :rows="8"
        :readonly="true"
      ></el-input>
      <!-- {{ product.productDetail }} -->
    </el-form-item>
    <el-form-item>
      <el-button v-if="judgeTime">下次再来</el-button>
      <el-button @click="pushShow()" v-else>点击购买</el-button>
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
    pushShow: _.throttle(async function () {
      console.log("this", this);
      // ---------------------------------------------------------
      // 明早改下
      let actId = this.product.productId;
      let userId = this.userInfo.userId;
      console.log(actId);
      console.log(userId);
      await this.$store.dispatch("rules/executeRules", { userId, actId });
      if (this.isEffective === "SUCCESS") {
        this.$alert("<strong>余额支付</strong>", "请支付", {
          dangerouslyUseHTMLString: true,
          showCancelButton: true,
          beforeClose: async (action, instance, done) => {
            // console.log(instance);
            // 发送ajax请求，获取path值
            let user_id = this.userInfo.userId;
            let product_id = this.product.productId;
            await this.$store.dispatch("activity/getPath", {
              user_id,
              product_id,
            });
            try {
              if (action === "confirm") {
                // 现在获得真正的路径
                this.$store.state.activity.isPay = 1;
                console.log(this.$store.state.activity.isPay);
                let userId = this.userInfo.userId;
                let path = this.onePath;
                let productId = this.product.productId;
                // console.log(userId);
                // console.log(path);
                // console.log(productId);
                this.$store.dispatch("activity/getTruePath", {
                  userId,
                  path,
                  productId,
                });
                // 判断支付
                // let pay = 1;
                // this.$store.state.activity.isPay = 1
                // console.log(this);
                // this.isPay = 1;
                done();
                this.$router.push({
                  name: "Orders",
                });
              } else {
                this.$store.state.activity.isPay = 0;
                done();
                this.$router.push({
                  name: "Orders",
                });
              }
            } catch (error) {
              done();
            }
          },
        });
      } else {
        this.$message({
          message: "不可以参加该产品秒杀",
          type: "warning",
        });
      }
    }, 5000),
  },
  computed: {
    ...mapState("activity", ["product", "activities", "onePath"]),
    // ...mapState("activity", ["activities"]),
    ...mapState("user", ["userInfo"]),
    ...mapState("rules", ["isEffective"]),
    // ...mapGetters("activity", ["times"]),
    times() {
      let time = [];
      time.push(this.product.startDate);
      time.push(this.product.endDate);
      return time;
    },
    judgeTime() {
      let date = new Date(); //当前标准时间格式
      let year = date.getFullYear(); //取得四位数的年份
      let month = date.getMonth() + 1; //返回0~11之间的数字，0代表一月，11代表12月
      let day = date.getDate(); //返回天数，0~31，getDay()返回的是星期几（0~6）
      let hour = date.getHours(); //获取小时
      let minute = date.getMinutes(); //获取分钟
      let second = date.getSeconds(); //获取秒
      let num = year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second;
      console.log(num);
      console.log(this.times[1]);
      console.log(num < this.times[1]);
      return num < this.times[1];
    },
  },
  mounted() {},
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
