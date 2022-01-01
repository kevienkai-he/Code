<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ obj.name }}</h2>
    <h3>{{ obj.age >=18 ? "成年了":"未成年"}}</h3>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg:"hello vue!",
      obj:{
        name:"hekaiquan",
        age:30
      }
    }
  }

}
</script>

<style>

</style>