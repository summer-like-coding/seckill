<template>
  <el-form ref="form" :model="userInfo" label-width="80px">
    <el-form-item label="用户ID">
      <!-- <el-input v-model="userInfo.id"></el-input> -->
      {{ userInfo.userId }}
    </el-form-item>
    <el-form-item label="用户名">
      <el-input v-model="userInfo.userName"></el-input>
      <!-- {{ userInfo.userName }} -->
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model="userInfo.phone"></el-input>
    </el-form-item>
    <!-- 权限 -->
    <el-form-item label="角色">
      <!-- <el-input v-model="userInfo.id"></el-input> -->
      {{ userInfo.role }}
    </el-form-item>
    <!-- 密码 -->
    <el-form-item label="密码">
      <el-input v-model="userInfo.password"></el-input>
    </el-form-item>
    <el-form-item label="身份证">
      <el-input v-model="userInfo.idCard"></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input v-model.number="userInfo.age"></el-input>
    </el-form-item>
    <el-form-item label="就业情况">
      <el-radio-group v-model="userInfo.hasCredit">
        <el-radio :label="true">在职</el-radio>
        <el-radio :label="false">无业</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="诚信度">
      <el-radio-group v-model="userInfo.hasWork">
        <el-radio :label="true">诚信</el-radio>
        <el-radio :label="false">失信</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Imessage",
  data() {
    return {
      // radioCredit:true
    };
  },
  methods: {
    async onSubmit() {
      try {
        console.log("当前用户信息",this.userInfo);
        await this.$store.dispatch("user/saveUser", this.userInfo);
        // await this.$store.dispatch("user/saveUser", {...this.userInfo});
        console.log("我要跳转到home");
        this.$router.push({ name: "Home" });
      } catch (error) {
        console.log("hello");
      }
    },
  },
  computed: {
    ...mapState("user", ["userInfo"]),
  },
};
</script>

<style scoped>
.el-table {
  margin-top: 15px;
  height: 400px;
}
.el-button {
  /* margin-left: 30px; */
  background: darkred;
  border: darkred;
  color: #fff;
}
.el-button:hover {
  /* margin-left: 30px; */
  background: rgb(167, 89, 89);
  border: rgb(154, 56, 56);
  color: rgb(214, 185, 185);
}

</style>