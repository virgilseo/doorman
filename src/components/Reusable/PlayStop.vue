<script setup lang="ts">
defineProps({
  isPlaying: Boolean,
})
</script>

<template>
  <button type="button" name="button">
    <span v-if="!isPlaying" class="material-icons">play_arrow</span>
    <span v-else class="material-icons">stop</span>
  </button>
</template>

<style scoped>
button {
  color: white;
  background-color: #42b983;
  padding: 4px;
  border-radius: 3px;
  margin-top: 20px;
  cursor: pointer;
  font-weight: 600;
  border: none;
  width: 100%;
}

button:hover {
  background-color: #5dc596;
  transition: 0.5s ease-in;
  transition: 0.8s ease-out;
}
</style>
