/**
 * main.js文件是整个项目的入口文件
 */
// 引入Vue
import Vue from 'vue'
// 引入App组件，是所有组件的父组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象 vm
new Vue({
  // 完成功能：将App组件放入容器中
  render: h => h(App),
}).$mount('#app') // 指定Vue所服务的容器，相当于 el:'#app'

