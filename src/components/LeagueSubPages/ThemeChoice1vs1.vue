<template >
    
    
        
      <h1 class="pageTitle">Choose your theme</h1>
      <p class="pageDescription">
        Pick a theme for your 1v1 duel to focus on specific product knowledge areas. This makes the competition more strategic and engaging. Choose from the available themes below and get ready to face your opponent with confidence!
      </p>
        <!-- Liste scrollable toujours visible -->
    <ul class="border-3
    border-yellow-500 rounded-md max-h-64 w-[90%] overflow-y-auto shadow-sm bg-white divide-y">
      <li
        v-for="theme in themes"
        :key="theme.id"
        @click="selectTheme(theme)"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
        :class="{ 'bg-yellow-500': modelValue?.id === theme.id }"
      >
        
        <div class="flex flex-row justify-between w-full">
          <div class="text-sm font-medium">
             {{ theme.name }}
          </div>
          
        </div>
      </li>
    </ul>

    
      
   
    
</template>
<script setup>
import {ref, defineModel } from 'vue'
import { themes } from '../../stores/globals';


const modelValue = defineModel('isThemeSelected')


function selectTheme(theme) {
  modelValue.value = theme;
}


</script>
<style></style>