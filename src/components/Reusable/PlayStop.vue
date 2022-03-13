<script setup>

defineProps({
  start: Boolean
})

</script>

<template>
  <button type="button" name="button">
    <span class="material-icons" v-if="!start">play_arrow</span>
    <span class="material-icons" v-else>stop</span>
  </button>
</template>

<style scoped>
button {
  color: white;
  background-color: #42b983;
  width: 120px;
  padding: 4px;
  border-radius: 3px;
  margin-top: 20px;
  cursor: pointer;
  width: 30%;
  border: none;
  font-weight: 600;
  border: none;
}

button:hover:focus {
  background-color: #5dc596;
  transition: 0.5s ease-in;
  transition: 0.7s ease-out;
}
</style>
