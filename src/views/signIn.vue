<template>
  <el-container class="container">
    <el-aside width="200px">
      <img
        src="https://tse1-mm.cn.bing.net/th/id/OIP-C.nfC2tVNM9TgwQ5QuqECd6wHaFj?w=221&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
        alt=""
        width="100%"
      />
    </el-aside>
    <el-main class="main">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button type="text" @click="dialogFormVisible = true"
            >免费注册</el-button
          >
          <el-dialog title="普通用户注册" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="身份证" :label-width="formLabelWidth">
                <el-input v-model="form.idcard" autocomplete="off"> </el-input>
              </el-form-item>
              <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input v-model="form.password" autocomplete="off" show-password>
                </el-input>
              </el-form-item>
              <el-form-item label="确认密码" :label-width="formLabelWidth">
                <el-input
                  v-model="form.repassword"
                  autocomplete="off"
                  show-password
                ></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="resetForm('form')">重置</el-button>
              <el-button type="primary" @click="submitForm('form')"
                >确 定</el-button
              >
            </div>
          </el-dialog>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
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
        dialogTableVisible: false,
        dialogFormVisible: false,
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        idcard: "",
        password: "",
        repassword: "",
      },
      formLabelWidth: "120px",
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
  resetForm(formName) {
    this.$refs[formName].resetFields();
  },
};
</script>

<style scoped>
.container {
  max-width: 80%;
  margin: 0 auto;
  margin-top: 30px;
}
.main {
  max-width: 600px;
}
</style>
// 表单验证加入有问题