import request from './request'
// 获取变量的数据
export function listVariable(token) {
  // console.log("获取的token", token);
  return request({
    url: 'http://localhost:9999/sally/variables/allvar',
    method: 'get',
    params: { token }
  })
}
// 增加变量
export function addVariable(data) {
  return request({
    url: 'http://localhost:9999/sally/variables/addvar',
    data,
    method:'post'
  })
}

// 删除变量
export function deleteVariable(id) {
  console.log("我要删除的id",id);
  return request({
    url: `http://localhost:9999/sally/variables/delvar/${id}`,
    method:'post'
  })
}

// 查看所有规则
export function getLatestRule(id) {
  return request({
    url:'http://localhost:9999/sally/rules/latest',
    method: 'get'
  })
}

// 插入规则
export function insertRule(data) {
  return request.jsonPost('http://localhost:9999/sally/rules/insert', data)
}

// 执行规则
export function executeRule(data) {
  return request({
    url: 'http://localhost:9999/sally/rules/execute',
    data,
    method:'post'
  })
}