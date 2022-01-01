<template>
  <div>
    <div @click="fatherFn">
      <p @click.stop="sonFn">阻止事件冒泡</p>
      <a href="http://www.baidu.com" @click.prevent="oneFn">百度</a>
      <p  @click.once="twoFn">函数只执行一次</p>
    </div>

  </div>
</template>

<script>
export default {
  methods:{
    fatherFn(){
      console.log("父亲被点击了")
    },
    sonFn(){
      console.log("儿子被点击了")
    },
    oneFn(){

    },
    twoFn(){
      console.log("函数只执行一次")
    }
  }

}
</script>

<style>

</style>