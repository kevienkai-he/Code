<style type="text/css">
.completed {
}
</style>
<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名  绑定completed样式根据isDone的值去判断是否显示-->
    <li :class="{ completed:obj.isDone }"  v-for="obj in arr" :key="obj.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="obj.isDone"/>
        <label>{{ obj.name }}</label>
        <button class="destroy" @click="btn(obj.id)"></button>
      </div>
    </li>
  </ul>

</template>

<script>
export default {
  props:["arr"],
  methods:{
    btn(id){
      this.$emit("del", id);
    }
  }
}
</script>