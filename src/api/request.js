// 对axios进行封装
import axios from "axios";
import store from "../store";
import ElementUI from 'element-ui';

const requests = axios.create({
    baseURL: '/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },

});


// 配置请求拦截器
// 配置前端限流
requests.interceptors.request.use((config) => {
    // 获取用户信息，我需要携带token数据
    let token = localStorage.getItem("TOKEN");
    // console.log("请求头",config.headers);
    if (!config.headers.hasOwnProperty('token') && token) {
        config.headers.token = token;
    }
    return config
})


// 配置响应拦截器

requests.interceptors.response.use(
    // 请求成功，返回数据
    (response) => {
        //Message 消息提示
        ElementUI.Message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
        });
        return response.data
    },
    // 请求失败，failed
    (error) => {
        ElementUI.Message({
            message: '警告',
            type: 'warning'
        });
        console.log("是这里问题");
        return Promise.reject(error);
    }
)

export default requests