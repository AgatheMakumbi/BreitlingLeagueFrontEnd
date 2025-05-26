<script setup>
import { ref } from 'vue'
const greeting = ref('Breitleague!')
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: rgb(172, 20, 164);
  font-weight: bold;
}
</style>