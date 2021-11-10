import Vue from 'vue'
import App from './App.vue'

// 全局引入混入文件 mixin.js
import {mixin2} from './mixin'

// 关闭vue生产提示
Vue.config.productionTip=false

// 全局使用混入文件
Vue.mixin(mixin2)

new Vue({
    el: '#app',
    render: h => h(App)
})