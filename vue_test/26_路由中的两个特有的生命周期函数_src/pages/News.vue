<template>

    <ul>
        <p :style="{opacity: tmd}">欢迎学习Vue</p>
        <li>
            news001 <input type="text">
        </li> 
        <li>
            news002 <input type="text">
        </li> 
        <li>
            news003 <input type="text">
        </li> 
    </ul>
</template>

<script>
    export default {
        name: 'News',
        data() {
            return {
                // 透明度
                tmd: 1
            }
        },
        // 当前组件被激活时触发
        activated() {
            console.log('News组件被激活了')
            this.timer = setInterval(()=>{
                this.tmd -= 0.1
                if(this.tmd <= 0) {
                    this.tmd = 1
                }
            },100)
        },
        // 当前组件失活时触发
        deactivated() {
            console.log('News组件失活了')
            clearInterval(this.timer)
        }
    }
</script>

<style>

</style>