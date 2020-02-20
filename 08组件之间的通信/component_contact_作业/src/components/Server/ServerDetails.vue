<!--
 * @Author: your name
 * @Date: 2020-02-20 11:42:46
 * @LastEditTime: 2020-02-20 15:17:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\08组件之间的通信\component_contact_作业\src\components\Server\ServerDetails.vue
 -->
<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server #{{ server.id }} selected, Status :{{server.status}}</p>
        <hr>
        <button @click="resetStatus">Change to Normal</button>
    </div>
</template>

<script>
    import {serverBus} from "../../main.js"  
    export default{
        data(){
            return{
                server:null
            }
        },
        methods:{
            resetStatus(){
                this.server.status = 'Normal'
            }
        },
        created(){
            serverBus.$on("serverSelected",(server)=>{
                this.server= server;
            });
        }
    }
</script>
