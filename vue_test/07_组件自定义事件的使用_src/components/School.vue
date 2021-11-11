<template>
    <div class="school">
        <h3>学校名称：{{name}}</h3>
        <h3>学校地址：{{address}}</h3>
        <button @click="sendSchoolName">给父组件传递学校名称</button>
    </div>
</template>

<script>
    
    export default {
        name: 'School',
        props: ['getSchoolName'],
        data() {
            return {
                name: '湖北第二师范学院',
                address: '湖口'
            }
        },
        methods: {
            sendSchoolName() {
                this.getSchoolName(this.name)
            }
        }
    }
</script>

<style>
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>
