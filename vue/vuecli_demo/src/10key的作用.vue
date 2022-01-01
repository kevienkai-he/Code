<template>
  <div>
    <ul>
      <li v-for="obj in brr" :key="obj.id">
        <!--使用key则根据key去比较， 没有key则就地更新-->
        {{ obj.name }}
        <input type="text">
      </li>
    </ul>
    <button @click="btn">插入数据</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      arr:["老大", "老二", "老三"],
      brr:[
        {
          name:"老大",
          ud:50
        },
        {
          name: "老二",
          id:31
        },
        {
          name:"老三",
          id:10
        }
      ]
    }
  },
  methods:{
    btn(){
      this.brr.splice(1, 0, {
        id:19,
        name:"新来的"
      })
    }
  }
}
</script>

<style>

</style>