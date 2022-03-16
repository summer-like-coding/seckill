<template>
  <div>
    <div class="list">
      <Orderlist></Orderlist>
      <br />
      <Orderlist></Orderlist>
      <br />
      <Orderlist></Orderlist>
    </div>
    <Pagination></Pagination>
  </div>
</template>

<script>
import Orderlist from "../../components/orderlist.vue";
// import Pagination from '../../components/pagination.vue';
export default {
  name: "Orders",
  components: { Orderlist},
  mounted(){
    console.log("我已经挂载l");
    this.$bus.$on("IsPay",(data)=>{
      console.log(`我收到数据${data}`);
    })
  },
  beforeDestroy(){
    this.$bus.$off('IsPay')
  }
};
</script>

<style scoped>
</style>