<!--
 * @Author: your name
 * @Date: 2020-02-16 17:50:28
 * @LastEditTime: 2020-02-16 17:52:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\course-of-vue\基础篇\vue组件核心概念\index.vue
 -->
<template>
    <div id="app">
        <a-tabs>
            <a-tab-pane key="props" tab="属性">
                <!-- 使用组件传递属性值 -->
                <!-- :on-change是专门修改属性的 -->
                <Props  
                    name="Hello Vue!"
                    :type = "type" 
                    :isVisible="false"
                    :on-change="handlePropChange"
                    title="属性Demo"
                    class="test1"
                    :class="test1"
                    style="margin-top:10px"
                    :style="{marginTop:'10px'}"
                >
                <!-- 课后习题 -->
                <!--  子组件为何不可以修改父组件传递的Prop,如果修改了,Vue是如何监控到属性的修改并给出警告的? -->
            </a-tab-pane>
            <a-tab-pane key="event" tab="事件"> 
                <Event :name="name" @change="handleEventChange">
            </a-tab-pane>
            <a-tab-pane  key="slot" tab="插槽">
                <h2>2.6新语法</h2>
                <SlotDemo>
                    <p>default slot</p>
                    <template v-slot:title>
                        <p>title slot1</p>
                        <p>title slot2</p>
                    </template>
                    <template v-slot:item="props">
                        <p>item slot-scope {{props}}</p>
                    </template>
                </SlotDemo>
                 <h2>2.5老语法</h2>
                <SlotDemo>
                    <p>default slot</p>
                    <p slot="title">title slot1</p>
                    <p slot="title">title slot2</p>
                    <p slot="item" slot-scope="props">item slot-scope {{props}}</p>
                </SlotDemo>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import Props from '1.Props.vue';
import Event from '2.Event.vue';
import SlotDemo from '3.Slot.vue';
export default {
 name: 'app',
  components: {
    Props,
  },
  data(){     //输出数据
    return{
    }
  },
  methods:{
    handlePropChange(){
      }
  }
}
</script>

<style>

</style>
