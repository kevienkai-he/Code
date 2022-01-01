<template>
  <div>
    <div>
      <div class="title">
        <h4>芙蓉楼送辛渐</h4>
        <!-- 1.绑定点击事件 -->
        <span class="btn" @click="btnClick" >
          <!-- 4. 根据isShow的值显示不同文字 -->
          {{isShow ? "收起":"展开"}}
        </span>
      </div>
      <!-- 2. v-show配合变量来控制标签隐藏出现 -->
      <div class="container" v-show="isShow">
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isShow:true
    }
  },
  methods: {
    btnClick(){
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0 1em;
}
.title h4 {
  line-height: 2;
  margin: 0;
}
.container {
  border: 1px solid #ccc;
  padding: 0 1em;
}
.btn {
  /* 鼠标改成手的形状 */
  cursor: pointer;
}
</style>