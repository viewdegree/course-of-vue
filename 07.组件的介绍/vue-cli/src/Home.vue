<!--
 * @Author: your name
 * @Date: 2020-02-19 18:27:19
 * @LastEditTime: 2020-02-19 19:25:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\07.组件的介绍\vue-cli\src\Home.vue
 -->
 <!--Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead. -->
 <!-- template标签内不允许有两个或三个或更多并列的元素,所以用div将其框起来 -->
<template>
  <div>
    <!-- Home的作用不再是输出这个服务器的状态了,而是循环访问我的所有服务器 -->
      <app-server-status v-for="(server,index) in 5" :key="index"></app-server-status>
  </div>
</template>
<script>
//important 设置组件变量名 from 组件单文件相对路径
//组件变量名是自己定义的最好采用原文件名去掉后缀
    import ServerStatus from './ServerStatus.vue';
    export default {
      //定义局部组件
      components:{
        'app-server-status': ServerStatus 
      }
    }
</script>

