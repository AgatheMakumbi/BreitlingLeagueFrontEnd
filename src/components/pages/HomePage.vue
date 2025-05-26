<script setup>
import { ref } from 'vue'
const greeting = ref('Homepage!')
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: rgb(0, 195, 255);
  font-weight: bold;
}
</style>