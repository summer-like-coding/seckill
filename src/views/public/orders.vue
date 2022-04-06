<template>
  <div>
    <div class="list" v-for="(item,index) in activities" :key="index">
      <Orderlist :item='item'></Orderlist>
      <br />
    </div>
  </div>
</template>

<script>
import Orderlist from "../../components/orderlist.vue";
import { mapState } from "vuex";
// import Pagination from '../../components/pagination.vue';
export default {
  name: "Orders",
  components: { Orderlist},
  data(){
    return{
      msg:''
    }
  },
  computed:{
    ...mapState('activity',['activities'])
  },
};
</script>

<style scoped>
</style>