<template>
    <div class="row">
        <Item />
        <Item />
        <Item />
        <Item />
    </div>
</template>

<script>
    import Item from './Item.vue'
    export default {
        name: 'List',
        components: {
            Item
        }
    }
</script>

<style scoped>
    .album {
        min-height: 50rem; /* Can be removed; just added for demo purposes */
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }
</style>