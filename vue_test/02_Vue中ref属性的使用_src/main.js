// 引入Vue
import Vue from 'vue'
// 引入 App 组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
})