<template>
  <div>
    <el-table :data="records">
      <!-- <el-table> -->
      <el-table-column prop="userId" label="ID号"> </el-table-column>
      <el-table-column prop="userName" label="姓名"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="phone" label="电话"> </el-table-column>
      <el-table-column prop="hasWork" label="工作情况" :formatter="formatBoolean" :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column prop="hasCredit" label="诚信程度" :formatter="formatBoolean1" :show-overflow-tooltip="true" >
      </el-table-column>
      <el-table-column>
        <template slot="header" slot-scope="scope">
          <el-input v-model="paginationData.userName" size="mini" placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.$index, scope.row);open();">提升
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加分页器 -->
    <Pagination class="pagination" :size = 'size' :total = 'total' :pages = 'pages' :current = 'current' @getPages = 'getpage'></Pagination>
    <!-- <Pagination class="pagination" :size = '2' :total = '26' :pages = '13' :current = '1' @getPages = 'getpage'></Pagination> -->
  </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from "vuex";
// import pagination from '../../components/pagination.vue';
export default {
  // components: { pagination },
  name: "Promote",
  data() {
    return {
      paginationData: {
        userName: "",
        pageNum: 1,
        pageSize: 5,
        total: 12,
      },
      // search:''
    };
  },
  computed: {
    // ...mapState("user", ["alllist"]),
    ...mapGetters("user", ["records", "size", "current", "pages", "total"]),
    // ...mapState('user',['size','current','pages','total'])
  },
  methods: {
    handleEdit(index, row) {
      row.role = "admin";
      // console.log(index, row);
      console.log("用户信息", row);
      // console.log(this.$route);
      this.$store.dispatch("user/saveUser", row);
      // console.log("提升", this.alllist);
    },
    open() {
      // 在这里面进行异步操作，点击以后，我再次判断一次，如果有，我就成功，没有就失败
      this.$notify({
        title: "成功",
        message: "操作完成",
        type: "success",
      });
    },
    formatBoolean(row, column, cellvalue, index) {
      if (row.hasWork === true) {
        return "就职";
      } else {
        return "失业";
      }
    },
    formatBoolean1(row, column, cellvalue, index) {
      if (row.hasCredit === true) {
        return "诚信";
      } else {
        return "失信";
      }
    },

    getpage(val) {
      console.log("current", val);
      let pageNum = val;
      let pageSize = this.paginationData.pageSize;
      let userName = this.paginationData.userName;
      console.log("请求消息", pageNum, pageSize, userName);
      this.$store.dispatch("user/getPage", { pageNum, pageSize, userName });
    },
  },
  mounted() {
    // 挂载之前，我就去获取所有的数据
    // this.$store.dispatch("user/getAlllist");

    // 获取一些page信息
    let { pageNum, pageSize } = this.paginationData;
    this.$store.dispatch("user/getPage", { pageNum, pageSize });
  },
};
</script>

<style scoped>
</style>