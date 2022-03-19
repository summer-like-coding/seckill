// mock，mockjs,不是mock.js
import Mock from 'mockjs'
import user from './user.json'
import login from './login.json'
import userlist from './userlist.json'
// 写一些虚假数据，mock需要两个参数，1.地址，2，数据
Mock.mock('/register', { code: 200, data: user })
Mock.mock('/login', { code: 200, data: login })
Mock.mock('/logout', { code: 200, data: user })
Mock.mock('/promote',{code:200,data:userlist})