<template>
  <el-container>
    <el-aside width="200px">
      <img src="https://www.csxbank.com/Upload/Template/yizhu/SiteConfigPhoto/Original/202008/d8afdbe4-f5e2-4897-8f00-8e7b762b7e27.png" width="100%"/>
    </el-aside>
    <el-main>
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px">
        <el-form-item label="手机" prop="phone">
          <el-input v-model="ruleForm.phone" auto-complete="on" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" show-password prefix-icon="iconfont icon-password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import ElementUI from "element-ui";
export default {
  name: "Signin",
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
        await this.$store.dispatch("user/login", { phone, password });
        // 为了显示我的nav
        setTimeout(() => {
          location.reload(); // 强制刷新
        }, 1000);
        this.$router.push({ name: "Home" });
        
      } catch (error) {
        ElementUI.Message({
          type: "error",
          message: "登陆失败，请检查用户名或密码是否正确",
        });
      }
    },
  },
  beforeDestroy(){
      let role = localStorage.getItem('ROLE');
      if (role === 'root') {
        console.log("我是root");
        // return '/promote'
        this.$router.push({
          name:'Promote'
        })
      } else if (role === 'admin') {
        console.log("我是admin");
        // return '/activities'
        this.$router.push({
          name:'Activities'
        })
      } else {
        console.log("我是其他的");
        // return '/home'
        this.$router.push({
          name:'Home'
        })
      }
  }
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
  background: darkred;
  border: darkred;
  color: #fff;
}
</style>
