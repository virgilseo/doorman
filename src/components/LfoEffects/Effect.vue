<script setup>
import Slider from '@vueform/slider'
import PlayStop from '../Reusable/PlayStop.vue'
import { watch , computed, reactive} from 'vue'

const props = defineProps({
  effect: Object,
  play: Function,
  setFreq: Function
})

const freq = computed(() => {
  return props.effect.freq
})

watch(freq, (newVal) => {
  props.setFreq(newVal, props.effect.name)
})

</script>

<template>
  <li>
    <h4>{{ effect.name }}</h4>
    <p><span class="freq">{{ effect.freq }} </span>hz</p>
    <Slider
      :lazy="false"
      v-model="effect.freq"
      :min="effect.min"
      :max="effect.max"
      :step="0.02"
      class="slider"
      :value="effect.freq"
      />
    <PlayStop @click="play(effect.name)" :start="effect.playing" />
  </li>
</template>
