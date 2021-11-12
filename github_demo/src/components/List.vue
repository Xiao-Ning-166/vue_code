<template>
    <div class="row">
        <!-- 展示用户列表 -->
        <Item 
            v-show="info.userList.length > 0"
            v-for="user in info.userList" :key="user.id" 
            :user="user"
        />
        <!-- 展示欢迎词 -->
        <h2 v-show="info.isBegin">Welcome！！！</h2>
        <!-- 展示加载中 -->
        <h2 v-show="info.isLoading">Lading！！！</h2>
        <!-- 展示错误信息 -->
        <div v-show="info.errorMsg !== ''">{{info.errorMsg}}</div>
    </div>
</template>

<script>
    import Item from './Item.vue'
    export default {
        name: 'List',
        components: {
            Item
        },
        data() {
            return {
                info: {
                    userList: [],
                    // 是否是初始状态
                    isBegin: true,
                    // 是否是加载中
                    isLoading: false,
                    // 错误信息
                    errorMsg: ''
                }
            }
        },
        methods: {
            updateListInfo(listInfo) {
                console.log(listInfo)
                this.info = listInfo
            }
        },
        mounted() {
            // 给全局事件总线绑定updateListInfo事件
            this.$bus.$on('updateListInfo',this.updateListInfo)
        },
        beforeDestroy() {
            // 销毁自定义事件
            this.$bus.$off('getUserList')
        },
    }
</script>

<style scoped>
    .album {
        min-height: 50rem; /* Can be removed; just added for demo purposes */
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }
</style>