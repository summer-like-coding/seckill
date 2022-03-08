<template>
  <div>
    <!-- public用户 -->
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="darkred"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <a href="https://www.csxbank.com/" target="_blank">logo</a>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/signin">请登录</router-link>
      </el-menu-item>
      <el-menu-item index="3" style="float: right">
        <router-link to="/imessage">我的信息</router-link>
      </el-menu-item>
      <el-menu-item index="4" style="float: right">
        <router-link to="/orders">我的订单</router-link>
      </el-menu-item>

    </el-menu>
    <!-- <router-view></router-view> -->
    <!-- admin用户 -->
    <!-- <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="darkred"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <a href="https://www.csxbank.com/" target="_blank">logo</a>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/signin">请登录</router-link>
      </el-menu-item>
      <el-menu-item index="5" style="float: right">
        <router-link to="/">所有活动</router-link>
      </el-menu-item>
      <el-menu-item index="3" style="float: right">
        <router-link to="/launch">发起活动</router-link>
      </el-menu-item>
      <el-menu-item index="4" style="float: right">
        <router-link to="/details">报名详情</router-link>
      </el-menu-item>

    </el-menu> -->
    <!-- root用户 -->
    <!-- <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="darkred"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <a href="https://www.csxbank.com/" target="_blank">logo</a>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/signin">请登录</router-link>
      </el-menu-item>
      <el-menu-item index="3" style="float: right">
        <router-link to="/promote">人员升级</router-link>
      </el-menu-item>
    </el-menu> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
</style>