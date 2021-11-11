<template>
  <div id="app">
    <ListHeader @addTodo="addTodo" />
    <ListBody 
      :todoList="todoList" 
      :handleFinish="handleFinish"
      :delTodo="delTodo"
    />
    <ListFooter 
      :todoList="todoList" 
      @handleCheckAll="handleCheckAll"
      @handleClearAll="handleClearAll"
    />
  </div>
</template>

<script>
  // 引入组件
  import ListHeader from './components/ListHeader.vue'
  import ListBody from './components/ListBody.vue'
  import ListFooter from './components/ListFooter.vue'

  export default {
    name: 'App',
    components: {
      ListHeader,
      ListBody,
      ListFooter
    },
    data() {
      return {
          todoList: []
      }
    },
    methods: {
      // 接收从 Header组件中传入的数据
      addTodo(todo) {
        // 将接收到的todo对象加入到todoList数组中
        this.todoList.unshift(todo)
      },
      // 勾选或者取消勾选
      handleFinish(id) {
        this.todoList.forEach((todo)=>{
          if(todo.id === id) {
            todo.isFinish = !todo.isFinish
          }
        })
      },
      // 删除一个Todo
      delTodo(id) {
        this.todoList = this.todoList.filter((todo)=>{
          return todo.id !== id
        })
      },
      // 全选 or 全不选
      handleCheckAll(checked) {
        this.todoList.forEach((todo)=>{
          todo.isFinish = checked
        })
      },
      // 清空已完成
      handleClearAll() {
        this.todoList = this.todoList.filter((todo) => {
          return !todo.isFinish
        })
      }
    },
    created() {
      var arr = JSON.parse(sessionStorage.getItem('todoList'))
      if(arr != null) {
        this.todoList = arr
      }
    },
    watch: {
      todoList: {
        deep: true,
        handler(newValue) {
          sessionStorage.setItem('todoList', JSON.stringify(newValue))
        }
      }
    }
  }

</script>

<style>
  #app {
    background-color: #fff;
    width: 600px;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }
</style>
