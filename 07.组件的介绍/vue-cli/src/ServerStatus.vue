<!--
 * @Author: your name
 * @Date: 2020-02-19 18:56:42
 * @LastEditTime: 2020-02-19 19:26:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\07.组件的介绍\vue-cli\src\ServerStatus.vue
 -->

 <!--Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead. -->
 <!-- template标签内不允许有两个或三个或更多并列的元素,所以用div将其框起来 -->
<template>
  <!-- 组件的作用是输出服务器状态,是Home.vue的局部的组件 -->
  <div>
      <p>Server Status: {{ status }}</p>
      <hr>
      <button @click="changeStatus">Change Status</button>
  </div>
</template>
<script>
export default {
  data:function(){
    return{
      status: 'Critical1'
    }
  },
  methods:{
    changeStatus: function(){
        this.status = 'Normal'
    }
  }
}
</script>

