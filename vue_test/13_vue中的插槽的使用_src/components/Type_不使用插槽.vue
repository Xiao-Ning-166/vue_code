<template>
    <div class="food">
        <h3>{{type}}分类</h3>
        <ul>
            <li v-for="(data,index) in listData" :key="index">{{data}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Tyep_不使用插槽',
        props: ['type','listData']

    }
</script>

<style scoped>
    .food {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3 {
        text-align: center;
        background-color: orange;
    }
</style>