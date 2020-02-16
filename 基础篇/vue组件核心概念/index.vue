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
            <a-tab-pane>
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
        </a-tabs>
    </div>
</template>

<script>
import Props from '1.Props.vue';
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
