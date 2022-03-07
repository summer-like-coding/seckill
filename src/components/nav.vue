<template>
  <div>
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
        <!-- <router-link to="/home">logo</router-link> -->
      </el-menu-item>
      <el-menu-item index="2">
        <!-- <a href="https://www.ele.me" target="_blank">请登录</a> -->
        <router-link to="/signin">请登录</router-link>
      </el-menu-item>
      <el-menu-item index="3" style="float: right">
        <!-- <a href="https://www.ele.me" target="_blank">我的信息</a> -->
        <router-link to="/imessage">我的信息</router-link>
      </el-menu-item>
      <el-menu-item index="4" style="float: right">
        <!-- <a href="https://www.ele.me" target="_blank">我的订单</a> -->
        <router-link to="/orders">我的订单</router-link>
      </el-menu-item>

    </el-menu>
    <!-- <router-view></router-view> -->
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