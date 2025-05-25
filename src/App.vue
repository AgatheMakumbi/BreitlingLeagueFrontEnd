<script setup>
import TheHeader from './components/TheHeader.vue';
import { currentPage } from '@/stores/route.js';
</script>

<template>
  <TheHeader></TheHeader>
  <main>
    <component :is="currentPage" />
  </main>
</template>

<style scoped>

</style>
