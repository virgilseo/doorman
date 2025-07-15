<script lang="ts" setup>
import Slider from '@vueform/slider'
import PlayStop from '../Reusable/PlayStop.vue'
import { LfoEffect } from '../../types/types.ts'

const { effect } = defineProps<{ effect: LfoEffect }>()
const { name, min, max, freq } = effect

defineEmits(['set-frequency', 'set-play'])
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
      class="slider"
      :value="`${freq} hz`"
      @update="$emit('set-frequency', freq, name)"
    />
    <PlayStop :is-playing="effect.playing" @click="$emit('set-play', name)" />
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
</style>
