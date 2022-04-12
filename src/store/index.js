import Vue from 'vue'
import Vuex from 'vuex'
import user from './user';
import activity from './activity'
import rules from './rules';
import { addVariable, deleteVariable, executeRule } from "../api/rule";
import { result } from 'lodash';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
    

  },
  actions: {
    
  },
  getters: {

  },
  modules: {
    user,
    activity,
    rules
  }
})
