
<template>
  <HelloWorld msg="Vite + Vue" />

  <MsButton type="primary" @click="console.log('Hello')">Hello</MsButton>
  
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { MsButton } from '../packages'
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 20px;
}
</style>
