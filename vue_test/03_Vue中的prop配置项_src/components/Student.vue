<template>
    <div class="student">
        <h2 v-text="msg"></h2>
        <h3>学生姓名：{{name}}</h3>
        <h3>学生年龄：{{age}}</h3>
        <h3>学生性别：{{myAge}}</h3>
        <button @click="updateAge">点我修改年龄</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                msg: '我是湖北第二师范学院的学生',
                myAge: this.age
            }
        },
        methods: {
            updateAge() {
                this.myAge = 100
            }
        },
        // 简单接收
        // props: ['name','sex','age']

        // 接收的同时对类型做限制
        // props: {
        //     name: String,
        //     age: Number,
        //     sex: String
        // }

        // 接收的同时对类型做限制+默认值的指定+必要性的限制
        props: {
            name: {
                // name的类型是String
                type: String,
                // name必须要传
                required: true
            },
            sex: {
                type: String,
                // 不传的默认值
                default: '男'
            },
            age: {
                type: Number,
                required: true
            }
        }
    }
</script>
