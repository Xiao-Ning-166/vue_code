<template>
    <div class="app">
        <h1 v-text="title"></h1>
        
        <h2>动画</h2>
        <Demo_动画/>
        <hr>

        <h2>过渡</h2>
        <Demo_过渡/>
        <hr>

        <h2>多个元素过渡</h2>
        <Demo_多个元素过渡/>
        <hr>

        <h2>集成第三方动画库</h2>
        <Demo_集成第三方动画库/>
    </div>
</template>

<script>
    import Demo_动画 from './components/Demo_动画.vue'
    import Demo_过渡 from './components/Demo_过渡.vue'
    import Demo_多个元素过渡 from './components/Demo_多个元素过渡.vue'
    import Demo_集成第三方动画库 from './components/Demo_集成第三方动画库.vue'
    export default {
        name: 'App',
        components: {
            Demo_动画,
            Demo_过渡,
            Demo_多个元素过渡,
            Demo_集成第三方动画库
        },
        data() {
            return {
                title: 'Vue中过渡与动画的使用'
            }
        },
    }
</script>

<style>

</style>
