<script setup>
import { ref, watch } from 'vue'
import * as Tone from 'tone'
import Slider from '@vueform/slider'
import PlayStop from '../components/Reusable/PlayStop.vue'

defineProps({
  msg: String
})

// Set innitial frequency
const freq = ref(2)
const filterFreq = ref(5)
const tremoloFreq = ref(4)
// Panner
const autoPanner = new Tone.AutoPanner(`${freq.value}`).toDestination()

autoPanner.set({
 depth: `${0.8}`
})

const pannerOscillator = new Tone.Oscillator().connect(autoPanner)

// Filter
// create an autofilter and start it's LFO
const autoFilter = new Tone.AutoFilter(`${filterFreq.value}`).toDestination()
// route an oscillator through the filter and start it
const autoOscillator = new Tone.Noise().connect(autoFilter)

// Tremolo
// create a tremolo and start it's LFO
const tremolo = new Tone.Tremolo(`${tremoloFreq.value}`, 0.75).toDestination()
// route an oscillator through the tremolo and start it
const tremoloOsc = new Tone.Oscillator().connect(tremolo)

// Signal play
const start = ref(false)
const filterStart = ref(false)
const tremeloStart = ref(false)

//Start tone
const playPanner = () => {
  // create an autopanner and start it
  if (start.value === false) {
    autoPanner.start();
    pannerOscillator.start()
    start.value = true
  } else {
    // route an oscillator through the panner and stopt it
    pannerOscillator.stop();
    start.value = false
  }
}

const playFilter = (effect, osc ) => {
  // create an autoFileter and start it
  if (filterStart.value === false) {
    effect.start();
    osc.start()
    filterStart.value = true
  } else {
    // route an oscillator through the panner and stopt it
    autoOscillator.stop();
    filterStart.value = false
  }
}
// Start Tremolo
const playTremolo = () => {
  // create an autoFileter and start it
  if (tremeloStart.value === false) {
    tremolo.start();
    tremoloOsc.start()
    tremeloStart.value = true
  } else {
    // route an oscillator through the panner and stopt it
    tremoloOsc.stop();
    tremeloStart.value = false
  }
}
// Watch the the freq var and update the autopanner freq on user input
watch(freq, (newVal) => {
    autoPanner.set({
     frequency: `${newVal}`
   })
})
// Update the FIlter freq on user input
watch(filterFreq, (newVal) => {
    autoFilter.set({
     frequency: `${newVal}`
   })
})
// Update the FIlter freq on user input
watch(tremoloFreq, (newVal) => {
    tremolo.set({
     frequency: `${newVal}`
   })
})
</script>

<template>
  <h2>{{ msg }}</h2>
  <section>
    <h4>Panner</h4>
    <p>{{ freq }} hz</p>
    <Slider
      :lazy="false"
      v-model="freq"
      :min="1"
      :max="14"
      :step="0.01"
      class="slider"
      :value="freq"
      />
    <PlayStop @click="playPanner" :start="start" />
  </section>
  <section>
    <h4>Filter:noise</h4>
    <p>{{ filterFreq }} hz</p>
    <Slider
      :lazy="false"
      v-model="filterFreq"
      :min="1"
      :max="14"
      :step="0.01"
      class="slider"
      :value="filterFreq"
      />
    <PlayStop @click="playFilter(autoFilter, autoOscillator)" :start="filterStart" />
  </section>
  <section>
    <h4>Tremolo</h4>
    <p>{{ tremoloFreq }} hz</p>
    <Slider
      :lazy="false"
      v-model="tremoloFreq"
      :min="1"
      :max="14"
      :step="0.01"
      class="slider"
      />
    <PlayStop @click="playTremolo" :start="tremeloStart" />
  </section>
</template>

<style scoped>
a {
  color: #42b983;
}

h4 {
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
.slider {
  width: 30%;
  margin-left: auto;
  margin-right: auto;
}
</style>

<style src="@vueform/slider/themes/default.css"></style>
