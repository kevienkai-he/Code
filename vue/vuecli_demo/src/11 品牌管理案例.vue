<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
        <tr>
          <th>编号</th>
          <th>资产名称</th>
          <th>价格</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="obj in list" :key="obj.id">
          <td>{{ obj.id }}</td>
          <td>{{ obj.name}}</td>

          <!-- 如果价格超过100，就有red这个类 -->
          <td :class="{ red:obj.price>100 }">{{ obj.price }}</td>
          <td>{{ obj.time }}</td>
          <!--绑定删除事件-->
          <td><a href="#" @click="delFn(obj.id)">删除</a></td>
        </tr>
        </tbody>
      <tfoot v-show="list.length === 0">
        <tr>
          <td colspan="5" style="text-align: center">暂无数据</td>
        </tr>
      </tfoot>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
                type="text"
                class="form-control"
                placeholder="资产名称"
                v-model="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
                type="text"
                class="form-control"
                placeholder="价格"
                v-model.number="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 绑定添加按钮事件-->
        <!--由于点击后会以表单的形式提交，所以需要阻止他的默认行为-->
        <button class="btn btn-primary" @click.prevent="addFn">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
/*
1、明确需求
2、标签+样式+默认数据
3、下载bootstrap,main.js引入boootstrap.css
4、吧list数组  ==  铺设表格
5、修改颜色的问题
* */
export default {
  data() {
    return {
      name: "", // 名称
      price: 0, // 价格
      list: [
        { id: 100, name: "外套", price: 199, time: new Date('2010-08-12')},
        { id: 101, name: "裤子", price: 34, time: new Date('2013-09-01') },
        { id: 102, name: "鞋", price: 25.4, time: new Date('2018-11-22') },
        { id: 103, name: "头发", price: 19900, time: new Date('2020-12-12') }
      ],
    };
  },
  methods:{
    addFn(){
      //增加添加判断，当资产名称和我们的价格为零时做提示
      if(this.name.trim().length === 0 || this.price === 0){
        alert("请填写响应的内容！")
        return
      }
      //当表格为空时我们重新定义一个id
      let newId = this.list.length > 0 ? this.list[this.list.length - 1].id + 1: 1
      /*添加事件：点击后插入一条数据*/
      this.list.push({
        //找到表格中的最后一个ID
        id:newId,
        name:this.name,
        price:this.price,
        time:new Date()
      })
    },
    //1、点击删除按钮删除对应的事件
    /*
    如何删除对应的事件？可以根据点击的id找到对应的数据
    * */
    delFn(id){
      //当findIndex()找到合适的条件之后返回的是索引值
      let index = this.list.findIndex( obj => obj.id === id)
      this.list.splice(index, 1)
    }
  }
}
</script>

<style>
  .red{
    color: red;
  }
</style>