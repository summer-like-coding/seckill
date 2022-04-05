<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源">
      <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="pushShow">点击购买</el-button>
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
      form: {
        name: "",
        region: "",
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
    handleChange(value) {
      console.log(value);
    },
    pushShow: _.throttle(() => {
      this.$alert("<strong>余额支付</strong>", "请支付", {
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
            this.$store.commit("pay", action);
            done();
            this.$router.push({ name: "Orders" });
          } else {
            // 如果用户未点击
            // this.IsPay = action
            // done();
            this.$store.commit("pay", action);
            done();
            // this.$bus.$emit('IsPay',this.isPay);
            // this.IsPay = this.isPay;
            this.$router.push({ name: "Orders" });
            // console.log(this.IsPay);
          }
        },
      });

      // console.log("我进行了节流");
    }, 3000),
  },
  computed: {
    // ...mapState(["IsPay"]),
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
