<!--
 * @Author: your name
 * @Date: 2020-02-16 12:53:52
 * @LastEditTime: 2020-02-16 12:55:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edits
 * @FilePath: \vue\test\my-app\src\components\TodoItem.vue
 -->
<!-- 按住s自动生成 -->
<template>
    <li class="li">
        <input type="checkbox" v-model="checked">
        <!-- 接收View层传递的插槽数据 -->
        <slot name="item" v-bind="{checked}"></slot>
    </li>
</template>

<script>
export default {
    props:['item'],
    data(){
        return{
            checked: false
        }
    }
}
</script>

<style>
.li{
    color: red;
}
</style>
