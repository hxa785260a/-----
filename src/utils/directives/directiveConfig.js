/**
 *@desc    vue指令配置文件
 *@author  hx
 *@date    2021/04/08
 */
 export default {
    install (Vue, options) {
      //  添加全局指令
      Vue.directive('clickoutside', {
        bind: (el, binding, vnode) => {
          let mtarget = document.querySelector(el.dataset.mtarget)
          function documentHanler (e) {
            if (
              el.contains(e.target) ||
              (mtarget && mtarget.contains(e.target))
            ) {
              return false
            }
            if (binding.expression) {
              binding.value(e)
            }
          }
          document.addEventListener('click', documentHanler)
          el._vueClick = documentHanler
        },
        unbind: (el, binding) => {
          document.removeEventListener('click', el._vueClick)
          delete el._vueClick
        }
      })
    }
  }