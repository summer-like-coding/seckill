<template>
  <div class="list">
    <Orderlist></Orderlist>
    <br>
    <Orderlist></Orderlist>
    <br>
    <Orderlist></Orderlist>
  </div>
</template>

<script>
import Orderlist from "../../components/orderlist.vue";
export default {
  name: "orders",
  components: { Orderlist },
};
</script>

<style scoped>
.list{
  max-width: 80%;
  margin: 0 auto;
}
</style>