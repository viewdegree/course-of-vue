<!--
 * @Author: your name
 * @Date: 2020-02-19 22:42:51
 * @LastEditTime: 2020-02-20 09:08:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue.js终极开发教程\08组件之间的通信\component_contact\src\components\User.vue
 -->
<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <p>Name is {{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- 如果父组件向子组建传递的是静态的数据字符串,直接写name属性即可 -->
                <!-- <app-user-detail name="lion""></app-user-detail> -->
                <!-- 如果父组件向子组建传递的是动态的属性 vue的数据,需要绑定子控件props的数据即可 -->
                <!-- resetFn传递函数名或者函数体但是不执行,执行是在子控件 -->
                <app-user-detail 
                :myName="name" 
                @nameWasReset="name=$event"
                :resetFn="resetFn"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return{
                name: 'ViewDegree'
            }
        },
        methods:{
            changeName(){
                this.name = "ViewBook"
            },
            //回调函数体
            resetFn(){
                this.name = "ViewDegree"
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
