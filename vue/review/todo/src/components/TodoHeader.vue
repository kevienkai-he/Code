<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" >
    <label for="toggle-all"></label>
    <input
        class="new-todo"
        placeholder="输入任务名称-回车确认"
        autofocus
        @keydown.enter="keyDown"
        v-model="task"
    />
  </header>
</template>

<script>
export default {
  /*添加任务， 子传父*/
  data(){
    return {
      task:""
    }
  },
  methods:{
    keyDown(){
      if(this.task.trim().length === 0){
        alert("请输入任务！");
      }
      this.$emit("addFn", this.task);
      this.task = ""
    }
  }

}
</script>