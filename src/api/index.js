// 用于所有的接口管理
import requests from "./request";
// mock数据
import mockrequest from './mockrequest'

// 用户注册
// export const reRegister = (data) => {
//     return requests({
//         url: '/user/register',
//         data,
//         method:'post'
//     })
// }

// 用户注册
export const reRegister = (data) => {
    return mockrequest({
        url: '/register',
        data,
        method:'post'
    })
}

// 用户登录
export const reLogin = (data) => {
    return mockrequest({
        url: '/login',
        data,
        method:'post'
    })
}
