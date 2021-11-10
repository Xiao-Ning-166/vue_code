<template>
    <div class="student">
        <h2 v-text="msg"></h2>
        <h3 @click="show">学生姓名：{{name}}</h3>
        <h3>学生年龄：{{age}}</h3>
    </div>
</template>

<script>
    // 局部引入混合文件mixin.js
    import {mixin} from '../mixin'
    export default {
        name: 'Student',
        data() {
            return {
                msg: '我是湖北第二师范学院的学生',
                name: '张三',
                age: 35
            }
        },
        mixins: [mixin]

    }
</script>
