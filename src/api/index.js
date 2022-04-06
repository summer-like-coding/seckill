// 用于所有的接口管理
import request from "./request";
// import mockrequest from './mockrequest';

export const reRegister = (data) => {
    console.log(data);
    return request({
        url: '/user/register',
        // data:JSON.stringify(data),
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
        url: '/user/login',
        data,
        method:'post'
    })
}


// 用户退出登录
// export const reLogout = (data)=>{
//     return mockrequest({
//         // 没有退出登录
//         url: '/logout',
//         data,
//         method:'post'
//     })
// }



// 所有数据
// export const reGetAllList = (data) => {
//     return mockrequest({
//         url: '/promote',
//         data,
//         method:'post'
//     })
// }

export const reGetAllList = () => {
    return request({
        url: '/user/index',
        method:'get'
    })
}


// 修改用户信息
export const reSaveUser = (data) => {
    return request({
        url: '/user/save',
        method: 'post',
        data
    })
}


// 获取当前用户信息
export const reGetUserInfo = (phone) => {
    // console.log("axios封装的电话", phone);
    // console.log("axios封装的电话",phone);
    return request({
        url: `/user/myself/${phone}`,
        method: 'get'
    })
}

export const rePage = (params) => {
    return request({
        url: '/user/page',
        params,
        method:'get'
    }) 
}

// 查看所有秒杀活动列表
// export const reProductList = (params) => {
//     return mockrequest({
//         url: 'product/list',
//         params,
//         method:'get'
//     })
// }

export const reProductList = () => {
    console.log("发送请求");
    return request({
        url: '/product/list',
        method:'get'
    })
}


// 获取当前商品
export const reOneProduct = (params) => {
    // console.log("获取用户ID",params.user_id);
    // console.log("获取商品ID",params);
    return request({
        url: `/product/${params.product_id}`,
        method:'get'
    })
}

// 获取path
export const reGetPath = (params) => {
    console.log("获取参数",params);
    return request({
        url: `/getPath/${params.user_id}/${params.product_id}`,
        method:'get'
    })
}


// 获取真正的秒杀
export const reGetTruePath = (params) => {
    console.log("获取真正的参数", params);
    return request({
        url: `/${params.userId}/${params.path}/${params.productId}`,
        method:'get'
    })
}