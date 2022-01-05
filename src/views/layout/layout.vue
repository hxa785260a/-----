/**
 *@desc    全局控制页面
 *@author  hx
 *@date    2021/04/08
 */
<template>
  <div class='layout'>
     <div class="layout-title">
       <layoutTitle />
     </div>
     <div class="appMainConter">
       <div class="LeftMenu">
         <LeftMenu />
       </div>
       <div class="appMain">
         <router-view :key="$route.query.t"></router-view>
       </div>
     </div>
  </div>
</template>

<script>
import LeftMenu from './components/LeftMenu.vue'
import layoutTitle from './components/layoutTitle'
export default {
  name: 'layout',
  components: {
  layoutTitle,
  LeftMenu
  }
}
</script>

<style lang='less' scoped>
.layout {
  height: 100%;
  .layout-title{
    width: 100%;
    height: 80px;
    background-color:rgba(30, 87, 204, 1)
  }
  .appMainConter{
    width: 100%;
    height: calc(~'100% - 80px');
    display: flex;
  }
  .LeftMenu{
   width: 300px;
   height: 100%;
  }
  .appMain{
    width: calc(~'100% - 300px');
    height: 100%;
  }
}
</style>
