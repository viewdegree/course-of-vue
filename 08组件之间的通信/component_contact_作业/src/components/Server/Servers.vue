<!--
 * @Author: your name
 * @Date: 2020-02-20 11:42:46
 * @LastEditTime: 2020-02-20 12:53:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\08组件之间的通信\component_contact_作业\src\components\Server\Servers.vue
 -->
<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <template v-for="(item,index) in servers">
                <li
                class="list-group-item"
                v-for="(val,key) in item" :key="val" @click="postServerMsg(index)">
                    <template v-if="key ==='id'">
                        Server #{{ val }}        
                    </template>  
                </li>
            </template>
            
        </ul>
    </div>
</template>

<script>
    import {eventBus} from "../../main.js"
    export default{
        data(){
            return{
                servers:[
                    {id:1,status:'521'},
                    {id:2,status:'404'},
                    {id:3,status:'200'},
                    {id:4,status:'304'},
                    {id:5,status:'301'}
                ]
            }
        },
        methods:{
            postServerMsg(index){
                var msg = this.servers[index].status
                eventBus.$emit("postServerMsg", msg)
            }
        }
    }
</script>

<style>

</style>
