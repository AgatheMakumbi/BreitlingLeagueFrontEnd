<template>
  <!-- Composante 1vs1 -->
  <div class="mainWrapper centered">
    <h1 class="pageTitle">1VS1</h1>
    <p class="pageDescription">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui
    </p>
    <div class="space-y-6 mb-8 mt-6">
      <!-- Composante TurnList -->

      <TurnList list-name="Your Turn" />
      <TurnList list-name="Waiting" />
      <TurnList list-name="Finished" />
    </div>

    <!-- Composante button secondary -->
    <div class="flex flex-row gap-6">
      <RouterLink
        to="/league/friends-duels"
        class="w-40 h-14 p-2.5 bg-yellow-500 inline-flex flex-col justify-center items-center gap-2.5 buttonAnimation"
      >
        <div
          class="self-stretch px-3 py-2 rounded-lg inline-flex justify-center items-center gap-2"
        >
          <div
            class="justify-center text-base font-normal font-['Italian_Plate_No2'] uppercase leading-none"
          >
            new game with a friend
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/league/random-duels"
        class="w-40 h-14 p-2.5 bg-yellow-500 inline-flex flex-col justify-center items-center gap-2.5 buttonAnimation"
      >
        <div
          class="self-stretch px-3 py-2 rounded-lg inline-flex justify-center items-center gap-2"
        >
          <div
            class="justify-center  text-base font-normal font-['Italian_Plate_No2'] uppercase leading-none"
          >
            new game with a random
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import TurnList from "@/components/TurnList.vue";
import { Route, Router } from "lucide-vue-next";
</script>
<style></style>
