<!--
 * @Author: your name
 * @Date: 2020-02-19 22:42:51
 * @LastEditTime: 2020-02-20 07:29:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\08组件之间的通信\component_contact\src\components\UserDetail.vue
 -->
<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{switchName1()}}</p>
        <p>User Name2: {{switchName2()}}</p>
        <p>User Name3: {{switchMyName()}}</p>
    </div>
</template>

<script>
//如何从父组件User.vue获取父主键修改的值name
// props相当于属性data,但是是没有值的,对应父组件写在子组件的name属性中的传
// 访问props内设置的属性可以像访问属性一样用this访问
    export default{
        //验证从父组件传入的数据为数字或者其他数据类型造成调用switchName方法的时候出错,里可以限制name1的数据类型 
        //类型有  String Array Boolean Number Object 
            props:{
            //设置数据类型
            name1: [String, Array],
            //设置是否是必须传递的值
            name2: {
                type: [String, Array],
                required: true
            },
            //设置对象类型需要用函数返回
            name3:{
                type: Object,
                default:function(){
                    return{
                        name: 'Max'
                    }
                }
            },
            myName: {
                type: [String, Array],
                default: true
            }
        },
        methods:{
            switchName1(){
                return this.name1.split("").reverse().join("");
            },
            switchName2(){
                return this.name2.split("").reverse().join("");
            },
            switchMyName(){
                return this.myName.split("").reverse().join("");
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
