/**
 *@desc    登录接口
 *@author hx
 *@date    2021/04/08
 */
 import request from '@/server/request'

 export function getLogin (data) {
   return request({
     url: '/api/passport/login',
     method: 'post',
     data: data
   })
 }
 