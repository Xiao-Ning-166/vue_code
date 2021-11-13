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
    /*
    add: function(context,n) {
        context.commit('ADD', n)
    },
    sub(context,n) {
        context.commit('SUB', n)
    },
    */
    addOdd(context,n) {
        if(context.state.sum % 2) {
            context.commit('ADD', n)
        }
    },
    addWait(context,n) {
        setTimeout(()=>{
            context.commit('ADD',n)
        },500)
    }
}
// 准备mutations —— 用于操作数据
const mutations = {
    ADD(state,n) {
        state.sum += n
    },
    SUB(state,n) {
        state.sum -= n
    }
}
// 准备state —— 用于准备存储数据
const state = {
    sum: 0,
}
// 准备 getters —— 用于将state中的数据加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并暴露 store
export default new Vuex.Store({
    // actions: actions,
    // mutations: mutations,
    // state: state

    // 简写形式：当key名 = value名
    actions,
    mutations,
    state,
    getters
})

