<!--
 * @Author: your name
 * @Date: 2020-02-16 18:12:53
 * @LastEditTime: 2020-02-16 18:13:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edits
 * @FilePath: \vue\course-of-vue\基础篇\vue组件核心概念\2.Event.vue
 -->
<template>
    <div>
        name:{{name||"--"}}
        <br>
        <input :value="name" @change="handleChange">
        <br>
        <br>
        <div @click="handleDivClick">
            <button @click="handleClick">重置成功</button>
            <!-- .stop是为了阻止冒泡,让器父级元素触发不了handleDivClick -->
            <button @click.stop="handleClick">重置失败</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"EventDemo",
    props:{
        name:String
    },
    methods:{
        handleChange(e){
            this.$emit("change",e.target.value);
        },
        handleDivClick(){
            this.$emit("change","");
        },
        handleClick(e){
            // 都会失败不用.stop可以用下行代码阻止冒泡
            // e.stopPropagation()
        }
    }
    /* 课后习题,我们知道触发事件是用this.$emit去触发的
        返回值是什么
        如果上层组件返回了一个值,那么$emit能否接收到呢? 
    
    */
};
</script>

<style>

</style>
