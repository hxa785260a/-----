
/**
 *@desc    登录
 *@author  hx
 *@date    2021/04/08
 */
<template>
 <div>
   123213
 </div>
</template>

<script>
import { getLogin } from '@/api/login'
export default {
  name: 'login',
  data () {
    return {
}
  },
  
  computed: {
   
  },
  created () {
      getLogin().then(res=>{
    console.log(res)
})
  },
  watch: {

  }
}
</script>

<style lang='less' scoped>

</style>
