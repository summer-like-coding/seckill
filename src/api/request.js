// 对axios进行封装
import axios from "axios";
import store from "../store";
const requests = axios.create({
    baseURL: '/user',
    timeout: 5000,
    headers: {
        'Content-Type':'application/json'
    }
});

// 配置请求拦截器
requests.interceptors.request.use((config) => {
    // 获取用户信息，我需要携带token数据
    if (store.state.user.token) {
        config.headers.token = store.state.user.token
    }
    return config
})
// 配置响应拦截器

requests.interceptors.response.use(
    // 请求成功，返回数据
    (response) => {
        return response.data
    },
    // 请求失败，failed
    (error) => {
        // return Promise.reject(new Error('fail'))
        return error.message
    })

export default requests