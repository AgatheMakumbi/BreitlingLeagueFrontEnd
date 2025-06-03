<template >
    <!-- Composante 1vs1 -->
    <div class="mainWrapper centered">
      <h1 class="pageTitle">1VS1</h1>
      <p class="pageDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui
      </p>
      <div class="turnWrapper">
        <!--Label top-->
        <div class="w-[80vw] p-2.5 inline-flex flex flex-row">
          <div
            class="justify-self-center items-self-center flex flex-col w-full"
          >
            <div class="turnLabel">Your turn</div>
          </div>
          <div class="right-0 absolute">
            <ArrowRight color="#757575" />
          </div>
        </div>
        <!--Group bottom-->
        <div class="relative">
          <!-- Yellow background -->
          <div class="absolute inset-0 bg-yellow-500 h-10 top-[25%]"></div>
          <div class="oponentWrapper relative">
            <div class="flex flex-col justify-center items-center">
              <div class="oponentAvatarWrapper"></div>
              <p class="oponentLabel">ChronoAce</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Composante button secondary -->
    <div class="flex flex-row gap-6 ">
      <div
        class="w-40 h-14 p-2.5 bg-yellow-500 inline-flex flex-col justify-center items-center gap-2.5"
      >
        <div
          class="self-stretch px-3 py-2 rounded-lg inline-flex justify-center items-center gap-2"
        >
          <div
            class="justify-center text-black text-base font-normal font-['Italian_Plate_No2'] uppercase leading-none"
          >
            new game with a friend
          </div>
        </div>
      </div>
      <div
        class="w-40 h-14 p-2.5 bg-yellow-500 inline-flex flex-col justify-center items-center gap-2.5"
      >
        <div
          class="self-stretch px-3 py-2 rounded-lg inline-flex justify-center items-center gap-2"
        >
          <div
            class="justify-center text-black text-base font-normal font-['Italian_Plate_No2'] uppercase leading-none"
          >
            new game with a random
          </div>
        </div>
      </div>
    </div>
    </div>
    
</template>
<script setup>
import { ref } from 'vue';
import { ArrowRight } from "lucide-vue-next";
</script>
<style >
    
</style>