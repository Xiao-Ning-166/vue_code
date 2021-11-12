<template>
    <div class="app">
        <h1 v-text="title"></h1>
        
        <button @click="getStudentMsg">获取学生信息</button>
    </div>
</template>

<script>
    // 引入axios
    import axios from 'axios'
    export default {
        name: 'App',
        components: {

        },
        data() {
            return {
                title: 'Vue中axios的使用'
            }
        },
        methods: {
            getStudentMsg() {
                /*
                // 方式一
                axios.get('http://localhost:8080/students').then(
                    reponse => {
                        console.log('请求成功了',reponse.data)
                    },
                    error => {
                        console.log('请求失败了',error.message)
                    }
                )
                */
               // 方式二
               axios.get('http://localhost:8080/atguigu/students').then(
                   reponse => {
                        console.log('请求成功了',reponse.data)
                    },
                    error => {
                        console.log('请求失败了',error.message)
                    }
               )
            }
        },
    }
</script>

<style>

</style>
