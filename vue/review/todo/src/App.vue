<template>
  <section class="todoapp">
    <TodoHeader @addFn="createFn"></TodoHeader>
    <TodoMain :arr="showArr" @delete="delFn"></TodoMain>
    <TodoFooter :farr="showArr" @changeFn="typeFn"></TodoFooter>
  </section>
</template>

<script>
/*引入样式*/
import "./styles/base.css";
import "./styles/index.css"
/*导入组件*/
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter"
export default {
  data(){
    return {
      list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 201, name: "睡觉", isDone: false },
        { id: 103, name: "打豆豆", isDone: true },
      ],
    //  中转接收类型字符串
      getSel:"all"
    }
  },
  components:{
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  methods:{
    createFn(value){
      /*设置id*/
      let newId = this.list.length === 0 ? 1 : this.list[this.list.length - 1].id + 1
      this.list.push({
        id:newId,
        name:value,
        isDone: false
      })
    },
    delFn(theId){
      //根据ID值找到对应的索引
      let index = this.list.findIndex( obj => obj.id === theId )
      this.list.splice(index, 1);
    },
    typeFn(str){//  "all"  'yes'  'no'
       this.getSel = str;
    }
  },
  /*定义showArr 数组   */
  computed:{
    showArr(){
      if(this.getSel === "yes"){
        return this.list.filter(obj => obj.isDone === true)
      }else if(this.getSel === "no"){
        return this.list.filter(obj => obj.isDone === false)
      }else {
        return this.list;
      }
    }
  }
}
</script>

<style>

</style>