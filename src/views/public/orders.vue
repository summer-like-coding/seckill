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
};
</script>

<style scoped>
</style>