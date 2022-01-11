<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{ count }}</strong></span>
    <ul class="filters" @click="Fn">
      <li>
        <a :class="{selected:this.getSel === 'all'}" href="javascript:;"  @click="isSel='all'">全部</a>
      </li>
      <li>
        <a :class="{selected:this.getSel === 'no'}" href="javascript:;" @click="isSel='no'">未完成</a>
      </li>
      <li>
        <a :class="{selected:this.getSel === 'yes'}" href="javascript:;" @click="isSel='yes'">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" >清除已完成</button>
  </footer>
</template>

<script>
export default {
  data(){
    return {
      //getSel 可以是all ,no , yes
      isSel:"yes"
    }
  },
  props:["farr"],
  computed:{
    count(){
      return this.farr.length;
    }
  },
  methods:{
    Fn(){
      this.$emit("changeFn", this.isSel);
    }
  }
}
</script>