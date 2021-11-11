<template>
    <div class="app">
        <h1 v-text="title"></h1>

        <School />

        <Student />
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name: 'App',
        components: {
            Student,
            School
        },
        data() {
            return {
                title: '全局事件总线的使用'       
            }
        }
    }
</script>

<style>
    .app {
        background-color: gray;
        padding: 5px;
    }
</style>
