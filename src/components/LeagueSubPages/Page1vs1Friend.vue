<template>
  <div class="heroWrapper centered">

    <TheBackButton />
    <h1 class="pageTitleHero">1vs1 with <span>a friend</span></h1>

    <p class="pageDescriptionHero">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui
    </p>
  </div>
  <div class="mainWrapper centered">
    <OpponentChoice
      v-model:isOpponentSelected="isOpponentSelected"
      v-if="!isOpponentSelected"
    />
    <ThemeChoice1vs1 v-if="isOpponentSelected && !isThemeSelected " v-model:isThemeSelected="isThemeSelected" />
    <BetChoice1vs1 v-if="isThemeSelected "/>

  </div>
</template>
<script setup>
import { ref } from "vue";
import TheBackButton from "@/components/TheBackButton.vue";
import OpponentChoice from "./OpponentChoice.vue";
import ThemeChoice1vs1 from "./ThemeChoice1vs1.vue";
import BetChoice1vs1 from "./BetChoice1vs1.vue";
const isOpponentSelected = ref(false);
const isThemeSelected = ref(false);
//const isBetSelected = ref(false);
</script>
<style></style>