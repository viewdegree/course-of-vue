<!--
 * @Author: your name
 * @Date: 2020-02-19 20:11:51
 * @LastEditTime: 2020-02-19 20:14:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\07.组件的介绍\作业\src\ServerStatus.vue
 -->
<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <li
                        class="list-group-item"
                        v-for="index in 5" :key="index">
                    Server #{{ index }}
                </li>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6">
            <p>Server Details are currently not updated</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
