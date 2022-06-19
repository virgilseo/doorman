<script setup>
import { ref, reactive, watch , computed} from 'vue'
import * as Tone from 'tone'
import Slider from '@vueform/slider'
import PlayStop from '../Reusable/PlayStop.vue'
import effects from './Effects.js'

defineProps({
  msg: String
})

const lfoEffects = reactive(effects)
const pannerFreq = computed(() => {
  return lfoEffects[0].freq
})
const filterFreq = computed(() => {
  return lfoEffects[1].freq
})
const tremeloFreq = computed(() => {
  return lfoEffects[2].freq
})

const playEffect = (name) => {
  effects.filter((eff) => {
    return eff.name === name
  }).map((ef) => {
    if (!ef.playing) {
      ef.effect.start()
      ef.osc.connect(ef.effect).start()
      tooglePlay(ef.name)
    } else {
      ef.osc.connect(ef.effect).stop()
      tooglePlay(ef.name)
    }
  })
}

const tooglePlay = (name) => {
  lfoEffects.filter((eff) => {
    return eff.name === name
  }).map((eff) => {
    !eff.playing ? eff.playing = true : eff.playing = false
  })
}

// Watch frequencys and update the filters

watch(pannerFreq, (newVal) => {
     lfoEffects.filter((ef) => {
       return ef.name === 'Panner'
     }).map((ef) => {
       ef.effect.set({
         frequency: `${newVal}`,
         depth: `${newVal / 16}`
       })
     })
})

watch(filterFreq, (newVal) => {
     lfoEffects.filter((ef) => {
       return ef.name === 'Filter'
     }).map((ef) => {
       ef.effect.set({
         frequency: `${newVal}`,
         depth: `${newVal / 16}`
       })
     })
})

watch(tremeloFreq, (newVal) => {
     lfoEffects.filter((ef) => {
       return ef.name === 'Tremelo'
     }).map((ef) => {
       ef.effect.set({
         frequency: `${newVal}`,
         depth: `${newVal / 16}`
       })
     })
})
</script>

<template>
  <div class="">
    <h2>{{ msg }}</h2>
    <ul class="list">
      <li v-for="effect in lfoEffects"  :key="effect.name">
        <h4>{{ effect.name }}</h4>
        <p><span class="freq">{{ effect.freq }} </span>hz</p>
        <Slider
          :lazy="false"
          v-model="effect.freq"
          :min="effect.min"
          :max="effect.max"
          :step="0.01"
          class="slider"
          :value="effect.freq"
          />
        <PlayStop @click="playEffect(effect.name)" :start="effect.playing" />
      </li>
    </ul>
  </div>
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

.freq {
  width: 45px;
  text-align: center;
  display: inline-block;
  font-weight: 600;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

<style src="@vueform/slider/themes/default.css"></style>
