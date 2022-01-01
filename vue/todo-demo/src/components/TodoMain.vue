<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{completed:obj.isDone}" v-for="obj in arr" :key="obj.id">
      <div class="view">
        <input class="toggle" type="checkbox"  v-model="obj.isDone"/>
        <label>{{ obj.name }}</label>
        <!--注册点击事件-->
        <button class="destroy" @click="delFn(obj.id)"></button>
      </div>
    </li>
  </ul>

</template>

<script>
export default {
  props:["arr"],
  methods:{
    delFn(id){
      //  4.1子传父
      /*传入形参*/
      this.$emit("del", id);
    }
  }
}
</script>