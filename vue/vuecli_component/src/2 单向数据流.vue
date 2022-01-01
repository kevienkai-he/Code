<template>
  <div>
    <Product v-for="item in list" :key="item.id"
    :title="item.proname" :price="item.proprice" :intro="item.info"></Product>
  </div>
</template>

<script>
/*引入组件*/
import Product from "./components/myProduct_sub";
export default {
  components:{
    //注册组件
    //key 和 value同名可以简写
    Product
  },
  data(){
    return {
      list: [
        { id: 1, proname: "超级好吃的棒棒糖", proprice: 18.8, info: '开业大酬宾, 全场8折' },
        { id: 2, proname: "超级好吃的大鸡腿", proprice: 34.2, info: '好吃不腻, 快来买啊' },
        { id: 3, proname: "超级无敌的冰激凌", proprice: 14.2, info: '炎热的夏天, 来个冰激凌了' },
      ]
    }
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