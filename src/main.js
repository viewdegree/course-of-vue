/*
 * @Author: viewdegree
 * @Date: 2020-02-16 01:24:41
 * @LastEditTime: 2020-02-16 11:33:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\test\my-app\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({ //挂载节点
  render: h => h(App),
}).$mount('#app')
