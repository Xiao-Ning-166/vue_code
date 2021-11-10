/**
 * main.js文件是整个项目的入口文件
 */
// 引入的精简版Vue，没有模板解析器
import Vue from 'vue'
// 引入完整版Vue
// import Vue from 'vue/dist/vue'

// 引入App组件，是所有组件的父组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

/**
 * 关于不同版本的Vue：
 *    1、vue.js 和 vue.runtime.xxx.js的区别：
 *        (1) vue.js是完整版的vue。包含核心功能+模板解析器
 *        (2) vue.runtime.xxx.js是运行版的vue，只包含：核心功能，没有模板解析器
 * 
 *    2、因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，
 *       需要使用render()函数接收到createElement()函数去指定具体内容
 */

// 创建Vue实例对象 vm
new Vue({
  el: '#app',
  /*
  // template需要完整版本Vue
  template: `
    <h1>你好啊</h1>
  `,
  // 完成功能：将App组件放入容器中
  render(createElement) {
   return createElement('h1','你好啊')
  }
  // 等价于
  render: createElement => createElement('h1','你好啊')
  */
  render: h => h(App),
})//.$mount('#app') // 指定Vue所服务的容器，相当于 el:'#app'

