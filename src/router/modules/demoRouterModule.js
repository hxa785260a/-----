/**
 *@desc    模块子路由
 *@author  hx
 *@date    2021/04/08
 */

const Demo = () => import('@/views/demo/Demo')

export default [
  {
    path: 'demo',
    name: 'Demo',
    component: Demo
  }
]
