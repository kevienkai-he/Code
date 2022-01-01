<template>
  <section class="todoapp">
    <!--使用组件-->
    <TodoHeader @create="createFn" :harr="this.list"></TodoHeader>
    <!--通过自定义事件实现子传父的效果-->
    <TodoMain :arr="showArr" @del="delFn"></TodoMain>
    <TodoFooter :farr="showArr" @changType="typeFn" @clear="clFn"></TodoFooter>
  </section>
</template>

<script>
/*引入样式*/
import "./styles/index.css";
import "./styles/base.css"
/*引入组件*/
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";
export default {
  components:{
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  //1、铺设数据  将app.vue中的数据传入到TodoMain中
  //父传子的技术
  data(){
    return {
      list: JSON.parse(localStorage.getItem('todoList')) || [],
      /*中转接受类型字符串*/
      getSel:"all"   // 默认显示全部
    }
  },
  methods:{
    createFn(taskName){
      let id = this.list.length === 0 ? 1 : this.list[this.list.length - 1].id +1;
      this.list.push({
        id:id,
        name:taskName,
        isDone: false
      })
    },
    delFn(theId){
      /*根据id的值查找数组中的下标值*/
      let index = this.list.findIndex(obj => obj.id === theId)
      this.list.splice(index, 1)
    },
    //
    typeFn(str){
      this.getSel = str;
    },
    clFn(){
      this.list = this.list.filter(obj=>obj.isDone === false)
    }
  },
  computed:{
    showArr(){
      if(this.getSel === "yes"){
        return  this.list.filter(obj => obj.isDone === true)
      }else if (this.getSel === "no"){
        return  this.list.filter(obj => obj.isDone === false)
      }else {
        return this.list
      }
    }
  },
  /*数据缓存*/
  watch:{
    list:{
      //开启深度监听
      deep:true,
      handler(){
      //  只要list变化 - 覆盖式保存到localStorage里
        localStorage.setItem('todoList', JSON.stringify(this.list))
      }
    }
  }
}
</script>

<style>

</style>