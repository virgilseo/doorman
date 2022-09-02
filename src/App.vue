<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import LfoEffects from './components/LfoEffects/LfoEffects.vue'
import { onMounted } from 'vue'
import * as Tone from 'tone'

// Resume tone context on app mount to prevent auto play console warning
onMounted(() => {
  Tone.context.resume()
  console.log('test-pull')
})
</script>

<template>
  <img alt="Vue logo" class="logo" src="./assets/logo.png" />
  <LfoEffects msg="DOORMAN.[tone.js] | LFO Effects | Test[1]" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width: 5%;
}
</style>
