<template>
  <div>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg:"hekaiquan"
    } 
  },
  watch:{
    msg(newVal, oldVal){
      console.log(newVal, oldVal);
    }
  }
}
</script>

<style>

</style>