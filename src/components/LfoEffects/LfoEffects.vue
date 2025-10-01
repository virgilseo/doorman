<script lang="ts" setup>
import { useLfoEffectsStore } from '../../stores/lfoEffectsStore'
import Effect from './LfoEffect.vue'
import * as Tone from 'tone'

defineProps<{ msg: string }>()

const { getEffects, signalSettings } = useLfoEffectsStore()

const playEffect = async (name: string, isPlaying: boolean) => {
  await Tone.start()

  getEffects
    .filter((eff) => eff.name === name)
    .map((ef) => {
      if (isPlaying) {
        ef.effect.frequency.value = ef.freq
        ef.effect.toDestination().start()
        ef.osc.connect(ef.effect)
        ef.osc.start()
      } else {
        ef.osc.stop()
      }
    })
}

const setFreq = (name: string, newVal: number) => {
  getEffects
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
        v-for="effect in getEffects"
        :key="effect.name"
        :effect="effect"
        @set-play="playEffect"
        @set-frequency="setFreq"
        @update-frequency="signalSettings"
      />
    </ul>
  </div>
</template>

<style type="css" scoped>
.container {
  width: 90%;
  margin: 0 auto;
  height: 80vh;
}

@media screen and (min-width: 768px) {
  .container {
    width: 60%;
  }
}

@media screen and (min-width: 1200px) {
  .container {
    width: 50%;
  }
}

a {
  color: #42b983;
}

h2 {
  text-align: center;
  padding: 40px 0;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  /* padding-bottom: 10%; */
}
</style>

<style src="@vueform/slider/themes/default.css"></style>
