<template>
    <div>
        <h2>人员列表</h2>
        <h3>Count组件当前和是：{{sum}}</h3>
        <h3>列表中第一个人的名字是：{{firstName}}</h3>
        <input type="text" placeholder="请输入人员姓名" v-model="name"> 
        <button @click="addPerson">添加</button>
        <button @click="addPersonWang">添加一个姓王的人</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    // import {mapState} from 'vuex'
    import {nanoid} from 'nanoid'
    export default {
        name: 'Person',
        data() {
            return {
                name: ''
            }
        },
        computed: {
            sum() {
                return this.$store.state.countAbout.sum
            },
            personList() {
                return this.$store.state.personAbout.personList
            },
            firstName() {
                return this.$store.getters['personAbout/firstName']
            }
        },
        methods: {
            addPerson() {
                const person = {id:nanoid(),name:this.name}
                this.$store.commit('personAbout/ADD_PERSON',person)
                this.name = ''
            },
            addPersonWang() {
                const person = {id:nanoid(),name:this.name}
                this.$store.dispatch('personAbout/addPersonWang',person)
                this.name = ''
            }
        },
    }
</script>

<style>

</style>