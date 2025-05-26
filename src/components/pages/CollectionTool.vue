<script setup>
import { ref } from 'vue'
const greeting = ref('Collection Tool!')
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: rgb(47, 226, 205);
  font-weight: bold;
}
</style>