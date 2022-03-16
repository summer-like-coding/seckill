<template>
  <div>
    <div class="list">
      <Orderlist></Orderlist>
      <br />
      <Orderlist></Orderlist>
      <br />
      <Orderlist></Orderlist>
    </div>
    <Pagination class="pagination"></Pagination>
    <!-- <h2>woshi1{{IsPay}}</h2> -->
  </div>
</template>

<script>
import Orderlist from "../../components/orderlist.vue";
// import { mapState } from "vuex";
// import Pagination from '../../components/pagination.vue';
export default {
  name: "Orders",
  components: { Orderlist},
  data(){
    return{
      msg:''
    }
  },
  // computed:{
  //   ...mapState(['IsPay'])
  // },
};
</script>

<style scoped>
</style>