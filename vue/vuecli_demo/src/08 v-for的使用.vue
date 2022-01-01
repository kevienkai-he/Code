<template>
  <div>
    <div>
      <ul>
        <li v-for="(item,index) in arr" >{{ item }}----{{ index }}</li>
      </ul>
    </div>

    <div>
      <ul>
        <li v-for="item in stuArr">
          <span>{{ item.name }}</span>
          <span>{{ item.sex }}</span>
          <span>{{ item.hobby }}</span>
        </li>
      </ul>
    </div>

    <div>
      <p v-for="(value, key) in tObj">
        <span>{{ value }}</span>
        ===========
        <span>{{ key }}</span>
      </p>
    </div>
    <img :src="localImg" alt="">
  </div>

</template>

<script>
import imgObj from "./assets/1.png"    // 唯独js需要导入图片文件（css/标签里可以直接使用图片地址）
export default {
  data(){
    return {
      arr: ["小明", "小欢欢", "大黄"],
      stuArr: [
        {
          id: 1001,
          name: "孙悟空",
          sex: "男",
          hobby: "吃桃子",
        },
        {
          id: 1002,
          name: "猪八戒",
          sex: "男",
          hobby: "背媳妇",
        },
      ],
      tObj: {
        name: "小黑",
        age: 18,
        class: "1期",
      },
      count: 10,
      localImg:imgObj
    }
  }
}
</script>

<style>

</style>