import request from '@/utils/request'

export function getConfig(url, params) {
  return request({
    url: '/api/jssdk/config',
    method: 'post',
    data: {
      api: params,
      url
    }
  })
}
// 获取收款人列表
export function getAccountList(data) {
  return request({
    url: 'QueryAccountList.do',
    method: 'get',
    params: data
  })
}
// 转账
export function transfer(data) {
  return request({
    url: 'Transfer.do',
    method: 'get',
    params: data
  })
}
