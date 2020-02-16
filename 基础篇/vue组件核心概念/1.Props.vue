<!--
 * @Author: your name
 * @Date: 2020-02-16 17:32:58
 * @LastEditTime: 2020-02-16 17:33:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\course-of-vue\基础篇\vue组件核心概念\1.Props.vue
 -->
<template>
    <!-- 不是插槽必须要写{{}} 此为模板语法-->
    <div>
        name:{{name}}
        <br/>
        type:{{type}}
        <br/>
        list:{{list}}
        <br/>
        isVisible:{{isVisible}}
        <br/>
        <button @click="handleClick">change type</button>
    </div>
</template>

<script>
export default {
    name: "PropsDemo",
    inheritAttrs:false,
    // props:['name','type','list','isVisible'],
    props:{
        name :String,
        type:{
            /* 自定义校验,去打造枚举 */
            validator: function(value){
                //这个值必须匹配下列字符中的一个
                return ["success","warning","danger"].includes(value);
            }
        },
        list:{
            type:Array,
            // 对象或数组默认值必须从一个工厂函数中获取
            default: ()=>{}
        },
        isVisible:{
            type:Boolean,
            default: false
        },
        // 最好不用onChange命名因为会与jsx产生冲突
        onChange:{
            type:Function,
            default: ()=>{}
        }
    },
    methods:{
        handleClick(){
            // 不要直接修改父级的属性,不要这么做不要这么做
            // this.type = "warning";
            //可以.还可以更好
            this.onChange(this.type === "success" ? "warning" : "success");
        }
    }
}
</script>

<style>

</style>
