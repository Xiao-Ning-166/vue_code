import VueRouter from "vue-router";
import About from "../pages/About.vue"
import Home from "../pages/Home.vue"
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            // 配置嵌套路由
            children: [
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,

                            // props的第一种写法，props值为对象，该对象中的所有key-value的组合最终都会通过props传给Detail组件
                            // props: {id:'666',title:'hello'}

                            // props的第二种写法，props值为布尔值。true：把路由收到的所有params参数通过props传给Detail组件
                            // props: true

                            // porps的第三种写法，props值为函数，接收到$route。会将返回的对象的key-value以props传给Detail组件
                            props($route) {
                                return {
                                    id: $route.params.id,
                                    title: $route.params.title
                                }
                            }
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News
                }
            ]
        }
    ]
})