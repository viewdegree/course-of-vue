<!--
 * @Author: your name
 * @Date: 2020-02-19 19:50:46
 * @LastEditTime: 2020-02-19 20:27:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\07.组件的介绍\作业\src\App.vue
 -->
<template>
    <div class="container">
        <!-- 头部模块 -->
        <my-herader></my-herader>
        <hr>
        <!-- 状态模块 -->
        <server-status></server-status>
        <hr>
        <!-- 尾部模块 -->
        <my-footer></my-footer>
    </div>
</template>

<script>
import ServerStatus from "./ServerStatus.vue"
import Header from "./Header.vue"
import Footer from "./Footer.vue"
export default{
    components:{
        "server-status":ServerStatus,
        "my-herader":Header,
        "my-footer":Footer
    }
}
</script>

<style>

</style>
