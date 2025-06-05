<template >
    
    
        
      <h1 class="pageTitle">Choose your theme</h1>
      <p class="pageDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui
      </p>
        <!-- Liste scrollable toujours visible -->
    <ul class="border-3
    border-yellow-500 rounded-md max-h-64 w-[90%] overflow-y-auto shadow-sm bg-white divide-y">
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

    <p class="errorMessages"></p>
   
      <TheButtonPrimary
        label-name="Next" 
        @click="handleVerification"
      />
    
</template>
<script setup>

//import TheButtonSecondary from '../TheButtonSecondary.vue'


import { selectedTheme } from '../../stores/globals'
import { verifySelection } from '@/stores/helpers.js'
import TheButtonPrimary from '../TheButtonPrimary.vue';

const emit = defineEmits(['update:isThemeSelected']);

// Add props to receive the state
const props = defineProps({
  isThemeSelected: {
    type: Boolean,
    required: true
  }
})



const handleVerification = () => {
  verifySelection(selectedTheme.value, emit,'Please select a theme first.')
}





function selecttheme(theme) {
  selectedTheme.value = theme;
  document.querySelector(".errorMessages").textContent = ""
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
<style >
    
</style>