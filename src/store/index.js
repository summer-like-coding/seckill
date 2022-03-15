import Vue from 'vue'
import Vuex from 'vuex'
import User from './user.js'
import Activity from './activity.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // dialogFormVisible: false,
    // userIdentity:0,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    User,
    Activity
  }
})
