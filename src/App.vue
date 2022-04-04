<template>
  <el-container>
    <el-header>
      <Nav></Nav>
    </el-header>
    <el-main>
      <router-view v-if="isRouterAlive"></router-view>
    </el-main>
  </el-container>
</template>


<script>
import Nav from "./components/nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
  provide(){
    return {
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods :{
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    }
  }
};
</script>
<style>
.el-container{
  max-width: 80%;
  margin: 0 auto;
}
.el-header,
.el-footer {
  color: #333;
  margin-bottom: 30px;
  /* text-align: center; */
  /* line-height: 60px; */
}
.el-main {
  color: #333;
  /* text-align: center; */
}
a{
  text-decoration: none;
}
.el-form{
  width: 500px;
  margin: 0 auto;
}
.pagination{
  text-align: center;
  margin: 0 auto;
}
</style>
