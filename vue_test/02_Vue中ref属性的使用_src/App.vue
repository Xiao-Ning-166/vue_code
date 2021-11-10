<template>
    <div>
        <h1 v-text="title" ref="title2"></h1>
        <School/>
        <button @click="show">点我输出标题</button>
    </div>
</template>

<script>
    import School from './components/School.vue'

    export default {
        name: 'App',
        components: {
            School
        },
        data() {
            return {
                title: 'Vue中ref属性的使用'
            }
        },
        methods: {
            show() {
                console.log(this)
                // 获取到真实DOM元素
                console.log(this.$refs.title2)
            }
        }
        
    }
</script>
