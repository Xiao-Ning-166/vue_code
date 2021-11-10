<template>
    <div class="student">
        <h3 @click="show">学校姓名：{{name}}</h3>
        <h3>学校地址：{{address}}</h3>
    </div>
</template>

<script>
    // 局部引入混合文件mixin.js
    import {mixin} from '../mixin'
    export default {
        name: 'Student',
        data() {
            return {
                name: '湖北第二师范学院',
                address: '湖口'
            }
        },
        mixins: [mixin]
    }
</script>
