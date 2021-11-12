<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">查找 Github 用户</h3>
        <div>
            <input type="text" placeholder="输入你要查找的用户" v-model="queryString"/>&nbsp;
            <button  @click="searchUserList">查找</button>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Search',
        data() {
            return {
                queryString: '',
            }
        },
        methods: {
            searchUserList() {
                // 请求之前更新列表数据
                this.$bus.$emit('updateListInfo',{isBegin:false,isLoading:true,errorMsg:'',userList:[]})
                axios.get(`https://api.github.com/search/users?q=${this.queryString}`).then(
                    // 成功的回调函数
                    response => {
                        console.log(response.data.items)
                        // 请求成功后更新列表数据
                        this.$bus.$emit('updateListInfo',{isBegin:false,isLoading:false,errorMsg:'',userList:response.data.items})
                    },
                    // 失败的回调函数
                    error => {
                        // 请求失败后更新列表数据
                        this.$bus.$emit('updateListInfo',{isBegin:false,isLoading:false,errorMsg:error.message,userList:[]})
                    }
                )
            }
        },
    }
</script>

<style>

</style>