<template>
  <el-container>
    <el-aside width="200px">
      <img
        src="https://tse1-mm.cn.bing.net/th/id/OIP-C.nfC2tVNM9TgwQ5QuqECd6wHaFj?w=213&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
        alt=""
        width="100%"
      />
      <span>￥1000</span>
      <el-progress :percentage="50"></el-progress>
    </el-aside>
    <el-container>
      <el-main>{{ text }}</el-main>
      <el-footer>
        <el-input-number
          size="mini"
          v-model="num"
          @change="handleChange"
          :min="1"
          :max="10"
          label="描述文字"
        ></el-input-number>
        <el-button>点击购买</el-button>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      text: "小额存单是我行面向个人和企业、机构客户发行的记账式大额存款电子化凭证，是具有标准化期限、最低投资金额要求、市场化定价的存款产品。本行为回馈新老用户，现推出本次聚宝盆小额存款活动。活动总金额10亿，1万一份，共10万份，满足活动条件者每一人限买一份，4.36%超高年化利率，活动开始时间2022年4月27日 20:00，持续3小时，下单成功后，在1小时内，完成支付",
      num: 1,
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
    handleChange(value) {
      console.log(value);
    },
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
</style>