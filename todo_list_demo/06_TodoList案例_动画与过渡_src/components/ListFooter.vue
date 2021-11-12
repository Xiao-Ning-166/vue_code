<template>
    <div class="list-footer" v-show="total > 0">
        <label>
            <!-- 方法一 -->
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->

            <!-- 方法二 -->
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>已完成{{finishedTotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
    
</template>

<script>

    export default {
        name: 'ListFooter',
        props: ['todoList'],
        computed: {
            // 已完成的数量
            finishedTotal() {
                var count = 0
                this.todoList.forEach((todo) => {
                    if(todo.isFinish) {
                        count++;
                    }
                })
                return count
            },
            // 全部的数量
            total() {
                return this.todoList.length
            },
            // 是否全部勾选
            isAll: {
                get() {
                    if (this.total <= 0) {
                        return false
                    }
                    return this.finishedTotal === this.total
                },
                set(newValue) {
                    this.$emit('handleCheckAll',newValue)
                    // this.handleCheckAll(newValue)
                }
            }
        },
        
        methods: {
            /*方法一
            // 全选 or 全不选
            checkAll(event) {
                this.handleCheckAll(event.target.checked)
            }
            */
           // 清空所有已完成
           clearAll() {
               this.$emit('handleClearAll')
               // this.handleClearAll()
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