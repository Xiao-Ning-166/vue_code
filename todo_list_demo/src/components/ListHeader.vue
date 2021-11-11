<template>
    <div class="list-header">
        <input type="text" @keyup.enter="add" v-model="name" placeholder="请输入你的任务名称，按回车键确认"/>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name: 'ListHeader',
        data() {
            return {
                name: '',
                todo: {}
            }
        },
        props: ['addTodo'],
        methods: {
            add() {
                if(!this.name.trim()) {
                    return
                }
                // 封装todo对象
                this.todo = {id:nanoid(),name:this.name,isFinish:false}
                // 将todo对象传给App组件
                this.addTodo(this.todo)
                // 重置输入框
                this.name = ''
            }
        }
    }
</script>

<style scoped>
    .list-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .list-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>