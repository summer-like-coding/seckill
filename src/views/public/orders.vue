<template>
  <div>
    <el-card class="box-card" v-for="(item,index) in activities" :key="index" shadow="hover">
      <Orderlist :item='item' class="text item"></Orderlist>
    </el-card>
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
 .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    margin-bottom: 15px;
  }
</style>