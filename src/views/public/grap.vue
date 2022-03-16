<template>
  <div>
    <el-container>
    <el-aside>
      <img
        src="https://tse1-mm.cn.bing.net/th/id/OIP-C.nfC2tVNM9TgwQ5QuqECd6wHaFj?w=213&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
        alt=""
        width="100%"
      />
      <div>价格：$1000</div>
      <!-- <el-progress :percentage="50"></el-progress> -->
    </el-aside>
    <el-container>
      <el-main>
        <p>{{ text }}</p>
        <el-input-number
          v-model="num"
          @change="handleChange"
          :min="1"
          :max="10"
          label="描述文字"
        ></el-input-number>
        <el-button @click="pushShow()">点击购买</el-button>
      </el-main>
      
    </el-container>
  </el-container>
  <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name:"Grap",
  data() {
    return {
      text: "小额存单是我行面向个人和企业、机构客户发行的记账式大额存款电子化凭证，是具有标准化期限、最低投资金额要求、市场化定价的存款产品。本行为回馈新老用户，现推出本次聚宝盆小额存款活动。活动总金额10亿，1万一份，共10万份，满足活动条件者每一人限买一份，4.36%超高年化利率，活动开始时间2022年4月27日 20:00，持续3小时，下单成功后，在1小时内，完成支付",
      num: 1,
      isPay:'',
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
    handleChange(value) {
      console.log(value);
    },
    pushShow(){
      this.$alert("<strong>微信支付</strong>", "请支付", {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        beforeClose: (action, instance, done) => {
          // console.log(instance);
          if (action === "confirm") {
            // 如果用户点击了支付
            // this.isPay = action
            // done();
            // debugger;
            // this.$bus.$emit('IsPay',this.isPay);
            // debugger;
            // this.IsPay = this.isPay;
            this.$store.commit('pay',action);
            done();
            this.$router.push({name:"Orders"})
          } else {
            // 如果用户未点击
            // this.IsPay = action
            // done();
            this.$store.commit('pay',action);
            done();
            // this.$bus.$emit('IsPay',this.isPay);
            // this.IsPay = this.isPay;
            this.$router.push({name:"Orders"});
            // console.log(this.IsPay);
          }
        },
      })
    },
  },
  computed:{
    ...mapState(['IsPay'])
  }

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
.el-button{
  margin-left:30px ;
}
.el-input-number{
  margin-right: 30px;
}
</style>
