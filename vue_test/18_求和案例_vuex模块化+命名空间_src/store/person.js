/**
 * person相关的配置
 */
export default {
    // 开启命名空间
    namespaced: true,
    actions: {
        addPersonWang(context,person) {
            if(person.name.indexOf('王') == 0) {
                context.commit('ADD_PERSON',person)
            } else {
                alert("添加的人必须姓王！！！")
            }
        }
    },
    mutations: {
        ADD_PERSON(state,person) {
            state.personList.unshift(person)
        }
    },
    state: {
        personList: [
            {id:'001',name:'张三'}
        ]
    },
    getters: {
        firstName(state) {
            return state.personList[0].name
        }
    }
}