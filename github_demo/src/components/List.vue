<template>
    <div class="row">
        <Item 
            v-for="user in userList" :key="user.id" 
            :user="user"
        />
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
                userList: []
            }
        },
        methods: {
            getUserList(items) {
                this.userList = items
                console.log('List组件',items)
            }
        },
        mounted() {
            // 给全局事件总线绑定getUserList事件
            this.$bus.$on('getUserList',this.getUserList)
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