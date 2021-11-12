<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.isFinish" v-show="!todo.isEdit" @change="changeFinish(todo.id)"/>
            <span v-show="!todo.isEdit">{{todo.name}}</span>
            <input 
                type="text" 
                :value="todo.name" 
                v-show="todo.isEdit" 
                @blur="handleEdit($event,todo)"
                ref="editInput"
            >
        </label>
        <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
        <button class="btn btn-edit" v-show="!todo.isEdit" @click="editTodo(todo)">编辑</button> 
    </li>
</template>

<script>
    import pubsub from 'pubsub-js'
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
                    // 全局事件总线方式
                    // this.$bus.$emit('delTodo',id)

                    // 发布消息
                    pubsub.publish('delTodo',id)
                }
            },
            // 打开编辑窗口
            editTodo(todo) {
                console.log(todo)
                todo.isEdit = true
                // if(todo.hasOwnProperty('isEdit')) {
                // } else {
                //     this.$set(todo,'isEdit',true)
                // }
                // 拿到输入框，让它获取焦点
                this.$nextTick(function(){
                    this.$refs.editInput.focus()
                })
            },
            // 完成编辑
            handleEdit(event,todo) {
                todo.isEdit = false
                if(!event.target.value.trim()) {
                    return alert('输入不能为空')
                }
                // 触发编辑的全局事件
                this.$bus.$emit('edit',todo.id,event.target.value)
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