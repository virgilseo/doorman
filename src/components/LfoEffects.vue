<script setup>
import { ref, watch } from 'vue'
import * as Tone from 'tone'
import Slider from '@vueform/slider'
import PlayStop from '../components/Reusable/PlayStop.vue'

defineProps({
  msg: String
})

const freq = ref(3.5)
const autoPanner = new Tone.AutoPanner(`${freq.value}`).toDestination()
const oscillator = new Tone.Oscillator().connect(autoPanner)

let playing = false
const start = ref(0)

defineExpose({
  playing,
  freq,
  start
})

//Start tone
const toggglePlay = () => {
  playing = !playing
  // create an autopanner and start it
  if (playing === true) {
    autoPanner.start();
    oscillator.start()
    start.value = 1
  } else {
    // route an oscillator through the panner and stopt it
    oscillator.stop();
    start.value = 0
  }
}
// Watch the the freq var and update the autopanner freq on user input
watch(freq, (newVal) => {
    autoPanner.set({
     frequency: `${newVal}`,
     depth: `${1}`
   })
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <section>
    <h3>Auto</h3>
    <p>{{ freq }} hz</p>
    <Slider
      :lazy="false"
      v-model="freq"
      :min="0"
      :max="17"
      :step="0.1"
      />
    <PlayStop @click="toggglePlay" :start="start" />
  </section>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

<style src="@vueform/slider/themes/default.css"></style>
