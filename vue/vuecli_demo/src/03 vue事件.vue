<template>
  <div>
    <p>你需要购买商品数量：{{count}}</p>
    <button v-on:click="btnClick">点击</button>
    <button @click="addFn(5)">增加</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count:0
    }
  },
  methods:{
    btnClick (){
      this.count++
    },
    addFn(num){
      this.count += this.count + num
    }
  }

}
</script>

<style>

</style>