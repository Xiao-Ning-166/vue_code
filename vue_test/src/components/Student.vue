<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                age: 20
            }
        }
    }
</script>

<style>
    .student {
        width: 50px;
        height: 50px;
        background-color: orange;
    }
</style>