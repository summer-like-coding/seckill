<template>
  <el-row class="row">
    <el-col
      :span="8"
      v-for="(item, index) in title.length"
      :key="item"
      :offset="index > 0 ? title.length : 0"
      class="column"
    >
      <el-card>
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div class="boxbottom">
          <span>{{title[index]}}</span>
          <!-- <span >未参与</span> -->
          <div class="bottom clearfix">
            <time class="time"
              >倒计时：{{ hour }}:{{ minute }}:{{ second }}</time
            >
            <el-button class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      title:["余额宝",'悄悄攒','荷花','零钱通'],
      hours: 1,
      minutes: 0,
      seconds: 0,
    };
  },
  mounted() {
    this.add();
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
  },
};
</script>

<style scoped>
.row {
  margin-top: 30px;
  max-width: 99%;
  /* margin: 0 auto; */
}
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
  margin-top: 10px;
  padding: 0;
  /* float: right; */
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