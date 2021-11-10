/*
  这是App组件文件
*/
<template>
  <div id="app">
    <!-- 引入assets文件夹中的图片资源 -->
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hr>

    <h2>学校信息</h2>
    <School></School>
    <h2>学生信息</h2>
    <Student></Student>
  </div>
</template>

<script>
// 引入HelloWorld文件组件
import HelloWorld from './components/HelloWorld.vue'
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    // 将HelloWorld组件作为App组件的子组件
    HelloWorld,
    School,
    Student

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
