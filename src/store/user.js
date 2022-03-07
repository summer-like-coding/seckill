import axios from "axios"
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
                ID: 123,
                name: "李四",
                age: 13,
                phone: 123456789,
                late: "false",
                honest: "true",
                state: '否',
                reason: "不诚信"
            },
            {
                ID: 123,
                name: "王五",
                age: 13,
                phone: 123456789,
                late: "false",
                honest: "true",
                state: '否',
                reason: "不诚信"
            },
            {
                ID: 123,
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