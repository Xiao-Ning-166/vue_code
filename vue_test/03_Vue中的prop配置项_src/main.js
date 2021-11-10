// 引入vue
import Vue from 'vue'
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip=false

// 创建Vue实例
new Vue({
    el: '#app',
    render: h => h(App)
})