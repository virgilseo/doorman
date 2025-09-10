<script setup lang="ts">
defineProps<{ isPlaying: boolean }>()

defineEmits(['toggle-click'])
</script>

<template>
  <button type="button" name="button" @click="$emit('toggle-click')">
    <span v-if="!isPlaying" class="material-icons">play_arrow</span>
    <span v-else class="material-icons">stop</span>
  </button>
</template>

<style scoped>
button {
  color: #1c0e00;
  background-color: #ffa500;
  padding: 4px;
  border-radius: 100px;
  margin-top: 20px;
  cursor: pointer;
  font-weight: 600;
  border: none;
  height: 32px;
  width: 32px;
  justify-content: center;
  align-items: center;
}

button:hover {
  transition: 0.5s ease-in;
  transition: 0.8s ease-out;
  color: #6b4300;
}
</style>
