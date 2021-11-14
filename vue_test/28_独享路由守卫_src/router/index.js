import VueRouter from "vue-router";
import About from "../pages/About.vue"
import Home from "../pages/Home.vue"
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {title:'关于'}
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {title:'主页'},
            // 配置嵌套路由
            children: [
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {isAuth:true,title:'消息'},
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: {isAuth:true,title:'详情'},

                            // porps的第三种写法，props值为函数，接收到$route。会将返回的对象的key-value以props传给Detail组件
                            props($route) {
                                return {
                                    id: $route.params.id,
                                    title: $route.params.title
                                }
                            }
                        }
                    ],
                    // 独享路由守卫
                    beforeEnter(to,form,next) {
                        console.log('独享路由守卫', form)
                        if(to.meta.isAuth) {
                            if(to.meta.title === '新闻') {
                                // 放行
                                next()
                            } else {
                                alert('你的权限不够')
                            }
                        } else {
                            // 放行
                            next()
                        }

                    }
                },
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {isAuth:true,title:'新闻'}
                }
            ]
        }
    ]
})

// 全局前置路由守卫 —— 初始化时调用、每次切换路由之前调用
// router.beforeEach((to,from,next)=>{
//     console.log('前置守卫',to,from)
//     if(to.meta.isAuth) {
//         console.log('判断是否拥有权限')
//         // 放行
//         next()
//     } else {
//         // 放行
//         next()
//     }
// })

// 全局后置路由守卫 —— 初始化时调用、每次切换路由之后调用
router.afterEach((to,from)=>{
    console.log('后置守卫',to,from)
    document.title = to.meta.title || '独享路由守卫'
})

export default router