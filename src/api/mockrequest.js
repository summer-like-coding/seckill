// 这里面是的axios进行封装

// 为什么需要进行二次封装
// 因为需要配置请求拦截器和响应拦截器，请求拦截器：可以在发请求之前进行一些业务处理，响应拦截器，当服务器数据返回以后，可以处理一些事情

import axios from 'axios'
// 引入进度条
// import nprogress from 'nprogress';
// 引入进度条的样式
// import 'nprogress/nprogress.css'
const requests = axios.create({
    // 目的是为了，让你后写的时候，不用再写/api，因为接口中都带有/api
    // baseURL: '/mock',
    // 请求超时，就报错
    timeout: 5000
});

// 配置请求拦截器

requests.interceptors.request.use((config) => {
    // config为配置对象，header请求头很重要
    // 在请求时，就让进度条开始
    // nprogress.start()
    return config
})

// 配置响应拦截器

requests.interceptors.response.use(
    // 请求成功,服务器接收到相应数据，响应拦截器可以检测到，可以做一些事情
    // 在请求成功后，让进入条结束

    (response) => {
        // nprogress.done()
        // if (response.code === 200) {
        //     return Promise.resolve(response)
        // }
        return response.data
    },
    // 请求失败
    (error) => {
        return Promise.reject(new Error('fail'))
     })

export default requests