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
        props: ['todoList']
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