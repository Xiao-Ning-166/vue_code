<template>
    <div class="student">
        <h3>学生姓名：{{name}}</h3>
        <h3>学生年龄：{{age}}</h3>
        <button @click="sendStudentName">把学生姓名传递给App组件</button> <br><br>
        <button @click="sendStudentAge">把学生年龄传递给App组件</button> <br><br>

        <button @click="unbind">解绑getName事件</button>
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
            sendStudentName() {
                // 触发getName事件
                this.$emit('getName',this.name)
            },
            sendStudentAge() {
                // 触发getAge事件
                this.$emit('getAge',this.age)
            },
            // 解绑自定义事件
            unbind() {
                // 解绑一个自定义事件
                this.$off('getName')

                // 解绑多个事件
                this.$off(['getName','getAge'])

                // 解绑全部自定义事件
                this.$off()
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
