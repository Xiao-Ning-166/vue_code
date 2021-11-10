<template>
    <div>
        <h1 v-text="title"></h1>
        <School/>
        <hr>

        <Student/>
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name: 'App',
        components: {
            Student,
            School
        },
        data() {
            return {
                title: 'Vue中mixin配置项的使用'       
            }
        }
    }
</script>
