<h1>Vue的使用</h1>

---
## localStorage 和 sessionStorage

- localStorage 和 sessionStorage统称为 webStorage

1. 存储内容大小一般支持5MB左右（不同浏览器可能不一样）

2. 浏览器通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制

3. 相关API <br/>
(1) `xxxxStorgae.setItem('key','value');` <br/>
    该方法接收一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值 <br/>
(2) `xxxxStorage.getItem('person');` <br/>
    该方法接收一个键名作为参数，返回键名对应的值 <br/>
(3) `xxxxStorage.removeItem('key');` <br/>
    该方法接收一个键名作为参数，并把键名从存储中删除 <br/>
(4) `xxxxStorage.clear();` <br/>
    该方法会清空存储中的所有数据 <br/>

4. 备注 <br/>
(1) sessionStorage存储的内容会随着浏览器窗口关闭而消失 <br/>
(2) xxxxStorage.setItem(key,value) key、value都必须是字符串。对象可借用JSOM.stringify() 转成JSON字符串 <br/>
(3) localStorage存储的内容，需要手动清除（借用API 或 清空缓存）才会消失 <br/>
(4) xxxxStorage.getItem(xxx)如果xxx对应的value获取不到，那么getItem的返回值是null。<br/>
(5) JSON.parse(null)的结果依然是null

