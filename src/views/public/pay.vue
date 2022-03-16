<template>
  <div>
    <!-- <el-table-column type="selection" width="55"> </el-table-column> -->
    <el-table :data="type" border>
      <el-table-column width="55">
        <el-radio-group>
          <el-radio></el-radio>
        </el-radio-group>
      </el-table-column>
      <el-table-column prop="payType" label="京东支付"> </el-table-column>
    </el-table>
    <div class="button">
      <el-button @click="pay()">立即支付</el-button>
    </div>
  </div>
</template>

<script>
// import QRCode from 'qrcode'
export default {
  name: "Pay",
  data() {
    return {
      type: [
        {
          payType: "建设银行",
        },
        {
          payType: "微信",
        },
        {
          payType: "支付宝",
        },
      ],
      // timer:''
    };
  },
  methods: {
    pay() {
      // alert("确认支付");
      // 我这边需要和后面支付码进行校验
      this.$alert("<strong>微信支付</strong>", "请支付", {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        beforeClose: (action, instance, done) => {
          // console.log(instance);
          if (action === "confirm") {
            // 如果用户点击了支付
            done();
            this.$router.push({name:"Imessage"})
          } else {
            // 如果用户未点击
            done();
            this.$router.push({name:"Imessage"})
          }
        },
      });
      // if(!this.timer){
      //   this.timer = setInterval(()=>{
      //     // 发送请求获取用户的支付状态
      //   },1000)
      // }
    },
  },
};
</script>

<style scoped>
.button {
  margin-top: 20px;
  float: right;
}
</style>