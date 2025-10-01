<script lang="ts" setup>
import Slider from '@vueform/slider'
import PlayStop from '../Reusable/PlayStop.vue'
import type { LfoEffect } from '../../types/types'
import { ref } from 'vue'

const { effect } = defineProps<{ effect: LfoEffect }>()
const { name, min, max, freq } = effect
const isPlaying = ref(false)

const emit = defineEmits(['set-frequency', 'update-frequency', 'set-play'])

const togglePlay = () => {
  isPlaying.value = !isPlaying.value
  emit('set-play', name, isPlaying.value)
}
</script>

<template>
  <li>
    <h4 class="title">{{ name }}</h4>
    <Slider
      v-model="freq"
      :lazy="false"
      :min="min"
      :max="max"
      :step="0.02"
      :value="`${freq} hz`"
      class="slider"
      @update="emit('set-frequency', name, freq)"
      @end="emit('update-frequency', name, freq)"
    />
    <PlayStop :is-playing="isPlaying" @toggle-click="togglePlay" />
  </li>
</template>

<style type="css" scoped>
.title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 64px;
  text-align: left;
}

li {
  margin-bottom: 64px;
}

.slider {
  --slider-connect-bg: #ffa500;
  --slider-tooltip-bg: #1c0e00;
  --slider-handle-ring-color: #3b82f630;
  --slider-bg: #6b430040;
  --slider-handle-bg: #1c0e00;
  --slider-tooltip-color: #ffa500;
}
</style>
