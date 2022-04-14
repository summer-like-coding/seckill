<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="手机" prop="phone">
      <el-input
        type="text"
        v-model="ruleForm.phone"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="用户名" prop="userName">
      <el-input
        type="text"
        v-model="ruleForm.userName"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="身份证" prop="idCard">
      <el-input
        type="text"
        v-model="ruleForm.idCard"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="ruleForm.password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input
        type="password"
        v-model="ruleForm.checkPass"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Signup",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        phone: "",
        idCard: "",
        password: "",
        checkPass: "",
        userName:'',
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const { phone, idCard, password ,userName} = this.ruleForm;
        const msg = { phone, password ,idCard,userName};
        console.log("提交信息",msg);
        await this.$store.dispatch("user/register", msg);
        // console.log("是否执行");
        this.$router.push({ name: "Signin" });
      } catch (error) {
        // alert('fail')
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.el-form {
  width: 600px;
  margin: 0 auto;
}
</style>