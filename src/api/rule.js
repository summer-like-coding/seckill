import request from './request'
// 获取变量的数据
export function listVariable(token) {
  return request({
    url: 'http://47.96.38.160:8800/sally/variables/allvar',
    method: 'get',
    params: { token }
  })
}
// 增加变量
export function addVariable(data) {
  return request({
    url: 'http://47.96.38.160:8800/sally/variables/addvar',
    data,
    method:'post'
  })
}

// 删除变量
export function deleteVariable(id) {
  console.log(id);
  return request({
    url: `http://47.96.38.160:8800/sally/variables/delvar/${id}`,
    method:'post'
  })
}

// 查看所有规则
export function getLatestRule(id) {
  return request({
    url:'http://47.96.38.160:8800/sally/rules/latest',
    method: 'get'
  })
}

// 插入规则
export function insertRule(data) {
  return request.jsonPost('http://47.96.38.160:8800/sally/rules/insert', data)
}

// 执行规则
export function executeRule(data) {
  return request({
    url: 'http://47.96.38.160:8800/sally/rules/execute',
    data,
    method:'post'
  })
}