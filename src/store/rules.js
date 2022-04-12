import axios from "axios";
import { addVariable, deleteVariable, executeRule } from "../api/rule";

export default {
    namespaced: true,
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
            // console.log(result);
            if (result.code === 200) {
                context.commit('EXECUTERULES', result.message)
            }
        }
    },
    mutations: {
        EXECUTERULES($state, data) {
          console.log(data);
          $state.isEffective = data
        }
    
      },
    state: {
        isEffective:'Fail'
    },
    getters: {

    }
}