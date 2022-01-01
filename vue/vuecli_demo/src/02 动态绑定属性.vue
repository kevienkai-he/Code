<template>
  <div>
    <a :href="url">百度</a>
    <img v-bind:src="imgUrl" alt="">
  </div>
</template>

<script>
export default {
  data(){
    return {
      url:"http://www.baidu.com",
      imgUrl:"https://statics.kongzhong.com/gw2/2021/10/202110201058095461.jpg",
    }
  },

}
</script>

<style>

</style>