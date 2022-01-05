/**
 *@desc    公用界面
 *@author hx
 *@date    2021/04/08
 */
 import request from '@/server/request'

 export function baseQuery (data) {
   return request({
     url: '/api/Get/View',
     method: 'post',
     data: data
   })
 }
 