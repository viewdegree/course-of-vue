<!--
 * @Author: your name
 * @Date: 2020-02-19 22:42:51
 * @LastEditTime: 2020-02-20 11:26:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\08组件之间的通信\component_contact\src\components\UserEdit.vue
 -->
<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{myAge}}</p>
        <button @click="editAge">Chang User Name</button>
    </div>
</template>

<script>
import {eventBus} from '../main'
export default{
    props:["userAge"],
    data(){
        return {
            myAge : this.userAge
        }
    },
    methods:{
        editAge(){
            this.newAge = 30;
        }
    },
    computed:{
        newAge:{
            get(){
                return this.userAge;
            },
            set(val){
                this.myAge = val;
                //  return this.$emit("changeAge", val)
                // eventBus.$emit("changeAge", val)
                //直接调用eventBus的方法
                eventBus.changeAge(val);
            }
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
