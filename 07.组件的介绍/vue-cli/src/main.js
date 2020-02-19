/*
 * @Author: your name
 * @Date: 2020-02-19 16:54:37
 * @LastEditTime: 2020-02-19 18:38:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\07.组件的介绍\vue-cli\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
//注册全局组件,这样App.vue才能获取到
Vue.component('app-server-status',Home);
new Vue({
  el: '#app',
  render: h => h(App)
  // render是template属性的替代品但这里是经过webpack渲染编译后的js代码,不再是template属性值的字符串,所以render比template更适合,这是写模板的最好的方法
})
