<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.isFinish" @change="changeFinish(todo.id)"/>
            <span>{{todo.name}}</span>
        </label>
        <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
    </li>
</template>

<script>
    export default {
        name: 'ListItem',
        props: ['todo'],
        methods: {
            // 改变完成状态
            changeFinish(id) {
                // 将todo的id传给App组件，通知它改变状态
                this.$bus.$emit('handleFinish',id)
            },
            // 删除一个todo对象
            deleteTodo(id) {
                if(confirm('确定要删除该待办事项吗？')) {
                    // 将todo的id传给App组件，完成删除
                    this.$bus.$emit('delTodo',id)
                }
            }
        },
    }
</script>

<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    li label {
        float: left;
        cursor: pointer;
    }
    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }
    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }
    li:before {
        content: initial;
    }
    li:last-child {
        border-bottom: none;
    }
    li:hover {
        background-color: #ddd;
    }
    li:hover button {
        display: block;
    }
</style>