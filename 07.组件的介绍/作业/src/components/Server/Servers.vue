<!--
 * @Author: your name
 * @Date: 2020-02-19 20:50:59
 * @LastEditTime: 2020-02-19 21:16:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\07.组件的介绍\作业\src\Servers.Vue
 -->

<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="index in 5" :key="index">
                Server #{{ index }}
            </li>
        </ul>
    </div>
</template>
<style scoped>
    div{
        border: 1px solid red;
    }
</style>


