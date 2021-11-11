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
