import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false

// 方法1：定义全局过滤器
//可以在任意的vue文件中直接使用
// Vue.filter("reverse", val => val.split("").reverse().join(""))

//过滤器接受参数

Vue.filter("reverse",(val, set) => val.split("").reverse().join(set))
//
import Pannel from "@/components/Pannel";
//
Vue.component("Pannel", Pannel);

new Vue({
  render: h => h(App),
}).$mount('#app')
