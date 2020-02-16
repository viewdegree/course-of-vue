<!--
 * @Author: your name
 * @Date: 2020-02-16 19:42:32
 * @LastEditTime: 2020-02-16 19:42:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\course-of-vue\基础篇\vue组件核心概念\3.Slot.vue
 -->
<template>
    <div>
        <slot />
        <slot name="title"/>
        <slot name="item" v-bind="{value:'vue'}">
    </div>
</template>

<script>
export default {
    name: 'SlotDemo'
}
</script>

<style>

</style>
