<!--
 * @Author: your name
 * @Date: 2020-02-20 11:42:46
 * @LastEditTime: 2020-02-20 12:54:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\08组件之间的通信\component_contact_作业\src\components\Server\ServerDetails.vue
 -->
<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="servers===''">Server Details are currently no update</p>
        <p v-else>Server Details are currently {{servers}}</p>
    </div>
</template>

<script>
    import {eventBus} from "../../main.js"
    export default{
        data(){
            return{
                servers:''
            }
        },
        created(){
            eventBus.$on("postServerMsg",(serversMag)=>{
                this.servers= serversMag;
            });
        }
    }
</script>
