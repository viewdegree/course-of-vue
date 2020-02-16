<!--
 * @Author: your name
 * @Date: 2020-02-16 01:24:41
 * @LastEditTime: 2020-02-16 12:51:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\test\my-app\src\App.vue
 -->
<template>
  <div id="app">
    {{msg}}
        <input type="text" v-model="info">
        <!-- v-on===@ -->
        <button @click="handleClick">添加</button>
        <ul>
            <!-- v-blind === :  数据绑定如果不写那么vue就拿不到前面的item--> 
            <todo-item v-for="item2 in list" :key="item2">
              <!-- 插槽的写法 -->
              <template v-slot:item="itemProps">
                <span :style="{fontSize: '20px', color:itemProps.checked?'red':'blue'}">{{item2}}</span>
              </template>
            </todo-item>
            <!-- 绑定key的作用是默认item2是没有重复的 -->
        </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';
export default {
  name: 'app',
  components: {
    TodoItem,
  },
  data(){     //输出数据
    return{
        msg: 'hello greektime',
        info:'',   //双向绑定
        list: []
    }
  },
  methods:{
    handleClick(){
          console.log(this.info);
          this.list.push(this.info);
          this.info = ""
      }
  }
}
</script>

<style>

</style>
