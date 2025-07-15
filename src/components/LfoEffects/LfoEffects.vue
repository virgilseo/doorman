<script lang="ts" setup>
import { reactive } from 'vue'
import effects from './Effects.ts'
import Effect from './LfoEffect.vue'
import * as Tone from 'tone'
import { LfoEffect } from '../../types/types.ts'

defineProps<{ msg: string }>()

const lfoEffects = reactive([...effects]) as LfoEffect[]

const playEffect = async (name: string) => {
  await Tone.start()

  effects
    .filter((eff) => eff.name === name)
    .map((ef) => {
      if (!ef.playing) {
        ef.effect.toDestination().start()
        ef.osc.connect(ef.effect)
        ef.osc.start()
        togglePlay(ef.name)
      } else {
        ef.osc.stop()
        togglePlay(ef.name)
      }
    })
}

const togglePlay = (name: string) => {
  lfoEffects
    .filter((eff) => eff.name === name)
    .map((eff) => {
      eff.playing = !eff.playing
    })
}

const setFreq = (newVal: number, name: string) => {
  lfoEffects
    .find((ef) => ef.name === name)
    ?.effect.set({
      frequency: newVal,
    })
}
</script>

<template>
  <div class="container">
    <h2>{{ msg }}</h2>
    <ul class="list">
      <Effect
        v-for="effect in lfoEffects"
        :key="effect.name"
        :effect="effect"
        @set-play="playEffect"
        @set-frequency="setFreq"
      />
    </ul>
  </div>
</template>

<style type="css" scoped>
.container {
  width: 90%;
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  .container {
    width: 60%;
  }
}

@media screen and (min-width: 1200px) {
  .container {
    width: 30%;
  }
}

a {
  color: #42b983;
}

h4 {
  text-align: left;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  padding-bottom: 10%;
}
</style>

<style src="@vueform/slider/themes/default.css"></style>
