<!--
 * @Author: your name
 * @Date: 2020-02-20 11:42:46
 * @LastEditTime: 2020-02-20 15:14:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\08组件之间的通信\component_contact_作业\src\components\Server\Servers.vue
 -->
<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="(server,index) in servers" :key="index" :server="server"></app-server>
        </ul>
    </div>
</template>

<script>
    import {eventBus} from "../../main.js"
    import Server from './Server.vue'
    export default{
        components:{
            appServer:Server
        },
        data(){
            return{
                servers:[
                    {id:1,status:'Normal'},
                    {id:2,status:'Critical'},
                    {id:3,status:'Unknown'},
                    {id:4,status:'Normal'},
                ]
            }
        }
    }
</script>

<style>

</style>
