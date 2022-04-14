<template>
  <div>
    <el-backtop :visibility-height='100'></el-backtop>
    <el-row>
      <el-col
        :span="8"
        v-for="(item, index) in activities"
        :key="item.productId"
        :offset="index > 0 ? activities.length : 0"
        class="column"
      >
        <el-card shadow="hover">
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
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      
    };
  },
  mounted() {
    // console.log("挂载一次");
    // this.$router.go(0)
    // this.reload()
    // home页面一挂载，我就去获取用户信息
    // this.$store.dispatch('getUserInfo');
    // this.refresh()

    // 页面一挂载，我就去获取商品列表
    this.$store.dispatch("activity/productList");
  },
  methods: {
    pushShow(data) {
      // console.log(data);
      let product_id = data;
      // 现在就要去获取当前的数据
      this.$store.dispatch("activity/oneProduct", { product_id });
      this.$router.push({
        name: "Grap",
      });
    },
  },
  computed: {
    // 初始化数据
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
.text-gray {
  color: #bcc3ce !important;
}
.el-form {
  width: 400px;
}
.gotoTop{
  height: 100vh;
  overflow-x: hidden;
}
</style>