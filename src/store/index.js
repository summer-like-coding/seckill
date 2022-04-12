import Vue from 'vue'
import Vuex from 'vuex'
import user from './user';
import activity from './activity'

import { addVariable, deleteVariable, executeRule } from "../api/rule";
import { result } from 'lodash';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isEffective:false
  },
  mutations: {


  },
  actions: {
    async addVariables(context, data) {
      console.log('变量', data);
      let result = await addVariable(data)
      console.log(result);
    },
    async deleteVariables(context, data) {
      console.log("删除变量", data);
      let result = await deleteVariable(data)
      console.log(result);
    },
    async executeRules(context, data) {
      console.log("规则执行", data);
      let result = await executeRule(data);
      console.log(result);
    }
  },
  getters: {

  },
  modules: {
    user,
    activity,
  }
})
