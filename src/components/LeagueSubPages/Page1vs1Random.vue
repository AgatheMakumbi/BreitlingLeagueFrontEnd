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
    <OpponnentPresentation v-if="randomPlayer" :opponent="randomPlayer" :you="rankingData[1]" />

      <BetChoice1vs1 v-model:isBetSelected="isBetSelected" />

    <p class="errorMessages">{{ errorMessage }}</p>
    <TheButtonPrimary 
        label-name="Start"
        @click="nextStep"
      ></TheButtonPrimary>
     </div>
    
    
</template>
<script setup>
import { ref, onMounted, defineExpose,watch } from "vue";

import TheButtonPrimary from '@/components/TheButtonPrimary.vue';
import BetChoice1vs1 from "./BetChoice1vs1.vue";
import OpponnentPresentation from "../OpponentPresentation.vue";
import { rankingData } from '@/stores/globals.js';
import TheBackButton from "../TheBackButton.vue";
import { useRouter } from "vue-router";


const errorMessage = ref("");
const router = useRouter();
const isBetSelected = ref(null);
//pick random player from rankingData
const randomPlayer = ref(null);

watch(isBetSelected, updateErrorMessage);
function updateErrorMessage() {
  //When isBetSelected changes, remove the error message
  if (isBetSelected) {
    errorMessage.value = "";
  }
}
function pickRandomPlayer() {
  const players = rankingData;
  if (players.length > 0) {
    const randomIndex = Math.floor(Math.random() * players.length);
    randomPlayer.value = players[randomIndex];
  }
}

function nextStep(){
if(!isBetSelected.value){
      errorMessage.value = "Please select a valid bet amount (1000 to 10000).";
    return;
    }else{
      // navigation to the game page
      router.push({ name: 'quiz', query: { bet: isBetSelected.value } }) 
      console.log("Bet amount selected:", isBetSelected.value);
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