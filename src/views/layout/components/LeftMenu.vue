/**
 *@desc    左侧菜单
 *@author  hx
 *@date    2022/01/05
 */
<template>
  <div class='leftMenu'>
      <el-tree 
      :data="data" 
      :props="defaultProps"
      :default-expand-all="true"
       @node-click="handleNodeClick">
      </el-tree>
  </div>
</template>

<script>

export default {
  name: 'leftMenu',
  components: {
  
  },
  data(){
      return {
        data: [{
          label: '垃圾分类管理',
          children: [{
            label: '普通垃圾上报记录',
            path:'/layout/ordinaryGarbage'
          },{
            label: '有害垃圾上报记录',
            path:'/layout/harmfulGarbage'
          },{
            label: '主题宣传活动记录',
            path:'/layout/themePropaganda'
          },{
            label: '垃圾分类数据分析',
            path:'/layout/refuseClassification'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
  },
    methods: {
        handleNodeClick(data){
        this.$router.push({
          path: data.path,
        query:{
          t: Date.now(),
         },
        })
        }
    }
}
</script>

<style lang='less'>
.leftMenu{
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  .el-tree-node__children{
 .el-tree-node:focus > .el-tree-node__content{
    background: rgba(45, 108, 237, 1);
    color: #fff;
  }
  .el-tree-node__content:hover {
    background: rgba(45, 108, 237, 1);
    color: #fff;
}
  .is-current{
      background: rgba(45, 108, 237, 1);
      color: #fff;
  }
  }
 

}
</style>
