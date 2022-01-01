<template>
  <div>
    <Product title="苹果" price="50" intro="全场8折"></Product>
    <Product title="羽绒服" price="150" intro="买一送一"></Product>
    <Product itle="家用电器" price="150" :intro="str"></Product>
  </div>
</template>

<script>
/*引入组件*/
import Product from "./components/myProduct";
export default {
  components:{
    //注册组件
    //key 和 value同名可以简写
    Product
  },
  data(){
    return {
      str:"先到先得"
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