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
    };
  },
  methods: {
    pay() {
      // alert("确认支付");
      this.$prompt("请输入密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
      // 我这边需要和后面支付码进行校验
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "成功支付",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "未支付",
          });
        });
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