<template>
  <el-container>
    <el-aside width="200px">
      <img
        src="https://www.csxbank.com/Upload/Template/yizhu/SiteConfigPhoto/Original/202008/d8afdbe4-f5e2-4897-8f00-8e7b762b7e27.png"
        alt=""
        width="100%"
      />
    </el-aside>
    <el-main>
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px">
        <el-form-item label="手机" prop="phone">
          <el-input v-model="ruleForm.phone" auto-complete="on"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
// import Signup from "./signup.vue";
export default {
  name: "Signin",
  // components: { Signup },
  data() {
    return {
      ruleForm: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const { phone, password } = this.ruleForm;
        await this.$store.dispatch('user/login',{phone,password})
        this.$router.push({name:'Home'})
      } catch (error) {
        alert(error.name)
      }
    },
  },
};
</script>

<style scoped>
.el-main {
  max-width: 600px;
}
.frontfooter {
  text-align: center;
  margin: 0 auto;
}
.el-button {
  width: 100px;
}
</style>
