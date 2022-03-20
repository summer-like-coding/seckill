<template>
  <div>
    <el-table
      :data="
        userlist.filter(
          (data) =>
            !search ||
            data.userName.toLowerCase().includes(search.toLowerCase()) ||
            data.phone.indexOf(search) !== -1
        )
      "
    >
      <!-- <el-table> -->
      <el-table-column prop="userId" label="ID号"> </el-table-column>
      <el-table-column prop="userName" label="姓名"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="phone" label="电话"> </el-table-column>
      <el-table-column prop="hasWork" label="工作情况">
        <!-- <i class="el-icon-success" v-show="prop"></i>
        <i class="el-icon-error" v-show="!prop"></i> -->
        <el-button type="danger" icon="el-icon-error" v-show="!props"></el-button>
        <el-button type="success" icon="el-icon-success" v-show="props"></el-button>
      </el-table-column>
      <el-table-column prop="hasCredit" label="诚信程度">
        <!-- <i class="el-icon-success" v-show="prop"></i>
        <i class="el-icon-error" v-show="!prop"></i> -->
        <el-button type="danger" icon="el-icon-error"></el-button>
        <el-button type="success" icon="el-icon-success"></el-button>
      </el-table-column>
      <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          clearable="true"
          placeholder="输入关键字搜索"/>
      </template>
        <template slot-scope="scope">
          <el-button
            @click="
              handleEdit(scope.$index, scope.row);
              open();
            "
            >提升</el-button
          >
          <el-button
            type="danger"
            @click.native.prevent="
              handleDelete(scope.$index, userlist);
              open();
            "
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加分页器 -->
    <Pagination class="pagination" :paginationData = 'paginationData'></Pagination>
  </div>
</template>
<script>
import { mapMutations, mapState ,mapGetters} from "vuex";
// import pagination from '../../components/pagination.vue';
export default {
  // components: { pagination },
  name: "Promote",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    // ...mapState(["userlist"]),
    ...mapGetters('user',['userlist'])
  },
  // watch:{
  //   immediate:true,
  //   userlist(newvalue,oldvalue){
  //     alert("变化了")
  //   }
  // },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      row.splice(index, 1);
    },
    open() {
      // 在这里面进行异步操作，点击以后，我再次判断一次，如果有，我就成功，没有就失败
      this.$notify({
        title: "成功",
        message: "操作完成",
        type: "success",
      });
    },

    // ...mapMutations("User",['newdata'])
  },
  mounted() {
    // 挂载之前，我就去获取所有的数据
    this.$store.dispatch("user/getAlllist");
  },
};
</script>

<style scoped>

</style>