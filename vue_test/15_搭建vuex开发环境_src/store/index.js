/**
 * 该文件用于创建vuex中最为核心的store
 */
// 引入vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

// 使用Vuex插件
Vue.use(Vuex)

// 准备actions —— 用于响应组件中的动作
const actions = {

}
// 准备mutations —— 用于操作数据
const mutations = {

}
// 准备state —— 用于准备存储数据
const state = {

}

// 创建并暴露 store
export default new Vuex.Store({
    // actions: actions,
    // mutations: mutations,
    // state: state

    // 简写形式：当key名 = value名
    actions,
    mutations,
    state
})

