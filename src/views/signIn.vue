<template>
  <el-container>
    <el-aside width="200px">
      <img
        src="https://tse1-mm.cn.bing.net/th/id/OIP-C.nfC2tVNM9TgwQ5QuqECd6wHaFj?w=221&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
        alt=""
        width="100%"
      />
    </el-aside>
    <el-main>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name" auto-complete="on"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <!-- <el-button type="primary" @click="$store.state.dialogFormVisible = true">免费注册</el-button> -->
        </el-form-item>
      </el-form>
      <!-- <Signup></Signup> -->
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
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 8,
            max: 15,
            message: "长度在 8 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
.el-button{
  width: 100px;
  /* height: 36px; */
}
</style>
