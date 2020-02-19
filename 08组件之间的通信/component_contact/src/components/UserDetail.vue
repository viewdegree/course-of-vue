<!--
 * @Author: your name
 * @Date: 2020-02-19 22:42:51
 * @LastEditTime: 2020-02-19 23:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\08组件之间的通信\component_contact\src\components\UserDetail.vue
 -->
<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{name1}}</p>
    </div>
</template>

<script>
//如何从父组件User.vue获取父主键修改的值name
// props相当于属性data,但是是没有值的,对应父组件写在子组件的name属性中的传
    export default{
        props:['name1']
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
