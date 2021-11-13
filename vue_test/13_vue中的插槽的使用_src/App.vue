<template>
    <div class="app">
        <h1 v-text="title"></h1>
        <div class="type1">
            <h2>不使用插槽</h2>
            <Type_不使用插槽 type="美食" :listData="foods"/>
            <Type_不使用插槽 type="游戏" :listData="games"/>
            <Type_不使用插槽 type="电影" :listData="films"/>
        </div>
        <hr>

        <div class="type1">
            <h2>默认插槽</h2>
            <Type_默认插槽 type="美食">
                <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
            </Type_默认插槽>
            <Type_默认插槽 type="游戏">
                <ul>
                    <li v-for="(data,index) in games" :key="index">{{data}}</li>
                </ul>
            </Type_默认插槽>
            <Type_默认插槽 type="电影">
                <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            </Type_默认插槽>
        </div>
        <hr>

        <div class="type1">
            <h2>具名插槽</h2>
            <Type_具名插槽 type="美食">
                <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" slot="slot1">
                <a href="https://www.baidu.com" slot="slot2">更多美食</a>
            </Type_具名插槽>
            <Type_具名插槽 type="游戏">
                <ul slot="slot1">
                    <li v-for="(data,index) in games" :key="index">{{data}}</li>
                </ul>
                <div slot="slot2">
                    <a href="https://www.baidu.com" slot="slot2">游戏1</a>
                    <a href="https://www.baidu.com" slot="slot2">游戏2</a>
                </div>
            </Type_具名插槽>
            <Type_具名插槽 type="电影">
                <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" slot="slot1"></video>
                <template v-slot:slot2>
                    <a href="https://www.baidu.com">电影1</a>
                    <a href="https://www.baidu.com">电影2</a>
                    <p>欢迎光临</p>
                </template>
            </Type_具名插槽>
        </div>
        <hr>

        <div class="type1">
            <h2>作用域插槽</h2>
            <Type_作用域插槽>
                <template scope="info">
                    <ul>
                        <li v-for="(user,index) in info.users" :key="index">{{user}}</li>
                    </ul>
                    <h4>{{info.msg}}</h4>
                </template>
            </Type_作用域插槽>
            <Type_作用域插槽>
                <template scope="info">
                    <ol>
                        <li v-for="(user,index) in info.users" :key="index">{{user}}</li>
                    </ol>
                    <h4>{{info.msg}}</h4>
                </template>
            </Type_作用域插槽>
            
        </div>
    </div>
</template>

<script>
    import Type_不使用插槽 from './components/Type_不使用插槽.vue'
    import Type_默认插槽 from './components/Type_默认插槽.vue'
    import Type_具名插槽 from './components/Type_具名插槽.vue'
    import Type_作用域插槽 from './components/Type_作用域插槽.vue'
    export default {
        name: 'App',
        components: {
            Type_不使用插槽,
            Type_默认插槽,
            Type_具名插槽,
            Type_作用域插槽
        },
        data() {
            return {
                title: 'Vue中插槽的使用',
                foods: ['小龙虾','热干面','刀削面'],
                games: ['大表哥2','lol','dnf'],
                films: ['阿甘正传','肖申克的救赎','泰坦尼克号']
            }
        }
    }
</script>

<style>
    .type1 {
        display: flex;
        justify-content: space-around;
    }
</style>
