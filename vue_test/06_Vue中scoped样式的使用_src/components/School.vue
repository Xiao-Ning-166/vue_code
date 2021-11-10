<template>
    <div class="demo">
        <h3>学校姓名：{{name}}</h3>
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
        }
    }
</script>

<style scoped>
    .demo {
        background-color: skyblue;
    }
</style>
