// 用于所有的接口管理
import request from "./request";
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
// export const reRegister = (data) => {
//     return mockrequest({
//         url: '/register',
//         data,
//         method:'post'
//     })
// }

export const reRegister = (data) => {
    return request({
        url: '/register',
        data,
        method:'post'
    })
}

// 用户登录
// export const reLogin = (data) => {
//     return mockrequest({
//         url: '/login',
//         data,
//         method:'post'
//     })
// }

export const reLogin = (data) => {
    return request({
        url: '/login',
        data,
        method:'post'
    })
}


// 用户退出登录
export const reLogout = (data)=>{
    return mockrequest({
        // 没有退出登录
        url: '/logout',
        data,
        method:'post'
    })
}



// 所有数据
// export const reGetAllList = (data) => {
//     return mockrequest({
//         url: '/promote',
//         data,
//         method:'post'
//     })
// }

export const reGetAllList = (data) => {
    return request({
        url: '/index',
        data,
        method:'post'
    })
}