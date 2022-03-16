import axios from "axios"
// vuex里面的用户信息，我只可以放当前登录的用户
export default {
    namespaced: true,
    actions: {
        
    },
    mutations: {
        newdata(){
            tableData.filter(
              (data) =>
                !search || data.name.toLowerCase().includes(search.toLowerCase())
            )
          }
    },
    state: {
        // 这个时用来表示用户的身份
        userIdentity:2,
        tableData: [
            {
                ID: 123,
                name: "张三",
                age: 13,
                phone: 123456789,
                late: "false",
                honest: "true",
                state: '否',
                reason: "不诚信"
            },
            {
                ID: 124,
                name: "李四",
                age: 13,
                phone: 123456789,
                late: "false",
                honest: "true",
                state: '否',
                reason: "不诚信"
            },
            {
                ID: 125,
                name: "王五",
                age: 13,
                phone: 123456789,
                late: "false",
                honest: "true",
                state: '否',
                reason: "不诚信"
            },
            {
                ID: 126,
                name: "赵六",
                age: 13,
                phone: 123456789,
                late: "false",
                honest: "true",
                state: '否',
                reason: "不诚信"
            },
        ],
    },
    getters: {

    }
}