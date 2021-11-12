<template>
    <div>
        <button @click="show">显示/隐藏</button>
        <transition name="hello" appear>
            <h3 v-show="isShow" >Hello World！</h3>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'Demo_过渡',
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