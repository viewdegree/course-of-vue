<!--
 * @Author: your name
 * @Date: 2020-02-16 20:00:44
 * @LastEditTime: 2020-02-16 20:00:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\course-of-vue\基础篇\vue组件核心概念\4.BigProps.vue
 -->
 <template>
     <div>
        {{name}}
        <br>
        <button @click="handleChange">change name</button>
        <br>
        <VNodes :vnodes="slotDefault">
        <br>
        <VNodes :vnodes="slotTitle">
        <br>
        <VNodes :vnodes="slotScopeItem({value:'vue'})">
     </div>
 </template>
 
 <script>
 export default {
     name: "BigProps",
    //  函数式组件
     components:{
         VNodes:{
             functional:true,
             render:(h,ctx)=>ctx.props.vnodes
         }
     },
     props:{
         name:String,
         onChange:{
             type:Function,
             default:()=>{}
         },
         slotDefault:Array,
         slotTitle: Array,
         slotScopeItem:{
             type: Function,
             default:()=>{}
         }
     },
     methods:{
         handleChange(){
             this.onChange("Hello vue!")
         }
     }
 }
//  课后习题:
/* 相同名名称的插槽是合并还是替换? */
 </script>
 
 <style>
 
 </style>
 
