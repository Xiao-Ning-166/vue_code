<template>
    <div class="school">
        <h3>学校名称：{{name}}</h3>
        <h3>学校地址：{{address}}</h3>
    </div>
</template>

<script>
    
    export default {
        name: 'School',
        data() {
            return {
                name: '湖北第二师范学院',
                address: '湖口'
            }
        },
        mounted() {
            // 在全局事件总线上绑定hello事件
            this.$bus.$on('hello',(data)=>{
                console.log('我是School组件，收到了数据：', data)
            })   
        },
        beforeDestroy() {
            // 关闭事件
            this.$bus.$off('hello')
        }
    }
</script>

<style>
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>
