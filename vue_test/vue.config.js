/**
 * vue.config.js 是一个可选的配置文件
 */

 module.exports = {
  pages: {
    index: {
      // 配置App的入口程序
      // entry: 'src/main_copy.js',

      // 01_分析Vue脚手架
      // entry: '01_分析Vue脚手架_src/main.js',

      // 02_Vue中ref属性的使用
      // entry: '02_Vue中ref属性的使用_src/main.js',

      // 03_Vue中的prop配置项的使用
      // entry: '03_Vue中的prop配置项_src/main.js'

      // 04_Vue中mixin配置项的使用
      // entry: '04_Vue中mixin配置项的使用_src/main.js'

      // 05_Vue中插件的使用
      // entry: '05_Vue中插件的使用_src/main.js'

      // 06_Vue中scoped样式的使用
      // entry: '06_Vue中scoped样式的使用_src/main.js'

      // 07_组件自定义事件的使用
      // entry: '07_组件自定义事件的使用_src/main.js'

      // 08_全局事件总线
      // entry: '08_全局事件总线_src/main.js'

      // 09_消息订阅与发布_pubsub
      // entry: '09_消息订阅与发布_pubsub_src/main.js'

      // 10_vue中的过渡与动画
      // entry: '10_vue中的过渡与动画_src/main.js'

      // 11_vue中的axios操作_src
      // entry: '11_vue中的axios操作_src/main.js'

      // 12_vue中的vue-resource操作
      // entry: '12_vue中的vue-resource操作_src/main.js'

      // 13_vue中的插槽的使用
      // entry: '13_vue中的插槽的使用_src/main.js'

      // 14_求和案例_纯vue版_src
      // entry: '14_求和案例_纯vue版_src/main.js'

      // 15_搭建vuex开发环境_src
      // entry: '15_搭建vuex开发环境_src/main.js'

      // 16_求和案例_vuex版_src
      // entry: '16_求和案例_vuex版_src/main.js'

      // 17_求和案例_vuex多组件间数据共享_src
      // entry: '17_求和案例_vuex多组件间数据共享_src/main.js'

      // 18_求和案例_vuex模块化+命名空间_src
      // entry: '18_求和案例_vuex模块化+命名空间_src/main.js'

      // 19_vue-router_路由的基本使用_src
      // entry: '19_vue-router_路由的基本使用_src/main.js'

      // 20_嵌套（多级）路由的使用_src
      // entry: '20_嵌套（多级）路由的使用_src/main.js'

      // 21_路由的query参数的使用_src
      // entry: '21_路由的query参数的使用_src/main.js'

      // 22_路由的params参数的使用_src
      // entry: '22_路由的params参数的使用_src/main.js'

      // 23_路由的props配置的使用_src
      // entry: '23_路由的props配置的使用_src/main.js'

      // 24_编程式路由导航_src
      // entry: '24_编程式路由导航_src/main.js'

      // 25_缓存路由组件_src
      // entry: '25_缓存路由组件_src/main.js'

      // 26_路由中的两个特有的生命周期函数_src
      // entry: '26_路由中的两个特有的生命周期函数_src/main.js'

      // 27_全局守卫(前置&后置)_src
      // entry: '27_全局守卫(前置&后置)_src/main.js'

      // 28_独享路由守卫_src
      // entry: '28_独享路由守卫_src/main.js'

      // 29_组件内路由守卫_src
      entry: '29_组件内路由守卫_src/main.js'
    } 
  },
  /* 11_vue中的axios操作_src
  // 开启代理服务器。这种方式只能配置一个代理服务器
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },

  // 方式二：
  // devServer: {
  //   proxy: {
  //     '/atguigu': {
  //       target: 'http://localhost:5000',
  //       // 地址重写，去掉路径中的 /atguigu
  //       pathRewrite: {'^/atguigu':''},
  //       // 用于支持 websocket
  //       ws: true,
  //       // 用于控制请求头中的host值
  //       changeOrigin: true
  //     }
  //   }
  // }
  */
}