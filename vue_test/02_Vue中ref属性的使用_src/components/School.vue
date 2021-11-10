<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
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
    
<style>
    .school{
        width: 100%;
        height: 100px;
        background-color: skyblue;
    }
</style>