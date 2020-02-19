<!--
 * @Author: your name
 * @Date: 2020-02-19 15:55:02
 * @LastEditTime: 2020-02-19 18:24:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\06.使用webpack和Vue命令进入真正的开发流程\vue-cli\src\App.vue
 -->
<!-- vue类型的文件只是模板,是用来设置的,真正使用vue文件是main.js -->
<!-- 只要有模板就能正常工作 -->
<template>
  <p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>
</template>
<!-- 导出的对象与Vue实例还是构造实例用到的那个对象都是一样的使用,属性也是一样的 -->
<!-- 导出的目的是把业务逻辑添加到模板上 -->
<script>
export default {
  data:function(){
    return{
      status: 'Critical2'
    }
  },
  methods:{
    changeStatus: function(){
        this.status = 'Normal'
    }
  }
}
</script>
