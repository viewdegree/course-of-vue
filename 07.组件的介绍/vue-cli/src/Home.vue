<!--
 * @Author: your name
 * @Date: 2020-02-19 18:27:19
 * @LastEditTime: 2020-02-19 18:52:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\07.组件的介绍\vue-cli\src\Home.vue
 -->
 <!--Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead. -->
 <!-- template标签内不允许有两个或三个或更多并列的元素,所以用div将其框起来 -->
<template>
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

