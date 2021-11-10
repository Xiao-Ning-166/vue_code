<template>
    <div>
        <h1 v-text="title"></h1>
        <Student name="李四" sex="女" :age="24"></Student>
        <hr>

        <Student name="王老五" sex="女" :age="44"></Student>
        <hr>

        <Student name="赵四" :age="25"></Student>

    </div>
</template>

<script>
    // 引入Student组件
    import Student from './components/Student.vue'
    export default {
        name: 'App',
        components: {Student},
        data() {
            return {
                title: 'Vue中prop配置项的使用'       
            }
        }
    }
</script>
