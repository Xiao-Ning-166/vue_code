/**
 * main.js文件是整个项目的入口文件
 */
// 引入的精简版Vue，没有模板解析器
import Vue from 'vue'

// 引入App组件，是所有组件的父组件
// import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false


// 创建Vue实例对象 vm
new Vue({
  el: '#app',
  render: h => h('h1','你好啊'),
})//.$mount('#app') // 指定Vue所服务的容器，相当于 el:'#app'

