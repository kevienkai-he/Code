<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{ count }}</strong></span>
    <ul class="filters" @click="fn">
      <li>
        <a  href="javascript:;" :class="{selected: isSel === 'all'}" @click="isSel='all'">全部</a>
      </li>
      <li>
        <a href="javascript:;" :class="{selected: isSel === 'no'}" @click="isSel='no'">未完成</a>
      </li>
      <li>
        <a href="javascript:;" :class="{selected: isSel === 'yes'}" @click="isSel='yes'">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" >清除已完成</button>
  </footer>
</template>

<script>
export default {
  //数量的统计，父传子
  props:["farr"],
  computed:{
    count(){
      return this.farr.length
    }
  },
  data(){
    return {
      isSel:'no'  // 全部  all  未完成no   已完成yes
    }
  },
  methods:{
    fn(){
    //  子传父
      this.$emit("changeType", this.isSel)
    }
  }
}
</script>