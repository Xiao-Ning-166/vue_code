<template>
    <div class="app">
        <h1 v-text="title"></h1>
        
        <Count />
    </div>
</template>

<script>
    import Count from './components/Count.vue'
    export default {
        name: 'App',
        components: {
            Count
        },
        data() {
            return {
                title: '求和案例 —— 纯vue版'
            }
        },
    }
</script>

<style>

</style>
