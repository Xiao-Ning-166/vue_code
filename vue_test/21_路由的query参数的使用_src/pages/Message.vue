<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">

                <!-- 字符串写法 -->
                <!--  
                <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>
                -->

                <!-- 对象写法 -->
                <router-link :to="{
                    path: '/home/message/detail',
                    query: {
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{m.title}}
                </router-link>
               
            </li>
        </ul>
        <hr>
        <!-- 路由组件展示位置 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Message',
        data() {
            return {
                messageList: [
                    {id:'001',title:'消息1'},
                    {id:'002',title:'消息2'},
                    {id:'003',title:'消息3'}
                ]
            }
        },
    }
</script>
