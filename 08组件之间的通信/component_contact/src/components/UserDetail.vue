<!--
 * @Author: your name   
 * @Date: 2020-02-19 22:42:51
 * @LastEditTime: 2020-02-20 10:03:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\08组件之间的通信\component_contact\src\components\UserDetail.vue
 -->
<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{switchName()}}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="resetNameFn()">Reset Name By self event</button>
        <!-- 采用回调函数 -->
        <button @click="resetFn()">Reset Name By CallBAck Fuction</button>
        <button @click="resetAge1()">Reset Age By self event</button>
        <!-- 采用回调函数 -->
        <button @click="resetAgeFn()">Reset Age By CallBAck Fuction</button>
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
            myName:{
                type: String
            },
            // 传入了回调函数
            resetFn: Function,
            userAge: Number,
            resetAgeFn:Function
        },
        //因为子级不能直接修改父级的传入,这样不符合数据流就是reset方法不能直接 写
        // this.myName = 'Max';  this.$emit("nameWasReset", this.myName)
        methods:{
            switchName(){
                return this.myName.split("").reverse().join("");
            },
            resetNameFn(){
                this.resetName = 'ViewDegree' 
            },
            resetAge1(){
                this.resetAge = 18
            }
        },
        computed:{
            resetName:{
                //获取父组件传来的值myName并赋值为resetName,当resetName发生改变的时候自定义事件nameWasReset,再将改变的值传递给父组件,父组件要提前监听自定义事件,
                get(){
                    return this.myName
                },
                set(val){
                    return this.$emit("nameWasReset", val)
                }
            },
            resetAge:{
                //获取父组件传来的值myName并赋值为resetName,当resetName发生改变的时候自定义事件nameWasReset,再将改变的值传递给父组件,父组件要提前监听自定义事件,
                get(){
                    return this.userAge
                },
                set(val){
                    return this.$emit("ageWasReset", val)
                }
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
