/**
 * 该文件用于创建vuex中最为核心的store
 */
// 引入vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

// 引入count.js
import countAbout from './count'
// 引入person.js
import personAbout from './person'

// 使用Vuex插件
Vue.use(Vuex)


// 创建并暴露 store
export default new Vuex.Store({
    modules: {
        countAbout,
        personAbout
    }
})

