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