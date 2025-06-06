<template>
  <div class="heroWrapper centered">
    <TheBackButton />


    <h1 class="pageTitleHero">1vs1 with <span>a random</span></h1>

    <p class="pageDescriptionHero">
      The 1v1 Random duel adds an exciting challenge by matching you with a random opponent from the league. This
      surprise element tests your knowledge against a variety of players, helping you sharpen your skills in a dynamic
      environment. You’ll face questions drawn from all available training topics, making each duel unique and
      unpredictable. Competing with different opponents pushes you to stay sharp and adapt quickly while earning points
      to improve your overall ranking.
    </p>


  </div>

  <div class="mainWrapper centered">
    <!--Pass the random player to OpponnentPresentation -->

    <OpponnentPresentation v-if="randomPlayer" :oponent-avatar="randomPlayer.avatar"
      :oponent-pseudo="randomPlayer.pseudo" />

    <BetChoice1vs1 />
    <TheButtonPrimary label-name="start 1vs1" />
  </div>


</template>
<script setup>
import { ref, onMounted, defineExpose } from "vue";

import TheButtonPrimary from '@/components/TheButtonPrimary.vue';
import BetChoice1vs1 from "./BetChoice1vs1.vue";
import OpponnentPresentation from "../OpponentPresentation.vue";
import { rankingData } from '@/stores/globals.js';
import TheBackButton from "../TheBackButton.vue";

//pick random player from rankingData
const randomPlayer = ref(null);
function pickRandomPlayer() {
  const players = rankingData;
  if (players.length > 0) {
    const randomIndex = Math.floor(Math.random() * players.length);
    randomPlayer.value = players[randomIndex];
  }
}
onMounted(() => {
  pickRandomPlayer();
});
// Expose the random player to the template
defineExpose({
  randomPlayer
});
</script>
<style></style>