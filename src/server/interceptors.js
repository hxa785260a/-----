/**
 *@desc request配置文件
 *@author hx
 *@date 2021/04/08
 */
 import axios from 'axios'
 import qs from 'qs'
  //import {  } from '@/utils/sessions/sessionConfig'
 import store from '@/store'
 import { Message } from 'element-ui'
 import whiteList from '@/server/whiteList'
// import tokenList from '@/server/tokenList'
 import router from '@/router'
 // axios 配置
 axios.defaults.timeout = window.serverAPI.timeout // 请求超时事件
 axios.defaults.headers.post['Content-Type'] =
   'application/x-www-form-urlencoded'
 // 添加请求拦截器
 axios.interceptors.request.use(
   config => {
     // 在发送请求之前做些什么了
     store.commit('setLoading', 'create')
     if (
       config.url.includes('/api/passport/login')
     ) {
       // 登录接口不需要token,不然后端会报401
       delete config.headers.Authorization
     } else {
      //  config.headers.Authorization = getTokenMoney() // 
     }
     return config
   },
   error => {
     // 对请求错误做些什么
     return Promise.reject(error)
   }
 )
 
 // 添加响应拦截器
 axios.interceptors.response.use(
   response => {
     store.commit('setLoading', 'finish')
     switch (response.data.Code) {
       case 500:
         Message.error(response.data.Msg || '操作失败')
         break
     }
     // 对响应数据做点什么
     return response.data
   },
   error => {
     if (error.response.status === 500) {
       Message.error(error.response.data.ExceptionMessage)
       router.push({
         path: '/Login'
       })
     }
     store.commit('setLoading', 'finish')
     // 对响应错误做点什么
     return Promise.reject(error)
   }
 )
 export default axios
 