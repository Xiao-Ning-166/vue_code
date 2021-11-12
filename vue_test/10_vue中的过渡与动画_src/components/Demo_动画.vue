<template>
    <div>
        <button @click="show">显示/隐藏</button>
        <!-- <h1 v-show="isShow" class="come">Hello World！</h1> -->
        <transition name="hello" appear>
            <h3 v-show="isShow" >Hello World！</h3>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'Demo_动画',
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
    }
    /* 来的动画 */
    .hello-enter-active {
        animation: action 1s linear;
    }
    /* 离开的动画 */
    .hello-leave-active {
        animation: action 1s linear reverse;
    }
    /* 动画 */
    @keyframes action {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>