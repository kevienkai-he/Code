<template>
  <div>
<!--    v-show隐藏：采用display:none-->
    <h1 v-show="isShow">v-show显示/隐藏盒子</h1>
<!--    v-if隐藏：从DOM树中直接移除-->
    <h2 v-if="isOk">v-if显示/隐藏盒子</h2>
    <p v-if="age >= 18">成年了</p>
    <p v-else>未成年</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isShow:true,
      isOk:false,
      age:18
    }
  }
}
</script>

<style>

</style>