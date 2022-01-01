<template>
  <div>
    <p :class="{red_str:bool}">动态class</p>
    <!--如果是值则需要加上双引号，否则就申明变量-->
    <p :style="{backgroundColor:colorStr}">value的值</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      bool:false,
      colorStr:"pink"
    }
  }

}
</script>

<style scoped>
  .red_str {
    color: red;
  }
</style>