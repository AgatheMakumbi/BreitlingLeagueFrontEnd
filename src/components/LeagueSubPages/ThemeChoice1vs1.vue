<template lang="">

    <div class="mainWrapper centered">
        
      <h1 class="pageTitle">Choose your theme</h1>
      <p class="pageDescription">
        Pick a theme for your 1v1 duel to focus on specific product knowledge areas. This makes the competition more strategic and engaging. Choose from the available themes below and get ready to face your opponent with confidence!
      </p>
        <!-- Liste scrollable toujours visible -->
    <ul class="border border-gray-300 rounded-md max-h-64 w-[90%] overflow-y-auto shadow-sm bg-white divide-y">
      <li
        v-for="theme in themes"
        :key="theme.id"
        @click="selecttheme(theme)"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
        :class="{ 'bg-yellow-500': selectedTheme?.id === theme.id }"
      >
        
        <div class="flex flex-row justify-between w-full">
          <div class="text-sm font-medium">
             {{ theme.name }}
          </div>
          
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'



const selectedTheme = ref(null)

function selecttheme(theme) {
  selectedTheme.value = theme
}

const themes = [
  {
    id: 1,
    name: "history",
  },
  {
    id: 2,
    name: "inspiration",
  },
  {
    id: 3,
    name: "marketing",
  },
  {
    id: 4,
    name: "products presenting",
  },
  {
    id: 5,
    name: "products understanding",
  },
  {
    id: 6,
    name: "specialist what's new",
  },
  {
    id: 7,
    name: "From functionality to elegance",
  }

]
</script>
<style></style>