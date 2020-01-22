<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  mounted(){
    const hello : string = "Hello World!"
    console.log(hello)
  }
  get myname():string{
    return 'myname is lilei';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
