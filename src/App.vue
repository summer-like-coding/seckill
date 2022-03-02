<template>
  <div>
    <el-container>
      <el-header>
        <Nav></Nav>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>


<script>
import Nav from "./components/nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>
<style>
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  color: #333;
  text-align: center;
}
</style>
