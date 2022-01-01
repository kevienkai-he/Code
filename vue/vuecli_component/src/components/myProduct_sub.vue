<template>
  <div>
    <div class="my-product">
      <h3>{{ title }}</h3>
      <p>{{ price }}</p>
      <p>{{ intro }}</p>
      <button @click="btn">砍一砍</button>
    </div>
  </div>
</template>

<script>
import eventBus from "../EventBus"
export default {
  props:["index", "title", "price", "intro"],
  methods:{
    btn(){
      // this.$emit规定了 -主动触发事件
      this.$emit("subPrice", this.index, 1);
      //eventBus.$emit触发事件
      eventBus.$emit("send", this.index, 1)
    }
  }

}
</script>

<style>

</style>