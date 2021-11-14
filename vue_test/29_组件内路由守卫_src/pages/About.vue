<template>
    <h2>我是About组件的内容</h2>
</template>

<script>
    export default {
        name: 'About',
        // 通过路由规则，进入组件时被调用
        beforeRouteEnter (to, from, next) {
            console.log('进入About组件',to,from)
            next()
        },
        // 通过路由规则，离开组件时被调用
        beforeRouteLeave (to, from, next) {
            console.log('离开About组件',to,from)
            next()
        }
    }
</script>
