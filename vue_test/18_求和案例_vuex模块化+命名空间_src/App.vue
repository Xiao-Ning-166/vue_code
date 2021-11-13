<template>
    <div class="app">
        <h1 v-text="title"></h1>
        
        <Count />
        <hr>
        <Person/>
    </div>
</template>

<script>
    import Count from './components/Count.vue'
    import Person from './components/Person.vue'
    export default {
        name: 'App',
        components: {
            Count,
            Person
        },
        data() {
            return {
                title: '求和案例 —— vuex模块化+命名空间'
            }
        },
    }
</script>

<style>

</style>
