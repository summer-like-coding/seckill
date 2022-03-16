import Vue from 'vue'
import Vuex from 'vuex'
import User from './user.js'
import Activity from './activity.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // dialogFormVisible: false,
    // userIdentity:0,
    IsPay: 'cc'
  },
  mutations: {
    pay($state, data) {
      console.log("mutation----", data);
      console.log(typeof(data));
      $state.IsPay = data
    }
  },
  actions: {
    // pay($state, data) {
    //   console.log("mutation----", data);
    //   console.log(typeof(data));
    //   $state.IsPay = data
    // }
  },
  modules: {
    User,
    Activity
  }
})
