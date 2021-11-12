<template>
    <div class="school">
        <h3>学校名称：{{name}}</h3>
        <h3>学校地址：{{address}}</h3>
    </div>
</template>

<script>
    // 引入 pubsub-js
    import pubsub from 'pubsub-js'
    export default {
        name: 'School',
        data() {
            return {
                name: '湖北第二师范学院',
                address: '湖口'
            }
        },
        methods: {
            hello(msgName,data) {
                console.log('有人发布了消息',msgName,data)
            }
        },
        mounted() {
            // 订阅消息
            this.pubId = pubsub.subscribe('hello',this.hello)
        },
        beforeDestroy() {
            // 取消订阅消息
            pubsub.unsubscribe(this.pubId)
        },
    }
</script>

<style>
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>
