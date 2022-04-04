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
      v-show="
        $store.state.user.role === 'user' ||
        $store.state.user.role === '' ||
        $store.state.user.role === null
      "
      :router="true"
    >
      <el-menu-item index="home">
        <i class="el-icon-house"></i>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="signin">
        登录
      </el-menu-item>
      <el-menu-item index="signup">
        注册
      </el-menu-item>
      <el-submenu index="imessage" style="float: right">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>{{ $store.state.user.userInfo.userName || "我的" }}</span>
        </template>
        <el-menu-item index="imessage">
          <!-- <router-link to="/imessage">
            我的信息
          </router-link> -->
          我的信息
        </el-menu-item>
        <el-menu-item index="home" @click="logout">
          <!-- <router-link to="/home">
            退出
          </router-link> -->
          退出
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="orders" style="float: right">
        <i class="el-icon-goods"></i>
        <span>订单</span>
      </el-menu-item>
    </el-menu>
    <!-- admin用户 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="darkred"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-show="$store.state.user.role === 'admin'"
      :router="true"
    >
      <el-menu-item index="home">
        <i class="el-icon-house"></i>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="signin">
        请登录
      </el-menu-item>
      <el-submenu index="imessage" style="float: right">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>{{ $store.state.user.userInfo.userName || "我的" }}</span>
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
      <el-menu-item index="rules" style="float: right">
        规则准入
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
      v-show="$store.state.user.role === 'root'"
      :router="true"
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
          <span>{{ $store.state.user.userInfo.userName || "我的" }}</span>
        </template>
        <el-menu-item index="imessage">
          <!-- <router-link to="/imessage">
            我的信息
          </router-link> -->
          我的信息
        </el-menu-item>
        <el-menu-item @click="logout">
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
  inject:['reload'],
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      console.log("我要退出");
      // debugger;
      this.$store.dispatch("user/Logout");
      console.log("我退出了，回到主页");
      // this.$router.push({ name: "Home" });
      setTimeout(() => {
        console.log("需要重新加载下");
        this.reload()
      }, 500);
    },
  },
};
</script>

<style scoped>
</style>