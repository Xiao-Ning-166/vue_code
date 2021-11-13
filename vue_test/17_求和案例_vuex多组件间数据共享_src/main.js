import Vue from 'vue'
import App from './App.vue'


// 引入store
import store from './store/index'

Vue.config.productionTip=false


new Vue({
    el: '#app',
    store: store,
    render: h => h(App),
})