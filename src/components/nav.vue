<template>
  <div>
    <!-- public用户 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="darkred"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-show="$store.state.User.userIdentity === 0"
      router="true"
    >
      <el-menu-item index="home">
        <!-- <a href="https://www.csxbank.com/" target="_blank">logo</a> -->
        <i class="el-icon-house"></i>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="signin">
        <!-- <router-link to="/signin">请登录</router-link> -->
        登录
      </el-menu-item>
      <el-menu-item index="signup">
        <!-- <router-link to="/signup">注册</router-link> -->
        注册
      </el-menu-item>
      <el-submenu index="imessage" style="float: right">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>我的</span>
        </template>
        <el-menu-item index="imessage">
          <!-- <router-link to="/imessage">
            我的信息
          </router-link> -->
          我的信息
        </el-menu-item>
        <el-menu-item index="home">
          <!-- <router-link to="/home">
            退出
          </router-link> -->
          退出
        </el-menu-item>
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-menu-item index="orders" style="float: right">
        <!-- <router-link to="/orders">
          <i class="el-icon-goods"></i>
          <span>订单</span>
        </router-link> -->
        <i class="el-icon-goods"></i>
        <span>订单</span>
      </el-menu-item>
    </el-menu>
    <!-- <router-view></router-view> -->
    <!-- admin用户 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="darkred"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-if="$store.state.User.userIdentity === 1"
      router="true"
    >
     <el-menu-item index="home">
        <!-- <a href="https://www.csxbank.com/" target="_blank">logo</a> -->
        <i class="el-icon-house"></i>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="signin">
        <!-- <router-link to="/signin">请登录</router-link> -->
        请登录
      </el-menu-item>
      <el-submenu index="imessage" style="float: right">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>我的</span>
        </template>
        <el-menu-item index="imessage">
          <!-- <router-link to="/imessage">
            我的信息
          </router-link> -->
          我的信息
        </el-menu-item>
        <el-menu-item index="home">
          <!-- <router-link to="/home">
            退出
          </router-link> -->
          退出
        </el-menu-item>
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-menu-item index="activities" style="float: right">
        <!-- <router-link to="/activities">所有活动</router-link> -->
        所有活动
      </el-menu-item>
      <el-menu-item index="launch" style="float: right">
        <!-- <router-link to="/launch">发起活动</router-link> -->
        发起活动
      </el-menu-item>
      <el-menu-item index="details" style="float: right">
        <!-- <router-link to="/details">报名详情</router-link> -->
        报名详情
      </el-menu-item>
    </el-menu>
    <!-- root用户 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="darkred"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-if="$store.state.User.userIdentity === 2"
      router="true"
    >
      <el-menu-item index="home">
        <!-- <a href="https://www.csxbank.com/" target="_blank">logo</a> -->
        <i class="el-icon-house"></i>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="signin">
        <!-- <router-link to="/signin">请登录</router-link> -->
        请登录
      </el-menu-item>
      <el-submenu index="imessage" style="float: right">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>我的</span>
        </template>
        <el-menu-item index="imessage">
          <!-- <router-link to="/imessage">
            我的信息
          </router-link> -->
          我的信息
        </el-menu-item>
        <el-menu-item index="home">
          <!-- <router-link to="/home">
            退出
          </router-link> -->
          退出
        </el-menu-item>
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-menu-item index="promote" style="float: right">
        <!-- <router-link to="/promote">人员升级</router-link> -->
        人员升级
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    console.log(this.$store.state.User.userIdentity);
    // console.log(this.$store);
  },
  // computed: {
  //   ...mapState("User", ["userIdentity"]),
  // },
};
</script>

<style scoped>
</style>