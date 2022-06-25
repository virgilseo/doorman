<script setup>
import { reactive } from 'vue'
import effects from './Effects.js'
import Effect from './Effect.vue'

defineProps({
  msg: String
})

const lfoEffects = reactive(effects)

const playEffect = (name) => {
  effects.filter((eff) => {
    return eff.name === name
  }).map((ef) => {
    if (!ef.playing) {
      ef.effect.type = ef.wave
      ef.effect.connect(ef.limiter).start()
      ef.osc.connect(ef.effect).start()
      tooglePlay(ef.name)
    } else {
      ef.osc.stop()
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

const setFreq = (newVal, name) => {
  lfoEffects.filter((ef) => {
    return ef.name === name
  }).map((ef) => {
    ef.effect.set({
      frequency: `${newVal}`,
      depth: `${newVal / ef.max}`
    })
  })
}
</script>

<template>
  <div class="">
    <h2>{{ msg }}</h2>
    <ul class="list">
      <Effect
        v-for="effect in lfoEffects"
        :key="effect.name"
        :effect="effect"
        :play="playEffect"
        :setFreq="setFreq"
        />
    </ul>
  </div>
</template>

<style type="css">
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
