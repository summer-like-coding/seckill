<template>
  <div>
    <!-- public用户 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="darkred"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-show="
        $store.state.user.role === 'user' ||
        $store.state.user.role === '' ||
        $store.state.user.role === null
      "
      :router="true"
    >
      <el-menu-item index="home">
        <i class="el-icon-house"></i>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="signin"> 登录 </el-menu-item>
      <el-menu-item index="signup"> 注册 </el-menu-item>
      <el-submenu index="imessage" style="float: right">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>{{ $store.state.user.userInfo.userName || "我的" }}</span>
        </template>
        <el-menu-item index="imessage">
          我的信息
        </el-menu-item>
        <el-menu-item index="home" @click="logout"> 退出 </el-menu-item>
      </el-submenu>
      <el-menu-item index="orders" style="float: right">
        <i class="el-icon-goods"></i>
        <span>订单</span>
      </el-menu-item>
    </el-menu>
    <!-- admin用户 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="darkred"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-show="$store.state.user.role === 'admin'"
      :router="true"
    >
      <el-menu-item index="activities">
        <i class="el-icon-house"></i>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="signin"> 请登录 </el-menu-item>
      <el-submenu index="imessage" style="float: right">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>{{ $store.state.user.userInfo.userName || "我的" }}</span>
        </template>
        <el-menu-item index="imessage">
          <!-- <router-link to="/imessage">
            我的信息
          </router-link> -->
          我的信息
        </el-menu-item>
        <el-menu-item index="home" @click="logout"> 退出 </el-menu-item>
      </el-submenu>
      <!-- <el-menu-item index="activities" style="float: right">
        所有活动
      </el-menu-item> -->
      <!-- <el-menu-item index="manage" style="float: right">
        管理活动
      </el-menu-item> -->
      <!-- <el-menu-item index="details" style="float: right">
        报名详情
      </el-menu-item> -->
      <el-menu-item index="rules" style="float: right"> 规则准入 </el-menu-item>
      <el-menu-item index="variables" style="float: right"> 变量描述 </el-menu-item>
    </el-menu>
    <!-- root用户 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="darkred"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-show="$store.state.user.role === 'root'"
      :router="true"
    >
      <el-menu-item index="promote">
        <i class="el-icon-house"></i>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="signin"> 请登录 </el-menu-item>
      <el-submenu index="imessage" style="float: right">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>{{ $store.state.user.userInfo.userName || "我的" }}</span>
        </template>
        <el-menu-item index="imessage"> 我的信息 </el-menu-item>
        <el-menu-item index="home" @click="logout"> 退出 </el-menu-item>
      </el-submenu>
      <el-menu-item index="promote" style="float: right">
        人员升级
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Nav",
  inject: ["reload"],
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      this.$confirm("确定退出系统?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "info",
      })
        .then(() => {
          this.$store.dispatch("user/Logout");
          this.$message({
            type: "success",
            message: "退出成功!",
          });
          setTimeout(() => {
            location.reload(); // 强制刷新
          }, 1000);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出",
          });
        });
    },
  },
};
</script>

<style scoped>
</style>