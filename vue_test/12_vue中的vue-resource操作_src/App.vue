<template>
    <div class="app">
        <h1 v-text="title"></h1>
        
        <button @click="getUserMsg">获取github中test相关用户的信息</button>
    </div>
</template>

<script>
    
    export default {
        name: 'App',
        components: {

        },
        data() {
            return {
                title: 'Vue中vue-resource的使用'
            }
        },
        methods: {
            getUserMsg() {
               this.$http.get('https://api.github.com/search/users?q=test').then(
                   response => {
                       console.log(response.data.items)
                   },
                   error => {
                       console.log('请求失败',error.message)
                   }
               )
            }
        },
    }
</script>

<style>

</style>
