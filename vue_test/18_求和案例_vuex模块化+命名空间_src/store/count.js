/**
 * 求和相关的配置
 */
export default {
    // 开启命名空间
    namespaced: true,
    // 准备actions —— 用于响应组件中的动作
    actions: {
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
    },
    mutations: {
        ADD(state,n) {
            state.sum += n
        },
        SUB(state,n) {
            state.sum -= n
        }
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: 'Vue',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}