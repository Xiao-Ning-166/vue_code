import VueRouter from "vue-router";
import About from "../pages/About.vue"
import Home from "../pages/Home.vue"
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'

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
                    component: Message
                },
                {
                    path: 'news',
                    component: News
                }
            ]
        }
    ]
})