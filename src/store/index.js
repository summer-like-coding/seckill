import Vue from 'vue'
import Vuex from 'vuex'
import User from './user.js'
import Activity from './activity.js'

import { reRegister ,reLogin} from "../api/index";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // dialogFormVisible: false,
    userIdentity:0,
    IsPay: '',
    token: localStorage.getItem('TOKEN'),
    role:localStorage.getItem("ROLE"),
    userInfo:{}
  },
  mutations: {
    pay($state, data) {
      console.log("mutation----", data);
      console.log(typeof(data));
      $state.IsPay = data
    },
    LOGIN($state, data) {
      $state.token = data
    },
    GETUSERINFO($state, data) {
      $state.userInfo = data
    }

  },
  actions: {
    async register(context,data) {
      let result = await reRegister(data)
      console.log(result);
      if (result.code === 200) {
        return 'ok'
      } else {
        return Promise.reject(new Error('fail'))
      }
    },
    async login(context,data) {
      let result = await reLogin(data)
      console.log(result.data.data);
      if (result.code === 200) {
        // return 'ok'
        // console.log(result.data.data.token);
        context.commit('LOGIN', result.data.data.token);
        localStorage.setItem('TOKEN', result.data.data.token);
        localStorage.setItem('ROLE', result.data.data.role);
        return 'ok'
      } else {
        return Promise.reject(new Error('fail'))
      }
    },
    async getUserInfo(context, data) {
      let result = await reLogin(data)
      console.log(result.data.data);
      if (result.code === 200) {
        context.commit("GETUSERINFO", result.data.data);
      } else {
        return Promise.reject(new Error('fail'))
      }
    }

  },
  modules: {
    User,
    Activity
  }
})
