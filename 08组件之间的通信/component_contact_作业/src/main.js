/*
 * @Author: your name
 * @Date: 2020-02-20 11:42:46
 * @LastEditTime: 2020-02-20 12:27:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\08组件之间的通信\component_contact_作业\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
