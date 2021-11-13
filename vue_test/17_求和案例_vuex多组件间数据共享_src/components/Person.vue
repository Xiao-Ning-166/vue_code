<template>
    <div>
        <h2>人员列表</h2>
        <input type="text" placeholder="请输入人员姓名" v-model="name"> 
        <button @click="addPerson">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
        <h3>Count组件当前和是：{{sum}}</h3>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {nanoid} from 'nanoid'
    export default {
        name: 'Person',
        data() {
            return {
                name: ''
            }
        },
        computed: {
            ...mapState({personList:'personList',sum:'sum'})
        },
        methods: {
            addPerson() {
                const person = {id:nanoid(),name:this.name}
                this.$store.commit('ADD_PERSON',person)
                this.name = ''
            }
        },
    }
</script>

<style>

</style>