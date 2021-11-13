<template>
    <div>
        <h2>当前和是：{{sum}}</h2>
        <h2>当前和放大10倍后是：{{bigSum}}</h2>
        <h2>我在{{school}}，学习{{subject}}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">+</button>
        <button @click="sub">-</button>
        <button @click="addOdd">当前和为奇数时再加</button>
        <button @click="addWait">等500ms再加</button>
    </div>
</template>

<script>
    // 引入mapState
    import {mapGetters, mapState} from 'vuex'
    export default {
        name: 'Count',
        data() {
            return {
                n: 1,
            }
        },
        methods: {
            add() {
                // this.$store.dispatch('add',this.n)
                this.$store.commit('ADD',this.n)
            },
            sub() {
                // this.$store.dispatch('sub',this.n)
                this.$store.commit('SUB',this.n)
            },
            addOdd() {
                this.$store.dispatch('addOdd',this.n)
            },
            addWait() {
                this.$store.dispatch('addWait',this.n)
            }
        },
        computed: {
            // 借助 mapState 生成计算属性，从 State 中读取数据（对象写法）
                // ...：将对象中的 键值对 展开
            // ...mapState({sum:'sum',school:'school',subject:'subject'}),

            // 借助 mapState 生成计算属性，从 State 中读取数据（数组写法）
            ...mapState(['sum','school','subject']),

            // 借助 mapGetters 生成计算属性，从 getters 中读取数据（对象写法）
            // ...mapGetters({bigSum:'bigSum'}),

            // 借助 mapGetters 生成计算属性，从 getters 中读取数据（数组写法）
            ...mapGetters(['bigSum']),


        }
    }
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>