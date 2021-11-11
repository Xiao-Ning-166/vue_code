<template>
    <div class="app">
        <h1 v-text="title"></h1>

        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>

        <!-- 通过父组件给子组件绑定自定义事件实现：子给父传递数据。（第一种方法，使用@或者v-on） -->
        <!-- <Student v-on:getName="getStudentName"/> -->

        <!-- 通过父组件给子组件绑定自定义事件实现：子给父传递数据。（第二种方法，使用ref） -->
        <Student ref="student" @click.native="show"/>
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
                title: '组件自定义事件的使用'       
            }
        },
        methods: {
            getSchoolName(name) {
                alert(name)
            },
            getStudentName(name) {
                console.log('学生姓名：',name)
            },
            getStudentAge(age) {
                console.log('学生年龄：',age)
            },
            show() {
                alert('原生的事件')
            }
        },
        mounted() {
            // 绑定事件
            this.$refs.student.$on('getName',this.getStudentName)
            this.$refs.student.$on('getAge',this.getStudentAge)

            // 绑定自定义事件（只触发一次）
            // this.$refs.student.$once('getName',this.getStudentName)   
        }
    }
</script>

<style>
    .app {
        background-color: gray;
        padding: 5px;
    }
</style>
