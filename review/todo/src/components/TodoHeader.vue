<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll">
    <label for="toggle-all"></label>
    <input
        class="new-todo"
        placeholder="输入任务名称-回车确认"
        autofocus
        @keydown.enter="downFn"
        v-model="task"
    />
  </header>
</template>

<script>
export default {
  data(){
    return {
      task:""
    }
  },
  methods:{
    downFn(){
      if(this.task === ""){
        alert("任务不能为空")
        return 
      }
      this.$emit("create", this.task)
      this.task = ""
    }
  },
  computed:{
    isAll:{
      set(checked){  //
        this.harr.forEach(obj => obj.isDone = checked)
      },
      get(){
        return  this.list.length !== 0 && this.harr.every( obj => obj.isDone === true);
      }
    }
  },
  props:["harr"]
}
</script>