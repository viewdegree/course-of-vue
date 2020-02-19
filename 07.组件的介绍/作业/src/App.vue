<!--
 * @Author: your name
 * @Date: 2020-02-19 19:50:46
 * @LastEditTime: 2020-02-19 21:02:49
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
        <div class="row">
            <app-servers></app-servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <!-- 尾部模块 -->
        <my-footer></my-footer>
    </div>
</template>

<script>
    import Servers from "./components/Server/Servers.vue"
    import ServerDetails from "./components/Server/ServerDetails.vue"
    import Header from "./components/Shared/Header.vue"
    import Footer from "./components/Shared/Footer.vue"
    export default{
        components:{
            "app-servers":Servers,
            "app-server-details":ServerDetails,
            "my-herader":Header,
            "my-footer":Footer
        }
    }
</script>

<style>

</style>
