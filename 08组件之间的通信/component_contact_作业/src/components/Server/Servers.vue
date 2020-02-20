<!--
 * @Author: your name
 * @Date: 2020-02-20 11:42:46
 * @LastEditTime: 2020-02-20 11:47:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\08组件之间的通信\component_contact_作业\src\components\Server\Servers.vue
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

<script>
</script>

<style>

</style>
