<template>
    <div class="student">
        <h3>学生姓名：{{name}}</h3>
        <h3>学生年龄：{{age}}</h3>
        <button @click="sendName">把学生姓名发送给School组件</button>
    </div>
</template>

<script>

    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                age: 35
            }
        },
        methods: {
            sendName() {
                this.$bus.$emit('hello', this.name)
            }
        }
    }
</script>

<style>
    .student {
        background-color: orange;
        padding: 5px;
        margin-top: 20px;
    }
</style>
