<template>
  <div>
    <ul>
      <li v-for="(value, index) in arr">{{ value }}</li>
    </ul>
    <button @click="revBtn">数组翻转</button>
    <button @click="sliceBtn">截取</button>
    <button @click="upDataBtn">更新</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      arr:[5,6,2,1,9]
    }
  },
  methods:{
    revBtn(){
      //数组翻转可以使得v-for 更新
      this.arr.reverse()
    },
    sliceBtn(){
      // 2.数组slice方法不会造成v-for更新
      //slice不会改变原始数组，返回的是一个新数组
      let re = this.arr.slice(0, 3)
      this.arr = re   //可以将新的数组赋给一个变量
      console.log(re)
    },
    upDataBtn(){
      // 3.更新某个值得时候，v-for是检测不到的
      this.arr[0] = 10

      // 解决-this.$set()
      //参数1：更新的目标结构
      //参数2： 更新的位置
      //参数3：更新的值
      this.$set(this.arr, 0, 10)
    }
  }
}
</script>

<style>

</style>