<template>
    <ul class="list-body">
        <ListItem v-for="todo in todoList" :key="todo.id" :todo="todo" />
    </ul>
</template>

<script>
    // 引入组件
    import ListItem from './ListItem.vue'

    export default {
        name: 'ListBody',
        components: {
            ListItem
        },
        data() {
            return {
                todoList: [
                    {id:'001',name:'打游戏',isFinish:false},
                    {id:'002',name:'敲代码',isFinish:true},
                    {id:'003',name:'看动漫',isFinish:false}
                ]
            }
        }
    }
</script>

<style scoped>
    .list-body {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    li:before {
        content: initial;
    }
    li:last-child {
        border-bottom: none;
    }
</style>