<script setup>
import { ref } from 'vue'
const greeting = ref('Storytelling!')
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: rgb(61, 135, 72);
  font-weight: bold;
}
</style>