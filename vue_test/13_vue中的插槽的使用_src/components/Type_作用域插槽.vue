<template>
    <div class="food">
        <h3>{{type}}分类</h3>
        <!-- 定义一个插槽 -->
        <slot :users="users" msg="hello">作用域插槽</slot>
    </div>
</template>

<script>
    export default {
        name: 'Tyep_不使用插槽',
        props: ['type'],
        data() {
            return {
                users: ['小红','小明','李华']
            }
        },

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