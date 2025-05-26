<script setup>
import { ref } from 'vue'
const greeting = ref('UserProfile!')
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: rgb(141, 145, 187);
  font-weight: bold;
}
</style>