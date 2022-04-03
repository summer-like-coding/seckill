import axios from "axios"
import { reRegister, reLogin, reGetAllList, reSaveUser, reGetUserInfo, rePage } from "../api/index";
// vuex里面的用户信息，我只可以放当前登录的用户
export default {
  namespaced: true,
  actions: {
    async register(context, data) {
      // console.log(data);
      let result = await reRegister(data);
      // console.log(result.data.userId);
      if (result.code === "200") {
        context.commit("GETUSERINFO", result.data);
        return "ok"
      } else {
        return Promise.reject(new Error('fail'))
      }
    },
    async login(context, data) {
      // console.log('传过去的', data);
      let result = await reLogin(data);
      // console.log("到这儿", result);
      if (result.code === "200") {
        localStorage.setItem('TOKEN', result.data.token);
        localStorage.setItem('ROLE', result.data.role);
        localStorage.setItem('PHONE', result.data.phone);
        return 'ok'
      } else {
        return Promise.reject(new Error('fail'))
      }
    },
    async getUserInfo(context, data) {
      // console.log("传过来的id", data);
      let result = await reGetUserInfo(data)
      // console.log("我要获取当前用户信息", result);
      if (result.code === "200") {
        context.commit("GETUSERINFO", result.data);
      } else {
        console.log("我的code不是200");
        // return Promise.reject(new Error('fail'))
      }
    },
    Logout(context) {
      context.commit("LOGOUT");
    },
    // 获取所有用户信息
    async getAlllist(context) {
      let result = await reGetAllList();
      // console.log("获取所有用户信息，在promote使用", result);
      // console.log(result);
      if (result.code === "200") {
        context.commit("GETALLLIST", result.data)
      }
    },
    // 修改数据
    async saveUser(data) {
      console.log("我要修改信息",data);
      let result = await reSaveUser(data);
      // localStorage.setItem("PHONE",result.data.phone)
      console.log("修改", result);
      if (result.code === '200') {
        console.log("成功修改");
      } else {
        console.log("未修改");
      }
    },
    // 获取page信息
    async getPage(context, data) {
      // console.log("获取分页信息");
      let result = await rePage(data);
      console.log("分页",result.data);
      context.commit("GETPAGE", result.data)
    }
  },
  mutations: {
    pay($state, data) {
      console.log("mutation----", data);
      // console.log(typeof (data));
      $state.IsPay = data
    },
    LOGIN($state, data) {
      $state.token = data
    },
    GETUSERINFO($state, data) {
      console.log("我mutation了，当前用户信息", data);
      $state.userInfo = data
    },
    LOGOUT($state) {
      // 清除token
      // 删除localstorage
      $state.token = "",
        $state.role = "",
        $state.phone = '',
        localStorage.removeItem('TOKEN'),
        localStorage.removeItem('ROLE'),
        localStorage.removeItem('PHONE')

    },
    GETALLLIST($state, data) {
      console.log("获取所有数据", data);
      $state.alllist = data;
    },
    GETPAGE($state, data) {
      $state.allPage = data
    }
  },
  state: {
    IsPay: '',
    token: localStorage.getItem('TOKEN'),
    role: localStorage.getItem("ROLE"),
    phone: localStorage.getItem("PHONE"),
    userInfo: {},
    alllist: {},
    allPage: {}
    // 分页
  },
  getters: {
    userlist(state) {
      // console.log("所有用户信息",state);
      return state.alllist
    },
    records(state) {
      return state.allPage.records
    },
    size(state) {
      // console.log("每页数",state.allPage.size);
      return state.allPage.size
    },
    total(state) {
      // console.log("请求个数",state.allPage.total);
      return state.allPage.total
    },
    current(state) {
      // console.log("当前页数",state.allPage.current);
      return state.allPage.current
    },
    pages(state) {
      // console.log("总页码",state.allPage.pages);
      return state.allPage.pages
    },

  }
}