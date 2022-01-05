/**
 *@desc request配置文件
 *@author hx
 *@date 2021/04/08
 */
 import request from '@/server/interceptors.js'
 import { baseUrl } from '@/config/urlConfig'
 export default option => {
   return request({
     baseURL: option.baseURL || baseUrl,
     url: option.url,
     method: option.method,
     data: option.data,
     headers: option.headers || {}
   })
 }
 