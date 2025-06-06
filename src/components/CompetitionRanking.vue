<template>

  <!-- Composante ranking -->
  <div class="mainWrapper centered">
    <h1 class="pageTitle">Ranking</h1>
    <p class="pageDescription">
      The ranking below shows the top players from your country by default. You can change the selection to view the
      rankings of other countries using the dropdown menu. This allows you to compare your performance with players from
      different regions and stay motivated.
    </p>
    <TheToggleMode option-one="Quarter" option-two="Qualification" class="mb-6" />
    <!-- Composante country filter -->
    <div class="w-full max-w-sm mx-auto">
      <label class="block text-gray-500 mb-1 text-sm">Select your country</label>
      <div class="relative">
        <select v-model="selectedCountry"
          class="w-full appearance-none border border-gray-300 rounded-md px-4 py-2 pr-10 bg-white text-black text-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option v-for="country in countries" :key="country" :value="country">
            {{ country }}
          </option>
        </select>
        <!-- Flèche droite -->
        <div class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <!-- Composante ranking -->
  <TheRanking />
</template>
<script setup>
import { ref } from 'vue';
import TheToggleMode from './TheToggleMode.vue';
import { rankingModeState } from '@/stores/globals';
import TheRanking from './TheRanking.vue';
// List of countries for the dropdown

const selectedCountry = ref("Switzerland");
const countries = [
  "Switzerland",
  "France",
  "Germany",
  "Italy",
  "Spain",
  "Portugal",
  "United Kingdom",
  "Ireland",
  "Netherlands",
  "Belgium",
  "Austria",
  "Norway",
  "Sweden",
  "Finland",
  "Denmark",
  "Poland",
  "Czech Republic",
  "Hungary",
  "Greece",
  "Turkey",
  "Romania",
  "South Korea",
  "Japan",
  "Canada",
];



</script>
