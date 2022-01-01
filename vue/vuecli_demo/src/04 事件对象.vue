<template>
  <div>
    <a href="http://www.baidu.com" @click="one">百度</a>
    <hr>
    <a href="http://www.taobao.com" @click="two(5,$event)">淘宝</a>
  </div>
</template>

<script>
export default {
  methods:{
    one(e){
      e.preventDefault()
    },
    two(num,e){
      e.preventDefault()
      console.log(num)
    }
  }

}
</script>

<style>

</style>