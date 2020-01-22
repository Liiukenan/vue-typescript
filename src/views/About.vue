<template>
<div class="about">
  {{message | addword}}
  {{name}}
  {{lastName}}
  {{greet()}}
  {{message}}
  {{mes}}
  {{child}}
</div>
</template>
<script lang="ts">
  import { Component, Vue,Prop, Watch} from "vue-property-decorator";
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
    onChildChanged(){
      return '这是watch'
    }
  }
</script>