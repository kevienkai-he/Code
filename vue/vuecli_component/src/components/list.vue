<template>
  <div>
    <ul class="my-product">
      <li v-for="(item, index) in arr" :key="index">
        <span>{{ item.proname }}</span>
        <span>{{ item.proprice }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
/*目标：跨组件传值*/
/*1.接收方-$on监听事件*/
import eventBus from "../EventBus"
export default {
  props: ['arr'],
  created() {
    //eventBus.$on 注册事件
    eventBus.$on("send", (index, price)=>{
      this.arr[index].proprice > 1 && (this.list[index].proprice=(this.list[index].proprice-price).toFixed(2))
    })
  }
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>