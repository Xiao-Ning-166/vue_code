<template>
    <div class="food">
        <h3>{{type}}分类</h3>
        <!-- 定义一个插槽 -->
        <slot>默认值，使用者没有传递结构时出现</slot>
    </div>
</template>

<script>
    export default {
        name: 'Tyep_不使用插槽',
        props: ['type']

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
    video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>