<!--
 * @Author: your name
 * @Date: 2020-02-20 11:42:46
 * @LastEditTime: 2020-02-20 15:10:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\08组件之间的通信\component_contact_作业\src\components\Server\Servers.vue
 -->
<template>
    <li
    class="list-group-item"
    style="cursor:pointer"
    @click="serverSelected"
    >
        Server #{{ server.id }}        
    </li>
</template>

<script>
    import {serverBus} from "../../main.js"  
    export default{
        props:['server'],
        methods:{
            serverSelected(){
                serverBus.$emit('serverSelected',this.server)
            }
        }
    }
</script>

<style>

</style>
