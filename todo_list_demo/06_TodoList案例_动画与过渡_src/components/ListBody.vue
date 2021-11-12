<template>
    <ul class="list-body">
        <transition-group name="todo" appear>
            <ListItem 
                v-for="todo in todoList" :key="todo.id" 
                :todo="todo" 
            />
        </transition-group>
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
    /* 动画 */
    /* 进入的起点、离开的终点 */
    .todo-enter,.todo-leave-to {
        transform: translateX(-100%);
    }
    .todo-enter-active,.todo-leave-active {
        transition: 1s linear;
    }
    /* 进入的终点、离开的起点 */
    .todo-enter-to,.todo-leave {
        transform: translateX(0);
    }
</style>