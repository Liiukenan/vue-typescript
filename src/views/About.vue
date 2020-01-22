<template>
<div class="about">
  {{message | addword}}
  {{name}}
  {{lastName}}
  {{greet()}}
  {{message}}
  {{mes}}
  <input v-model="child">
  {{result}}
  <button @click="handleClick">点击</button>
  
  
</div>
</template>
<script lang="ts">
  import { Component, Vue,Prop, Watch, Emit} from "vue-property-decorator";
  @Component({
    filters:({
      addword(value:string){
        return "world";
      }
    })
  })
  export default class HelloWorld extends Vue {
    // data值
    name:string="kenan";
    child:string="测试一下"
    result:string=""
    // 钩子
    mounted(){
      const hello : string = "Hello2 World!"
      console.log(hello);
    };
    // 计算属性
    get lastName(){
      return 'liu';
    };
    // 方法
    greet(){
        return "liyoucun"
    }
    @Prop({type:String})
    message:any
    @Prop({default:'没有东西了'})
    mes:any
    @Watch('child')
    onChangeValue(newV:string,oldV:string){
      // this.result=oldV+'dd';
      console.log(newV,oldV)
    }
    @Emit('customClick')
    handleClick(){
      // this.addToCount(1);
      // 相当于this.$eimt('addToCount',1)
      return 1;
    }
  }
</script>