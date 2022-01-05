/**
 *@desc    session配置文件
 *@author  hx
 *@date    2021/04/08
 */
 export function setToken (accessToken) {
    window.sessionStorage.setItem('token', accessToken)
  }
  export function getToken () {
    return window.sessionStorage.getItem('token')
  }
  export function removeToken () {
    window.sessionStorage.removeItem('token')
  }