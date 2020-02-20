/*
 * @Author: your name
 * @Date: 2020-02-19 22:39:46
 * @LastEditTime: 2020-02-20 11:25:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\08组件之间的通信\component_contact\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
//导出Vue对象的单独属性eventBus 事件总线
export const eventBus = new Vue({
  //data是对象形式
  data:{

  },
  methods: {
    changeAge(age){
      // this.$emit('ageWasEdited',age);
      this.$emit("changeAge", age)
    }
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
