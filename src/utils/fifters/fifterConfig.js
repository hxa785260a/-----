/**
 *@desc    vue过滤器配置文件
 *@author  hx
 *@date    2021/04/08
 */
 export default {
    install (Vue, options) {
      // // 过滤时间
      Vue.filter('dateFilterYMD', time => {
        if (!time) {
          // 当时间是null或者无效格式时我们返回空
          return ''
        } else {
          // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
          const date = new Date(time)
          const dateNumFun = num => (num < 10 ? `0${num}` : num)
          const [Y, M, D] = [
            date.getFullYear(),
            dateNumFun(date.getMonth() + 1),
            dateNumFun(date.getDate())
          ]
          return `${Y}-${M}-${D}` // 一定要注意是反引号，否则无效。
        }
      })
  
      // // 过滤时间
      Vue.filter('dateFilterYMDHMS', time => {
        if (!time) {
          // 当时间是null或者无效格式时我们返回空
          return ' '
        } else {
          // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
          const date = new Date(time)
          const dateNumFun = num => (num < 10 ? `0${num}` : num)
          const [Y, M, D, h, m, s] = [
            date.getFullYear(),
            dateNumFun(date.getMonth() + 1),
            dateNumFun(date.getDate()),
            dateNumFun(date.getHours()),
            dateNumFun(date.getMinutes()),
            dateNumFun(date.getSeconds())
          ]
          return `${Y}-${M}-${D} ${h}:${m}:${s}` // 一定要注意是反引号，否则无效。
        }
      })
    }
  }
  