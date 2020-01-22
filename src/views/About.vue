<template>
<div class="about">

</div>
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  @Component
  export default class HelloWorld extends Vue {
    mounted(){
      const hello : string = "Hello2 World!"
      console.log(hello)
    }
  }
</script>