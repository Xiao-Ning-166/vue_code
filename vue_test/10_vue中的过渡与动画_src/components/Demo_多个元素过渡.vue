<template>
    <div>
        <button @click="show">显示/隐藏</button>
        <transition-group name="hello" appear>
            <h3 v-show="isShow" key='1'>Demo_多个元素过渡1</h3>
            <h3 v-show="isShow" key='2'>Demo_多个元素过渡2</h3>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: 'Demo_多个元素过渡',
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

    /* 进入的起点、离开的终点 */
    .hello-enter,.hello-leave-to {
        transform: translateX(-100%);
    }
    .hello-enter-active,.hello-leave-active {
        transition: 1s linear;
    }
    /* 进入的终点、离开的起点 */
    .hello-enter-to,.hello-leave {
        transform: translateX(0);
    }
    

</style>