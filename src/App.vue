<script setup>
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';

</script>

<template>
  <TheHeader/>
  <main>
    <RouterView/>  
  </main>
</template>

<style scoped>

</style>
