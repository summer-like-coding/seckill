<template>
  <el-form ref="form" :model="userInfo" label-width="80px">
    <el-form-item label="用户名">
      <!-- <el-input v-model="userInfo.id"></el-input> -->
      {{userInfo.userName}}
    </el-form-item>
    <el-form-item label="昵称">
      <el-input v-model="userInfo.phone"></el-input>
    </el-form-item>
    <!-- 头像 -->
    <el-form-item label="头像">
      <!-- <el-input v-model="userInfo.id"></el-input> -->
      <!-- {{userInfo.id}} -->
       <div class="block"><el-avatar shape="square"></el-avatar></div>
    </el-form-item>
     <!-- 密码 -->
     <el-form-item label="密码">
      <el-input v-model="userInfo.password"></el-input>
    </el-form-item>
    <!-- 性别 -->
    <el-form-item label="性别">
      <el-radio-group v-model="radio">
        <el-radio :label="3">男</el-radio>
        <el-radio :label="6">女</el-radio>
        <el-radio :label="9" >保密</el-radio>
      </el-radio-group>
    </el-form-item>
    <!-- 生日 -->
    <el-form-item label="生日" >
      <el-dropdown size="medium">
        <el-button type="primary">
          请选择<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(item,index) in [1990,1991,1992,1994,1995]" :key="index">{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      年
      <el-dropdown size="medium">
        <el-button type="primary">
          请选择<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(item,index) in [1,2,3,4,5,6,7,8,9,10,11,12]" :key='index'>{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      月
       <el-dropdown size="medium">
        <el-button type="primary">
          请选择<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>日</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      日
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Imessage",
  data() {
    return {
      radio: 3,
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.$router.push({name:'Home'})
    },
  },
  computed:{
    ...mapState(['userInfo'])
  },
  // mounted(){
  //   this.$store.dispatch('getUserInfo');
  // }
};
</script>

<style scoped>
.el-table {
  margin-top: 15px;
  height: 400px;
}
</style>