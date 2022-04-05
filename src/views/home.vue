<template>
  <div>
    <el-row class="row">
      <el-col
        :span="8"
        v-for="(item, index) in activities"
        :key="item.productId"
        :offset="index > 0 ? activities.length : 0"
        class="column"
      >
        <el-card>
          <el-form ref="item" :model="item" label-width="80px">
            <el-form-item label="活动名称">
              <!-- <el-input v-model="item.productName"></el-input> -->
              {{ item.productName }}
            </el-form-item>
            <el-form-item label="活动简介">
              <!-- <el-input v-model="item.productDetail"></el-input> -->
              {{ item.productDetail }}
            </el-form-item>
            <el-form-item label="活动类型">
              <!-- <el-input v-model="item.productType"></el-input> -->
              {{ item.productType }}
            </el-form-item>
            <!-- <el-form-item>
              <time class="time">
                倒计时：{{ hour }}:{{ minute }}:{{ second }}
              </time>
            </el-form-item> -->
            <el-form-item>
              <el-button type="primary" @click="pushShow(item.productId)">抢购</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
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
      this.$store.dispatch('activity/oneProduct',{product_id})
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
    ...mapState('user',['userInfo'])
  },
};
</script>

<style scoped>
.column {
  max-width: 32%;
  margin-left: 10px;
  margin-bottom: 10px;
}
.time {
  font-size: 13px;
  color: rgb(190, 34, 34);
}
.boxbottom {
  padding: 14px;
  font-size: 16px;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  margin: 10px;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>