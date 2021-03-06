<h1>Vue的使用</h1>

---

## localStorage 和 sessionStorage

- localStorage 和 sessionStorage 统称为 webStorage

1. &emsp;存储内容大小一般支持5MB左右（不同浏览器可能不一样）

2. &emsp;浏览器通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制

3. &emsp;相关API <br/>
&emsp;(1) `xxxxStorgae.setItem('key','value');` <br/>
&emsp;&emsp;该方法接收一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值 <br/>
&emsp;(2) `xxxxStorage.getItem('person');` <br/>
&emsp;&emsp;该方法接收一个键名作为参数，返回键名对应的值 <br/>
&emsp;(3) `xxxxStorage.removeItem('key');` <br/>
&emsp;&emsp;该方法接收一个键名作为参数，并把键名从存储中删除 <br/>
&emsp;(4) `xxxxStorage.clear();` <br/>
&emsp;&emsp;该方法会清空存储中的所有数据 <br/>

4. &emsp;备注 <br/>
&emsp;(1) &emsp;sessionStorage存储的内容会随着浏览器窗口关闭而消失 <br/>
&emsp;(2) &emsp;`xxxxStorage.setItem(key,value)`中的key、value都必须是字符串。对象可借用JSOM.stringify() 转成JSON字符串 <br/>
&emsp;(3) &emsp;localStorage存储的内容，需要手动清除（借用API 或 清空缓存）才会消失 <br/>
&emsp;(4) &emsp;`xxxxStorage.getItem(xxx)`如果xxx对应的value获取不到，那么getItem的返回值是null。<br/>
&emsp;(5) &emsp;`JSON.parse(null)`的结果依然是null

<br><br>


## 组件的自定义事件
1. &emsp;一种组件间的通信方式，适用于：**<font style="color:red;font-size:16px">子组件 ===> 父组件</font>**
2. &emsp;使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（**<font style="color:red; font-size:16px">事件的回调在A中</font>**）
3. &emsp;绑定自定义事件：
    1. &emsp;第一种方式，在父组件中：`<Demo @atguigu="test"/>` 或 `<Demo v-on:atguigu="test"/>`
    2. &emsp;第二种方式：在父组件中
    ```javascript
    <Demo ref="demo"/>
    ......
    methods: {
        test() {
            ......
        }
    },
    ......
    mounted() {
        this.$refs.demo.$on('atguigu',this.test)
    }
    ```
    3. &emsp;若想让自定义事件只能触发一次，可以使用 `once` 修饰符，或 `$once` 方法
4. &emsp;触发自定义事件：`this.$emit('事件名称',数据)`
5. &emsp;解绑自定义事件：<br>
&emsp;- 解绑一个事件：`this.$off('事件名称')` <br>
&emsp;- 解绑多个事件：`this.$off(['事件名称1','事件名称2',...])` <br>
&emsp;- 解绑所有事件：`this.$off()`
6. &emsp;组件上也可以绑定原始DOM事件，需要使用 `native` 修饰符 <br>
&emsp;- 例如：`<Student @click.native="getStudentName">`
7. &emsp;注意：通过 `this.$refs.xxx.$on('事件名称',回调)` 绑定自定义事件，回调<font style="color: red;">要么配置在methods中，要么用箭头函数</font>，否则this指向会出问题

<br><br>


## 全局事件总线（GlobalEventBus）
1. &emsp;一种组件间通信的方式，适用于<font color=red>任意组件间通信</font>
2. &emsp;安装全局事件总线
    ```javascript
    new Vue({
        ......
        beforeCreate() {
            // 安装全局事件总线。$bus就是当前应用的vm（vue实例对象）
            Vue.prototype.$bus = this
        }
        ......
    })
    ```
3. &emsp;使用事件总线
    1. &emsp;接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的<font color=red>回调留在A组件自身</font>
        ```javascript
        methods() {
            demo(data){......}
        }
        ......
        mounted() {
            this.$bus.$on('事件名称',this.demo)
            // 或者
            this.$bus.$on('事件名称',(data)=>{
                ......
            })
        }
        ```
    2. &emsp;提供数据：B组件想发送数据，则在B组件中触发$bus中绑定的数据，并传递数据<br>
    &emsp;`this.$bus.emit('事件名称',数据)` <br>
4. &emsp;最好在 beforeDestory 钩子中，用 `$off` 去解绑<font color=red>当前组件所用到的</font>事件
    ```javascript
    mounted() {
        // 在全局事件总线上绑定hello事件
        this.$bus.$on('hello',(data)=>{
            console.log('我是School组件，收到了数据：', data)
        })   
    },
    beforeDestroy() {
        // 关闭事件
        this.$bus.$off('hello')
    }
    ```

<br><br>

## 消息订阅与发布（pubsub）
1. &emsp;一种组件间通信的方式，适用于<font color=red>任意组件间通信</font>
2. &emsp;使用步骤：<br>
    (1) &emsp;安装pubsub：`npm i pubsub-js` <br>
    (2) &emsp;引入：`import pubsub from 'pubsub-js'` <br>
    (3) &emsp;接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的<font color=red>回调留在A组件自身</font>
    ```javascript
    methods(){
        // msgName：订阅消息的名称。如果不用可以使用 _ 占位
        // data：数据
        demo(msgName,data) {......}
        // 或 
        demo(_,data) {......}
    }
    ......
    mounted(){
        // 订阅消息
        this.pid = pubsub.subscribe('消息名称',this.demo)
    }
    ```
    (4) &emsp;提供数据 <br>
    &emsp;`pubsub.publish('消息名称',数据)` <br>
    (5) 最好在 beforeDestroy钩子中，用 `pubsub.unsubscribe(pid)` <font color=red>取消订阅</font>
3. vue中通常使用 <font style="color:red;font-size:16px">全局事件总线</font>

<br><br>

## nextTick
1. &emsp;语法：<br>
    &emsp;`this.$nextTick(回调函数)` <br>
2. 作用：<br>
    &emsp;在下一次 DOM 更新结束后执行其指定的回调。
3. 什么时候用？<br>
    &emsp;当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行

<br><br>

## Vue封装的过渡与动画
1. 作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名

3. 写法：<br>
    1. 准备好样式
    - 元素进入的样式：<br>
        1. v-enter：进入的起点
        2. v-enter-active：进入过程中
        3. v-enter-to：进入的终点
    - 元素离开的样式：<br>
        1. v-leave：离开的起点
        2. v-leave-active：离开过程中
        3. v-leave-to：离开的终点 <br>
    2. 使用 `<transition>` 包裹要过渡的元素，并配置 name 属性
        ```html
        <transition>
            <h1 v-show="isShow">你好啊</h1>
        </transition>
        ```
    3. 备注：若有多个元素需要过渡，则需要使用 `<transition-group>` ，且每个元素都要指定 `key` 值

    <br><br>

## vue脚手架配置代理
### 方法一
在 `vue.config.js` 中添加如下配置：<br>
```javascritp
devServer: {
    proxy: "目标地址"
    // 例如：proxy: "http://localhost:5000"
}
```

#### 说明
1. 优点：配置简单，请求资源时直接发给前端（8080）即可
2. 缺点：不能配置多个代理，不能灵活控制请求是否走代理
3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源）

### 方法二
编写 `vue.config.js` 配置具体代理规则：
```javascript
  devServer: {
    proxy: {
        // 匹配所有以 http://ip:port/'atguigu' 开头的请求路径
        '/atguigu': {
            // 代理目标的基础路径
            target: 'http://localhost:5000',
            // 地址重写，去掉请求路径中的 /atguigu
            pathRewrite: {'^/atguigu':''},
            // 用于支持 websocket
            ws: true,
            // 用于控制请求头中的host值。默认为true
            // true：服务器收到的请求头中的host为：localhost:5000
            // false：服务器收到的请求头中的host为：localhost:8080
            changeOrigin: true
        }
    }
  }
```

#### 说明
1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理
2. 缺点：配置略微繁琐，请求资源时必须加前缀

<br><br>

## 插槽
1. 作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 <font style="color:red;font-size:16px">父组件 ===> 子组件</font>
2. 分类：默认插槽、具名插槽、作用插槽
### 插槽使用方式：
#### 默认插槽
```html
父组件中：
    <Demo>
        <div>html结构</div>
    </Demo>
子组件中：
    <template>
        <div>
            <!-- 定义插槽 -->
            <slot>插槽默认内容<slot>
        </div>
    </template>
```
#### 具名插槽
```html
父组件中：
    <Demo>
        <!-- 方式一：可以不用template，指定 插槽名字即可 -->
        <template slot="插槽名字">
            <div>html结构1</div>
        </template>

        <!-- 方式二：必须要 template 结构 -->
        <template v-slot:插槽名字>
            <div>html结构2</div>
        </template>
    </Demo>
子组件：
    <template>
        <div>
            <!-- 定义插槽 -->
            <slot name="插槽名字1">插槽默认内容1<slot>
            <slot name="插槽名字2">插槽默认内容2<slot>
        </div>
    </template>
```
#### 作用域插槽
1. 理解：<font style="color:red;font-size:16px">数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。</font>（例如：games数据在Category组件中，但使用数据遍历出来的结构由App组件决定）
2. 具体方式：
```html
父组件中：
    <Demo>
        <!-- 方式二：必须要 template 结构 -->
        <template scope="scopeData">
            <!-- 例如生成ul列表 -->
            <ul>
                <li v-for="g in scopeDta.games" :key="g">{{g}}</li>
            </ul>
        </template>
    </Demo>
子组件中：
    <template>
        <div>
            <slot :games="games"></slot>
        </div>
    </template>
    <script>
        export default {
            name: 'Demo',
            // 数据在子组件自身
            data: {
                return {
                    games: ['lol','lolm','大表哥2']
                }
            }
        }
    </script>
```
3. 作用域插槽也可以指定 name 属性

<br><br>

## Vuex
### 1. 概念
    在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信
### 2.何时使用？
    多个组件需要共享数据时
### 3.搭建vuex环境
1. 创建文件：`src/store/index.js`
    ```javascript
    // 引入vue
    import Vue from 'vue'
    // 引入Vuex
    import Vuex from 'vuex'

    // 使用Vuex插件
    Vue.use(Vuex)

    // 准备actions —— 用于响应组件中的动作
    const actions = {}
    // 准备mutations —— 用于操作数据
    const mutations = {}
    // 准备state —— 用于准备存储数据
    const state = {}

    // 创建并暴露 store
    export default new Vuex.Store({
        // actions: actions,
        // mutations: mutations,
        // state: state

        // 简写形式：当key名 = value名
        actions,
        mutations,
        state
    })

    ```
2. 在 `mian.js` 中创建 vm 时传入 `store` 配置项
    ```javascript
    import Vue from 'vue'
    import App from './App.vue'

    // 引入store
    import store from './store/index'

    Vue.config.productionTip=false


    new Vue({
        el: '#app',
        store: store,
        render: h => h(App),
    })
    ```
### 4. 基本使用
1. 初始化数据、配置 `actions`、`mutations`、操作文件 `store.js`
    ```javascript
    // 引入vue核心库
    import Vue from 'vue'
    // 引入Vuex
    import Vuex from 'vuex'

    // 使用Vuex插件
    Vue.use(Vuex)

    // 准备actions —— 用于响应组件中的动作
    const actions = {
        /*
            响应组件中加的动作
            context：上下文对象，有 dispatch、commit等方法
        */
        add(context,n) {
            context.commit('ADD', n)
        }
    }
    // 准备mutations —— 用于操作数据
    const mutations = {
        // 执行加
        ADD(state,n) {
            state.sum += n
        }
    }
    // 准备state —— 用于准备存储数据
    const state = {
        sum: 0,
    }

    // 创建并暴露 store
    export default new Vuex.Store({
        // actions: actions,
        // mutations: mutations,
        // state: state

        // 简写形式：当key名 = value名
        actions,
        mutations,
        state
    })
    ```
2. 组件中读取vuex中的数据：
    `$store.state.sum`
3. 组件中修改vuex中的数据：
    `$store.dispatch('action中的方法名',数据)`
    或
    `$store.commit('muations中的方法名',数据)`
    > 备注：若没有网络请求或其他业务逻辑，组件中而也可以越过 `actions`，即不写 `dispatch`，直接写 `commit`
### 5. gtters配置项的使用
1. 概念：当 state 中的数据需要经过加工后再使用时，可以使用 getters 加工
2. 在 `store.js` 中 追加 `getters` 配置
    ```javascript
    ......
    const getters = {
        // state：可以读/写 state 配置项中的参数值
        bigSum(state) {
            return state.sum * 10
        }
    }
    // 创建并暴露 store
    expore default new Vuex.Store({
        ......
        getters
    })
    ```
3. 组件中读取数据：`$store.getters.bigSum`
### 6. 四个 map 方法的使用
1. **mapState方法**：用于帮助我们映射 `state` 中的数据为计算属性
    ```javascript
    computed: {
        // 借助mapState生成计算属性（对象写法）
            // 格式：计算属性名:State中的属性名
        ...mapState({sum:'sum',school:'school',subject:'subject'})

        // 借助mapState生成计算属性（数组写法）
            // 场景：当 计算属性名 = State中的属性名
        ...mapState(['sum','school','subject'])

    }
    ```
2. **mapGetters方法**：用于帮助我们映射 `getters` 中的数据为计算属性
    ```javascript
    computed: {
        // 借助mapGetters生成计算属性（对象写法）
            // 格式：计算属性名:Getters中的属性名
        ...mapState({bigSum:'bigSum'})

        // 借助mapGetters生成计算属性（数组写法）
            // 场景：当 计算属性名 = Getters中的属性名
        ...mapState(['bigSum'])

    }
    ```
3. **mapActions方法**：用于帮助我们生成与 `actions` 对话的方法，即：包含 `$store.dispatch(xxx)` 的函数
    ```javascript
    methods:{
        // 靠mapAction生成：add、sub（对象形式）
            // 格式：methods中的方法名:Actions中的方法名
        ...mapActions({add:'add',sub:'sub'})

        // 靠mapAction生成：add、sub（数组形式）
            // 场景：methods中的方法名 = Actions中的方法名
        ...mapActions(['add','sub'])

    }
    ```
4. **mapMutations方法**：用于帮助我们生成 `mutations` 对话的方法，即：包含 `$store.commit(xxx)` 的函数
    ```javascript
    methods:{
        // 靠mapMutations生成：ADD、SUB（对象形式）
            // 格式：methods中的方法名:mapMutations中的方法名
        ...mapActions({add:'ADD',sub:'SUB'})

        // 靠mapMutations生成：ADD、SUB（数组形式）
            // 场景：methods中的方法名 = mapMutations中的方法名
        ...mapActions(['ADD','SUB'])

    }
    ```
    > 备注：使用 `mapActions` 和 `mapMutations` 时，绑定事件时时要传入参数，否则参数是事件对象
### 7. 模块化+命名空间
1. 目的：让代码更好维护，让多种数据分类更加明确
2. 修改 `store.js`
    ```javascript
    const countAbout = {
        // 开启命名空间
        namespaced: true,
        state:{x:1},
        mutations:{...},
        actions:{...},
        getters:{
            bigSum(state) {
                return state.sum*10
            }
        }
    }
    const personAbout = {
        // 开启命名空间
        namespaced: true,
        state:{...},
        mutations:{...},
        actions:{...},
    }
    const store = new Vuex.Store({
        modules: {
            conuntAbout,
            personAbout
        }
    })
    ```
3. 开启命名空间后，组件中读取state数据：
    ```javascript
    // 方式一：自己直接读取
    this.$store.state.personAbout.list
    // 方式二：借助mapState读取
    ...mapState('countAbout',['sum','school','subject'])
    ```
4. 开启命名空间后，组件中读取getters数据
    ```javascript
    // 方式一：自己直接读取
    this.$store.getters['personAbout/firstPersonName']
    // 方式二：借助mapGetters读取
    ...mapGetters('countAbout',['bigSum'])
    ```
5. 开启命名空间后，组件调用dispatch
    ```javascript
    // 方式一：自己直接读取
    this.$store.dispatch('personAbout/addPersonWang',person)
    // 方式二：借助mapActions读取
    ...mapGetters('countAbout',{addOdd:'addOdd',addWait:'addWait'})
    ```
6. 开启命名空间后，组件调用commit
    ```javascript
    // 方式一：自己直接读取
    this.$store.commit('personAbout/firstPersonName',person)
    // 方式二：借助mapMutaions读取
    ...mapGetters('countAbout',{add:'ADD',sub:'SUB'})
    ```

<br><br>

## 路由
> 1. 理解：一个路由（route）就是一组映射关系（key-value），多个路由需要路由器（router）进行管理
> 2. 前端路由：key是路径，value是组件
### 1. 基本使用
1. 安装 `vue-router`，命令：`npm i vue-router`
2. 应用插件(main.js)：
    ```javascript
    // 引入插件
    import VueRouter from 'vue-router'
    // 应用插件
    Vue.use(VueRouter)
    ```
3. 编写 router 配置项：
    ```javascript
    import VueRouter from "vue-router";
    import About from "../components/About.vue"
    import Home from "../components/Home.vue"

    // 创建并暴露一个router实例对象，去管理一组组的路由规则
    export default new VueRouter({
        routes: [
            {
                path: '/about',
                component: About
            },
            {
                path: '/home',
                component: Home
            }
        ]
    })
    ```
4. 实现切换（active-class）可配置高亮样式
    ```html
    <router-link active-class="高亮样式" to="/about">About</router-link>
    ```
5. 指定展示位置
    ```html
    <router-view></router-view>
    ```
### 2. 几个注意点
1. 路由组件通常存放在 `src/pages` 文件夹，一般组件通常存放在 `src/components` 文件夹中
2. 通过切换，“隐藏”了的路由组件，默认是被被销毁的，需要的时候再去挂载
3. 每个组件都有自己的 `$route` 属性，里面存储着自己的路由信息
4. 整个应用只有一个 router，可以通过组件的 `$router` 属性获取到
### 3. 嵌套（多级）路由
1. 配置路由规则，使用 `children` 配置项
    ```javascript
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            // 通过children配置子级路由
            children: [
                {
                    // 一定不要写成 '/message'
                    path: 'message',
                    component: Message
                },
                {
                    path: 'news',
                    component: News
                }
            ]
        }
    ]
    ```
2. 跳转（要写完整路径）
    ```html
    <router-link to="/home/news"></router-link>
    ```
### 4. 路由的query参数
1. 传递参数
    ```html
    <!-- 跳转并携带query参数，to的字符串写法 -->
    <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>

    <!-- 跳转并携带query参数，to的对象写法 -->
    <router-link :to="{
        path: '/home/message/detail',
        query: {
            id: m.id,
            title: m.title
        }
    }">
        {{m.title}}
    </router-link>
    ```
2. 接收参数：
    `$route.query.参数名`
### 5. 命名路由
1. 作用：可以简化路由的跳转
2. 如何使用：
    1. 给路由命名
    ```javascript
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    // 给路由命名
                    name: 'demo'
                    path: 'message',
                    component: Message
                }
            ]
        }
    ]
    ```
    2. 简化跳转
    ```html
    <!-- 简化前，需要写完整的路径 -->
    <router-link to="/home/message">跳转</router-link>
    <!-- 简化后，直接通过名字跳转 -->
    <router-link :to="{name:'demo'}">跳转</router-link>
    <!-- 简化后，配合传递参数 -->
    <router-link :to="{
        name:'demo',
        query:{
            id:666,
            title:'你好'
        }
    }">跳转</router-link>
    ```
### 6. 路由的params参数
1. 配置路由，声明接收 params 参数
    ```javascript
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            // 配置嵌套路由
            children: [
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            // 使用占位符声明接收params参数
                            path: 'detail/:id/:title',
                            component: Detail
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News
                }
            ]
        }
    ]
    ```
2. 传递参数
    ```html
    <!-- 跳转并携带params参数，字符串写法 -->
    <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>

    <!-- 跳转并携带params参数， -->           
    <router-link :to="{
        // 使用对象写法，必须用name属性
        name: 'xiangqing',
        params: {
            id: m.id,
            title: m.title
        }
    }">
        {{m.title}}
    </router-link>
    ```
    > 特别注意：路由携带 params 参数时，若使用 to的对象写法，则不能使用 path配置项，必须使用 name 配置项
3. 接收参数：`$route.params.参数名`
### 7. 路由的props配置
作用：让路由组件更方便的接收到参数
```javascript
{
    name: 'xiangqing',
    path: 'detail/:id/:title',
    component: Detail,

    // props的第一种写法，props值为对象，该对象中的所有key-value的组合最终都会通过props传给Detail组件
    props: {id:'666',title:'hello'}

    // props的第二种写法，props值为布尔值。true：把路由收到的所有params参数通过props传给Detail组件
    props: true

    // porps的第三种写法，props值为函数，接收到$route。会将返回的对象的key-value以props传给Detail组件
    props($route) {
        return {
            id: $route.params.id,
            title: $route.params.title
        }
    }
}
```
### 8. `<reouter-link>`的replace属性
1. 作用：控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式：分别为 `push` 和 `replace`。
    - `push`：追加历史记录
    - `replace`：替换当前记录
    > 路由跳转时默认为 `push`
3. 如何开启 `replace` 模式：`<router-link replace ......>News</router-link>`
### 9. 编程式路由导航
1. 作用：不借助 `<router-link>` 实现路由跳转
2. 具体编码：
    ```javascript
    // $router的两个API
    pushShow(m) {
        this.$router.push({
            name: 'xiangqing',
            params: {
                id: m.id,
                title: m.title
            }
        })
    },
    replaceShow(m) {
        this.$router.replace({
            name: 'xiangqing',
            params: {
                id: m.id,
                title: m.title
            }
        })
    }
    ```
3. `$router的其他API`
    - `$router.back()`：向后退一步
    - `$router.forward()`：向前进一步
    - `$router.go(n)`：n为正，向前进n步；n为负，向后退n步
### 10. 缓存路由组件
1. 作用：让不展示的路由组件保持挂在，不被销毁
2. 具体编码
    ```html
    <!-- 缓存一个 -->
    <keep-alive include="组件名称">
        <router-view></router-view>
    </keep-alive>

    <!-- 缓存多个 -->
    <keep-alive :include="['组件名称1',...]">
        <router-view></router-view>
    </keep-alive>
    ```
### 11. 两个新的声明周期函数
1. 作用路由组件所独有的两个钩子，用于捕获路由组件的激活状态。
2. 具体名字：
    - `activated`：路由组件被激活时触发
    - `deactivated`：路由组件失活时触发
### 12. 路由守卫
1. 作用：对路由进行权限控制
2. 分类：全局守卫、独享守卫、组件内守卫
3. 全局守卫（src/router/index.js）
    ```javascript
    // 全局前置路由守卫 —— 初始化时调用、每次切换路由之前调用
    router.beforeEach((to,from,next)=>{
        console.log('前置守卫',to,from)
        // 判断当前路由是否需要进行权限控制
        if(to.meta.isAuth) {
            // 权限控制的具体控制
            console.log('判断是否拥有权限')
            // 放行
            next()
        } else {
            // 放行
            next()
        }
    })

    // 全局后置路由守卫 —— 初始化时调用、每次切换路由之后调用
    router.afterEach((to,from)=>{
        console.log('后置守卫',to,from)
        // 修改网页的title
        document.title = to.meta.title || '全局路由守卫'
    })
    ```
4. 独享守卫（src/router/index.js）
    ```javascript
    {
        name: 'xiaoxi',
        path: 'message',
        component: Message,
        meta: {isAuth:true,title:'消息'},
        // 独享路由守卫 —— 进入路由组件之前调用
        beforeEnter(to,form,next) {
            console.log('独享路由守卫', form)
            if(to.meta.isAuth) {
                if(to.meta.title === '新闻') {
                    // 放行
                    next()
                } else {
                    alert('你的权限不够')
                }
            } else {
                // 放行
                next()
            }

        }
    }
    ```
5. 组件内路由守卫
    ```javascript
    export default {
        name: 'About',
        // 通过路由规则，进入组件时被调用
        beforeRouteEnter (to, from, next) {
            console.log('进入About组件',to,from)
            next()
        },
        // 通过路由规则，离开组件时被调用
        beforeRouteLeave (to, from, next) {
            console.log('离开About组件',to,from)
            next()
        }
    }
    ```