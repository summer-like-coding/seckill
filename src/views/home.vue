<template>
  <el-row>
    <el-col
      :span="8"
      v-for="(item, index) in activities"
      :key="item.productId"
      :offset="index > 0 ? activities.length : 0"
      class="column"
    >
      <el-card shadow="hover">
        <!-- <div class="card-image">
          <img src="https://picturepan2.github.io/spectre/img/macos-sierra-2.jpg" alt="" class="img-responsive" />
        </div> -->
        <el-form ref="item" :model="item">
          <div class="card-header">
            <el-form-item class="card-title">{{
              item.productName
            }}</el-form-item>
            <el-form-item class="card-subtitle text-gray">{{
              item.productType
            }}</el-form-item>
          </div>
          <el-form-item class="card-body">{{
            item.productDetail
          }}</el-form-item>
          <div class="card-footer">
            <el-button
              type="primary"
              @click="pushShow(item.productId)"
              class="btn btn-primary"
              >抢购</el-button
            >
          </div>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  // inject:['reload'],
  data() {
    return {
      // activities:[],
      hours: 1,
      minutes: 0,
      seconds: 0,
    };
  },
  mounted() {
    this.add();
    console.log("挂载一次");
    // this.$router.go(0)
    // this.reload()
    // home页面一挂载，我就去获取用户信息
    // this.$store.dispatch('getUserInfo');
    // this.refresh()

    // 页面一挂载，我就去获取商品列表
    this.$store.dispatch("activity/productList");
  },
  methods: {
    // 防止数值小于10时，出现一位数
    num(n) {
      return n < 10 ? "0" + n : "" + n;
    },
    // 倒计时函数
    add() {
      let time = window.setInterval(() => {
        if (this.hours !== 0 && this.minutes === 0 && this.seconds === 0) {
          this.hours -= 1;
          this.minutes = 59;
          this.seconds = 59;
        } else if (
          this.hours === 0 &&
          this.minutes !== 0 &&
          this.seconds === 0
        ) {
          this.minutes -= 1;
          this.seconds = 59;
        } else if (
          this.hours === 0 &&
          this.minutes === 0 &&
          this.seconds === 0
        ) {
          this.seconds = 0;
          window.clearInterval(time);
        } else if (
          this.hours !== 0 &&
          this.minutes !== 0 &&
          this.seconds === 0
        ) {
          this.minutes -= 1;
          this.seconds = 59;
        } else {
          this.seconds -= 1;
        }
      }, 1000);
    },
    pushShow(data) {
      console.log(data);
      let user_id = this.userInfo.userId;
      let product_id = data;
      // 现在就要去获取当前的数据
      this.$store.dispatch("activity/oneProduct", { product_id });
      this.$router.push({
        name: "Grap",
      });
    },
  },
  watch: {
    // 监听数值变化
    second: {
      handler(newVal) {
        this.num(newVal);
      },
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      },
    },
    hour: {
      handler(newVal) {
        this.num(newVal);
      },
    },
  },
  computed: {
    // 初始化数据
    second() {
      return this.num(this.seconds);
    },
    minute() {
      return this.num(this.minutes);
    },
    hour() {
      return this.num(this.hours);
    },
    ...mapState("activity", ["activities"]),
    ...mapState("user", ["userInfo"]),
  },
};
</script>

<style scoped>
*,
::after,
::before {
  box-sizing: inherit;
}
.column {
  width: 32%;
  margin-left: 10px;
  margin-bottom: 10px;
}

.card-body {
  overflow: hidden;
  text-overflow: ellipsis;
  height: 200px;
}
.card-footer {
  padding-bottom: 0.8rem;
  float: right;
}
.img-responsive {
  display: block;
  height: auto;
  max-width: 100%;
}
img {
  border-style: none;
}
.btn.btn-primary {
  background: darkred;
  border: darkred;
  color: #fff;
}
/* .float-right {
    float: right!important;
} */
.text-gray {
  color: #bcc3ce !important;
}
.el-form {
  width: 400px;
}
</style>