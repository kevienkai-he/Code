<template>
  <div style="overflow: hidden">
    <div style="float: left">
      <Product v-for="(item, ind) in list"   @subPrice = "fn"
               :title="item.proname" :price="item.proprice" :intro="item.info" :index="ind"></Product>
    </div>
    <div style="float: left">
      <List :arr="list"></List>
    </div>
  </div>
</template>

<script>
/*引入组件*/
import Product from "./components/myProduct_sub";
import List from"./components/list";
export default {
  components:{
    //注册组件
    //key 和 value同名可以简写
    Product,
    List
  },
  data(){
    return {
      list: [
        { id: 1, proname: "超级好吃的棒棒糖", proprice: 18.8, info: '开业大酬宾, 全场8折' },
        { id: 2, proname: "超级好吃的大鸡腿", proprice: 34.2, info: '好吃不腻, 快来买啊' },
        { id: 3, proname: "超级无敌的冰激凌", proprice: 14.2, info: '炎热的夏天, 来个冰激凌了' },
      ]
    }
  },
  methods:{
    fn(ind, price){
      this.list[ind].proprice > 1 && (this.list[ind].proprice=(this.list[ind].proprice-price).toFixed(2))
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