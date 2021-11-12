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
                title: '消息订阅与发布 —— pubsub-js的使用'       
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
