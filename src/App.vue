
<template>
  <HelloWorld msg="Vite + Vue" />

  <Button type="primary" @click="console.log('Hello')">Hello</Button>
  
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { Button } from '../packages'
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 20px;
}
</style>
