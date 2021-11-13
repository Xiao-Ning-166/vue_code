<template>
    <div>
        <h2>当前和是：{{$store.state.sum}}</h2>
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
    }
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>