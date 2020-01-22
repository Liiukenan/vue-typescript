<template>
  <div class="home">
    {{num}}
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <About message="Welcome to Your Vue.js App2"  @customClick="handleCustomClick"/>
  
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import About from "@/views/About.vue";
import { Component, Vue } from "vue-property-decorator";
  @Component({
    components:{
      HelloWorld,
      About
    }
  })
  export default class Home extends Vue {
    num:number=1;
    mounted(){
      const hello : string = "Hello4 World!"
      console.log(hello)
    }
    handleCustomClick(msg:number){
      this.num+=msg;
    }
  }
</script>
