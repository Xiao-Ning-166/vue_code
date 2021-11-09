<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="show">点我提示学校名称</button>
    </div>
</template>

<script>
    // 组件交互相关的代码(数据、方法)
    /* 
        暴露组件的方式
        1、export default 组件名（最常用）
        2、export {组件名}
    */
    export default {
        // 指定组件名，通常和文件名一致
        name: 'School',
        data() {
            return {
                name: '湖北第二师范学院',
                address: '湖口'
            }
        },
        methods: {
            show() {
                alert(this.name)
            }
        }
    }
</script>

<style>
    /* 组件的样式 */
    .demo {
        width: 100px;
        height: 100px;
        background-color: aqua;
    }
</style>
