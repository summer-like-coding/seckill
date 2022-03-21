<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="账号" prop="phone">
      <el-input
        type="text"
        v-model="ruleForm.phone"
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
    <el-form-item label="年龄" prop="age">
      <el-input v-model.number="ruleForm.age"></el-input>
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
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
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
        age: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    // submitForm(formName) {
    //   // this.$refs[formName].validate((valid) => {
    //   //   if (valid) {
    //   //     alert("submit!");
    //   //   } else {
    //   //     console.log("error submit!!");
    //   //     return false;
    //   //   }
    //   // });
    //   // this.$store.dispatch("register")
    // },
    async submitForm() {
      try {
        const { phone, iscard, password } = this.ruleForm;
        console.log(phone, password);
        console.log("手机号", typeof phone);
        console.log("密码", typeof password);
        const msg = { phone, password };
        await this.$store.dispatch("user/register", msg);
        console.log("是否执行");
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