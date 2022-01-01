<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{ count }}</strong></span>
    <ul class="filters" @click="fn">
      <li>
        <a :class="{selected:isSel=== 'all'}" href="javascript:;" @click="isSel='all'" >全部</a>
      </li>
      <li>
        <a :class="{selected:isSel=== 'no'}"   @click="isSel='no'">未完成</a>
      </li>
      <li>
        <a :class="{selected:isSel=== 'yes'}"  @click="isSel='yes'">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clearFn">清除已完成</button>
  </footer>
</template>

<script>
export default {
  props:["farr"],
  computed:{
    count(){
      return this.farr.length;
    }
  },
  data(){
    return {
      isSel:"all"  // all为全部   no为未完成  yes已完成
    }
  },
  methods:{
    //切换筛选条件
    fn(){
      this.$emit("changType", this.isSel)
    },
    clearFn(){
      this.$emit("clear")
    }
  }
}
</script>