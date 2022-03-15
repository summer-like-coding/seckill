// 对axios进行封装
import axios from "axios";
import { config } from "vue/types/umd";

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
});

// 配置请求拦截器
requests.interceptors.request.use((config) => {
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
        return Promise.reject(new Error('failed'))
    })

export default requests