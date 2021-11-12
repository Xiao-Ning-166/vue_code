<template>
    <div>
        <button @click="show">显示/隐藏</button>
        <!-- animated官网：https://animate.style/ -->
        <transition-group 
            appear
            name="animate__animated animate__bounce" 
            enter-active-class="animate__rubberBand"
            leave-active-class="animate__rotateOutUpRight"
        >
            <h3 v-show="isShow" key='1'>Demo_多个元素过渡1</h3>
            <h3 v-show="isShow" key='2'>Demo_多个元素过渡2</h3>
        </transition-group>
    </div>
</template>

<script>
    // 引入第三方动画库
    import 'animate.css'
    export default {
        name: 'Demo_集成第三方动画库',
        data() {
            return {
                isShow: true
            }
        },
        methods: {
            show() {
                this.isShow = !this.isShow
            }
        },
    }
</script>

<style scoped>
    h3 {
        background-color: orange;
        /* transition: 1s linear; */
    }
</style>