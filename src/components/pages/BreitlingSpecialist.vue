<script setup>
import { ref } from 'vue'
const greeting = ref('Spécialiste Breitling')
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: rgb(255, 0, 153);
  font-weight: bold;
}
</style>