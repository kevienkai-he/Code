<template>
  <div id="app">
    <p>原来的值：{{message}}</p>
    <!--可以给过滤器传参-->
    <p>使用过滤器后的值：{{message | reverse("-")}}</p>
    <p :title="message | toUp">鼠标长时间停留</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message:"hello world"
    }
  },
  /*方法2：定义局部过滤器*/
  filters:{
    toUp(val){
      return val.toUpperCase()
    }
  }

}
</script>

<style>

</style>