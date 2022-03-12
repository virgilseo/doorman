<script setup>

const props = defineProps({
  start:{
    type: Boolean,
    default: false
  }
})

</script>

<template>
  <button type="button" name="button">
    <span v-if="start">StopTtttt</span>
    <span v-else>Start</span>
  </button>
</template>

<style scoped>
button {
  color: white;
  background-color: #42b983;
  width: 120px;
  padding: 12px;
  border-radius: 6px;
  margin-top: 20px;
  cursor: pointer;
  width: 60%;
}
</style>
