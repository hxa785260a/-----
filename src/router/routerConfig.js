/**
 *@desc    router配置文件
 *@author  hx
 *@date    2021/04/08
 */

// const Login = () => import('@/views/login/login')
const layout = () => import('@/views/layout/layout')
// const error404 = () => import('@/views/error/error404')
const ordinaryGarbage = () => import('@/views/ordinaryGarbage/ordinaryGarbage')
const harmfulGarbage = () => import('@/views/harmfulGarbage/harmfulGarbage')
const themePropaganda = () => import('@/views/themePropaganda/themePropaganda')
const refuseClassification = () => import('@/views/refuseClassification/refuseClassification')
// ordinaryGarbage 普通垃圾
// harmfulGarbage 有害垃圾
// themePropaganda 主题宣传
// refuseClassification 垃圾分类
// 作为layout组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里,如个人中心
export const otherRouter = [
    {
      path: '/layout',
      component: layout,
      children: [
        {
          path: 'ordinaryGarbage',
          name: 'ordinaryGarbage',
          component: ordinaryGarbage,
        },
        {
          path: 'harmfulGarbage',
          name: 'harmfulGarbage',
          component: harmfulGarbage,
        },
        {
          path: 'themePropaganda',
          name: 'themePropaganda',
          component: themePropaganda,
        },
        {
          path: 'refuseClassification',
          name: 'refuseClassification',
          component: refuseClassification,
        }
      ]
    },

  ]

export default [...otherRouter]
