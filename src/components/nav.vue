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
        <a href="https://www.ele.me" target="_blank">logo</a> </el-menu-item
      ><el-menu-item index="2">
        <a href="https://www.ele.me" target="_blank">请登录</a> </el-menu-item
      ><el-menu-item index="3">
        <a href="https://www.ele.me" target="_blank">免费注册</a>
      </el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">我的信息</a> </el-menu-item
      ><el-menu-item index="5">
        <a href="https://www.ele.me" target="_blank">所有活动</a> </el-menu-item
      ><el-menu-item index="6">
        <a href="https://www.ele.me" target="_blank">我的订单</a>
      </el-menu-item>
    </el-menu>
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

<style>
</style>