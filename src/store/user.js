import axios from "axios"
import { reRegister, reLogin, reGetAllList,reSaveUser,reGetUserInfo } from "../api/index";
// vuex里面的用户信息，我只可以放当前登录的用户
export default {
  namespaced: true,
  actions: {
    async register(context, data) {
      console.log(data);
      let result = await reRegister(data);
      console.log(result.data.userId);
      if (result.code === "200") {
        // return 'ok'
        // localStorage.setItem("USERID", result.data.userId)
        // return 'ok'
        // console.log(result.data);
        context.commit("GETUSERINFO", result.data);
        return "ok"
      } else {
        return Promise.reject(new Error('fail'))
      }
    },
    async login(context, data) {
      console.log('传过去的', data);
      let result = await reLogin(data)
      console.log("到这儿", result);
      if (result.code === "200") {
        // return 'ok'
        // console.log(result.data.role);
        // context.commit('LOGIN', result.data.token);
        localStorage.setItem('TOKEN', result.data.token);
        localStorage.setItem('ROLE', result.data.role);
        localStorage.setItem('PHONE', result.data.phone);
        // localStorage.setItem("PHONE", result.data.phone);
        // localStorage.setItem("PASSWORD",result.data.password)
        // context.commit("GETUSERINFO", result.data);
        return 'ok'
      } else {
        return Promise.reject(new Error('fail'))
      }
    },
    async getUserInfo(context, data) {
      console.log("传过来的id",data);
      let result = await reGetUserInfo(data)
      console.log("我要获取当前用户信息", result);
      if (result.code === "200") {
        // localStorage.setItem('userInfo', result.data);
        context.commit("GETUSERINFO", result.data);
      } else {
        return Promise.reject(new Error('fail'))
      }
    },
    Logout(context) {
      context.commit("LOGOUT");
    },
    // 获取所有用户信息
    async getAlllist(context) {
      let result = await reGetAllList();
      console.log("获取所有用户信息，在promote使用");
      console.log(result);
      if (result.code === "200") {
        context.commit("GETALLLIST", result.data)
      }
    },
    async saveUser(context,data) {
      let result = await reSaveUser(data);
      console.log(result);
    }
  },
  mutations: {
    pay($state, data) {
      console.log("mutation----", data);
      console.log(typeof (data));
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
        // $state.password = "",
        // $state.phone = "",
        $state.phone = '',
        // $state.userInfo = {},
        localStorage.removeItem('TOKEN'),
        localStorage.removeItem('ROLE'),
        localStorage.removeItem('PHONE')
      // localStorage.removeItem('PHONE'),
      // localStorage.removeItem("PASSWORD")
    },
    GETALLLIST($state, data) {
      console.log("获取所有数据", data);
      console.log(data.records);
      // $state.userlist = data.records;
      $state.alllist = data;
    }
  },
  state: {
    // dialogFormVisible: false,
    // userIdentity: 0,
    IsPay: '',
    // password: '',
    // phone:'',
    token: localStorage.getItem('TOKEN'),
    role: localStorage.getItem("ROLE"), 
    phone:localStorage.getItem("PHONE"),
    userInfo: {},
    // userlist: [],
    // 分页
    alllist: {}
  },
  getters: {
    userlist(state) {
      return state.alllist.records
    },
    // phone(state) {
    //   return state.userInfo.phone
    // },
    // password(state) {
    //   return state.userInfo.password
    // }
  }
}