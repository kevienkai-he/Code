<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @create="createFn"> </TodoHeader>
    <TodoMain :arr="showArr" @del="deleteFn"></TodoMain>
    <TodoFooter :farr="showArr" @changeType="typeFn"></TodoFooter>
  </section>
</template>

<script>
import "./styles/base.css";
import "./styles/index.css"
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
  data(){
    return {
      //准备数据
      list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 201, name: "睡觉", isDone: false },
        { id: 103, name: "打豆豆", isDone: true },
      ],
      gelSel:"all"
    }
  },
  methods:{
    createFn(taskName){//添加任务
    //  添加道数组中push
      let id = this.list.length === 0 ?
          1 : this.list[this.list.length-1].id + 1;
      this.list.push({
        id:id,
        name:taskName,
        isDone: false
      })
    },
    deleteFn(theId){
      let index = this.list.findIndex(obj => obj.id === theId);
      this.list.splice(index, 1);
    },
    typeFn(str){  //str的值可能是all、no、yes
      this.gelSel = str
    }
  },
  computed:{
    showArr(){
      if(this.gelSel === 'yes'){
        return this.list.filter(obj => obj.isDone === true)
      }else if(this.gelSel === 'no'){
        return this.list.filter(obj => obj.isDone === false)
      }else {
        return  this.list
      }
    }
  }
};
</script>