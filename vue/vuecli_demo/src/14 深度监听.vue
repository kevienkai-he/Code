<template>
  <div>
    <input type="text" v-model="user.name">
    <input type="text" v-model="user.age">
  </div>
</template>

<script>
export default {
  data(){
    return {
      user:{
        name:"kevienkai",
        age:18
      }
    }
  },
  watch:{
    user:{
      handler(newVal, oldval){
        console.log(newVal, oldval);
      },
      deep:true,
      immediate:true
    }
  }
}
</script>

<style>

</style>