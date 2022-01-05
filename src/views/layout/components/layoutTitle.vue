/**
 *@desc    全局头部
 *@author  hx
 *@date    2021/04/08
 */
<template>
  <div class='layoutTitle'>
      <!-- 左侧 -->
     <div class="title-left">
         <div class="community"><span>智慧社区管理平台</span></div>
         <div class="transverse"></div>
         <div class="menu">  
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                七星岗街道<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>七星岗街道</el-dropdown-item>
                    <el-dropdown-item>领市巷社区</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
  </div>
     </div>
     <!-- 菜单 -->
     <div class="title-center">
         <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" disabled>首页</el-menu-item>
            <el-menu-item index="2">场景应用</el-menu-item>
         </el-menu>
     </div>
     <!-- 个人信息 -->
     <div class="title-right">
      <div class="icon">
          <span class="el-icon-bell"></span>
      </div>
      <div class="information">
          <img class="informationImg" src="../../../assets/img/userTop.png" alt="">
             <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                李美丽<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
      </div>
     </div>
  </div>
</template>

<script>

export default {
  name: 'layoutTitle',
  components: {
  
  },
  data(){
      return {
        activeIndex: '2',
      }
  },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang='less' scoped>
.layoutTitle{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .title-left{
        display: flex;
        height: 80px;
        line-height: 80px;
        .community{
            span{
             font-weight:500;
             font-style:normal;
             font-size:24px;
             color:#fff;
             padding:0 20px 0 30px;
            }
        }
        .transverse{
         width: 24px;
         height: 2px;
         background: #fff;
         margin: 39px 20px 0 0;
        }
        .menu{
            cursor: pointer;
            span{
                color: #fff;
                font-size: 18px;
            }
        }
    }
    .title-center{
        width: 800px;
    .el-menu{
        height: 80px;
        background-color:rgba(30, 87, 204, 1);
        border-bottom: none;
    .el-menu-item{
        height: 80px;
        line-height: 80px;
        color: #fff;
        font-size: 18px;
        border-bottom: none;
    }
    .el-menu-item:not(.is-disabled):focus{
        background: rgba(45, 108, 237, 1);
     }
      .el-menu-item:not(.is-disabled):hover{
        background: rgba(45, 108, 237, 1);
     }
     .el-menu-item:not(.is-disabled):before{
        background: rgba(45, 108, 237, 1);
     }
     .el-menu-item.is-active{
        border-bottom: none;
     }
     .is-active{
        background: rgba(45, 108, 237, 1);
     }
    }
    }
   
    .title-right{
        display: flex;
        height: 80px;
        .icon{
            padding-right: 20px;
            line-height: 94px;
            .el-icon-bell{
                font-size: 28px;
                color: #fff;
            }
        }
        .information{
            line-height: 80px;
            .informationImg{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                vertical-align: middle;
                margin-right: 10px;
            }
            span{
                cursor: pointer;
                color: #fff;
                font-size: 18px;
                margin-right: 40px;
            }
        }
    }
}
</style>
