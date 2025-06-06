
<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';


const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// À remplacer dynamiquement selon l'utilisateur connecté
const userAvatar = '../assets/avatar.png'

</script>


<template>
  <header class="bg-[#ffc72c] w-full shadow z-50 top-0">
    
    <nav class="flex items-center justify-between px-4 py-3 md:px-8 h-16">
      <!-- Left side: logo + branding -->
      <div class="flex items-center space-x-4">
        <RouterLink to="/" class="flex items-center">
          <img src="../assets/animated-breitling-challenge.gif" alt="Breitling Challenge" class="h-10 hidden md:inline" />
          <img src="../assets/140.svg" alt="140 Years" class="h-10 ml-4 border-l border-black pl-4 hidden md:inline" />
        </RouterLink>
      </div>

      <!-- Center nav links (hidden on mobile) -->
      <div class="hidden md:flex items-center space-x-6 uppercase text-sm">
        <RouterLink to="/specialist-training"  class="hover:text-white "> Spécialiste Breitling</RouterLink>
        <RouterLink to="/training-resources" class="hover:text-white">Ressources de formation</RouterLink>
        <RouterLink to="/collection-tool" class="hover:text-white">Outil Collection</RouterLink>
        <RouterLink to="/140-years" class="hover:text-white">Scrolllytelling</RouterLink>
        <RouterLink to="/cup" class="hover:text-white">Breitling Cup</RouterLink>
        <RouterLink to="/league" class="hover:text-white"> Breitling League</RouterLink>
        
      </div>

      <!-- Right side: profile -->
      <div class="flex items-center space-x-2">
        <RouterLink to="/user-profile" class="hidden md:inline text-sm uppercase">Ma boutique</RouterLink>
        <img
          class="w-10 h-10 rounded-full"
          src="../assets/avatar.png"
          alt="avatar"
        />
        <!-- Mobile menu toggle (optional) -->
        <button @click="toggleMobileMenu" class="md:hidden ml-2 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile nav -->
    <div v-if="mobileMenuOpen" class="md:hidden px-4 pb-4 flex flex-col space-y-2 text-sm uppercase">
      <RouterLink to="/specialist-training" class="hover:text-white">Spécialiste Breitling</RouterLink>
      <RouterLink to="/training-resources" class="hover:text-white">Ressources de formation</RouterLink>
      <RouterLink to="/collection-tool" class="hover:text-white">Outil Collection</RouterLink>
      <RouterLink to="/140-years" class="hover:text-white">Scrolllytelling</RouterLink>
      <RouterLink to="/cup" class="hover:text-white">Breitling Cup</RouterLink>
      <RouterLink to="/league" class="hover:text-white">Breitling League</RouterLink>
    </div>
  </header> 
</template>