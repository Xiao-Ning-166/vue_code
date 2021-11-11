<template>
    <div class="list-footer">
        <label>
            <input type="checkbox"/>
        </label>
        <span>
            <span>已完成{{finishedTotal}}</span> / 全部{{todoList.length}}
        </span>
        <button class="btn btn-danger">清除已完成任务</button>
    </div>
    
</template>

<script>

    export default {
        name: 'ListFooter',
        props: ['todoList'],
        computed: {
            finishedTotal() {
                var count = 0
                this.todoList.forEach((todo) => {
                    if(todo.isFinish) {
                        count++;
                    }
                })
                return count
            }
        }
    }
</script>

<style scoped>
.list-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.list-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.list-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.list-footer button {
    float: right;
    margin-top: 5px;
}

</style>