<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名  -->
    <!-- 动态绑定类名 -->
    <li :class="{completed:item.isDone}" v-for="item in arr" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.isDone" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="remove"></button>
      </div>
    </li>
  </ul>

</template>

<script>

export default {
  //父传子  子设置props
  props:["arr"],
  methods:{
    remove(){
      this.$emit("delete", this.arr.id)
    }
  }
}
</script>