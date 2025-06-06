<template>
  <div class="heroWrapper centered">

    <TheBackButton />
    <h1 class="pageTitleHero">1vs1 with <span>a friend</span></h1>

    <p class="pageDescriptionHero">
      The 1v1 with a Friend feature adds a fun and social dimension to the Breitling League. It allows players to
      challenge colleagues from their own boutique directly, choosing specific topics for the duel to focus on areas
      they want to improve. This personalized competition encourages teamwork and friendly rivalry, helping participants
      motivate each other to learn more effectively. By competing with familiar faces, players can sharpen their
      knowledge while earning valuable points toward their overall ranking.
    </p>
  </div>
  <div class="mainWrapper centered">
    <OpponentChoice v-model:isOpponentSelected="isOpponentSelected" v-if="!isOpponentSelected" />
    <ThemeChoice1vs1 v-if="isOpponentSelected && !isThemeSelected" v-model:isThemeSelected="isThemeSelected" />
    <BetChoice1vs1 v-if="isThemeSelected" />

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