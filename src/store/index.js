import Vue from 'vue'
import Vuex from 'vuex'
import user from './user';

// import { reRegister, reLogin,reLogout ,reGetAllList} from "../api/index";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // dialogFormVisible: false,
    // userIdentity: 0,
    // IsPay: '',
    // token: localStorage.getItem('TOKEN'),
    // role: localStorage.getItem("ROLE"),
    // userInfo: {},
    // userlist: [],
    // alllist:{}
  },
  mutations: {
    // pay($state, data) {
    //   console.log("mutation----", data);
    //   console.log(typeof (data));
    //   $state.IsPay = data
    // },
    // LOGIN($state, data) {
    //   $state.token = data
    // },
    // GETUSERINFO($state, data) {
    //   $state.userInfo = data
    // },
    // LOGOUT($state) {
    //   // 清除token
    //   // 删除localstorage
    //   $state.token = "",
    //   $state.role = "",
    //   localStorage.removeItem('TOKEN'),
    //   localStorage.removeItem('ROLE')
    // },
    // GETALLLIST($state, data) {
    //   console.log(data);
    //   console.log(data.records);
    //   // $state.userlist = data.records;
    //   $state.alllist = data;
    // }

  },
  actions: {
    // async register(context, data) {
    //   console.log(data);
    //   let result = await reRegister(data)
    //   console.log(result);
    //   if (result.code === 200) {
    //     return 'ok'
    //   } else {
    //     return Promise.reject(new Error('fail'))
    //   }
    // },
    // async login(context, data) {
    //   let result = await reLogin(data)
    //   console.log(result.data.data);
    //   if (result.code === 200) {
    //     // return 'ok'
    //     console.log(result.data.data.role);
    //     context.commit('LOGIN', result.data.data.token);
    //     localStorage.setItem('TOKEN', result.data.data.token);
    //     localStorage.setItem('ROLE', result.data.data.role);
    //     return 'ok'
    //   } else {
    //     return Promise.reject(new Error('fail'))
    //   }
    // },
    // async getUserInfo(context, data) {
    //   let result = await reLogin(data)
    //   // console.log(result.data.data);
    //   if (result.code === 200) {
    //     context.commit("GETUSERINFO", result.data.data);
    //   } else {
    //     return Promise.reject(new Error('fail'))
    //   }
    // },
    // async Logout(context) {
    //   let result = await reLogout()
    //   // console.log(result);
    //   if (result.code === 200) {
    //     context.commit('LOGOUT',result.data)
    //   }
    // },
    // // 获取所有用户信息
    // async getAlllist(context) {
    //   let result = await reGetAllList()
    //   console.log(result.data.data);
    //   if (result.code === 200) {
    //     context.commit("GETALLLIST",result.data.data)
    //   }
    // }
  },
  getters: {
    // userlist(state) {
    //   return state.alllist.records
    // }
  },
  modules: {
    user
  }
})
