<template>
   <div class="heroWrapper centered">
    <TheBackButton />


    <h1 class="pageTitleHero">1vs1 with <span>{{opponent.pseudo}}</span></h1>

    <p class="pageDescriptionHero">
     Welcome to the recap of your 1v1 duel with John Doe. This page summarizes all the important details from your recent match, including the number of points you wagered, the points you earned, and the specific quiz theme you competed on. Use this overview to analyze your performance, understand your strengths, and identify areas for improvement. Reviewing your duels helps you stay motivated and better prepared for future challenges as you climb the ranks in the Breitling League.
    </p>


  </div>

  <div class="mainWrapper centered">
    <div class="text-center justify-start text-Bleu text-2xl font-semibold font-['Italian_Plate_No2'] leading-9">{{ turnStatus }}</div>
    <!--Pass the opponent player to OpponnentPresentation -->
    <OpponnentPresentation :opponent="opponent" :you="rankingData[1]" />

    
    <TheButtonPrimary 
        :label-name="buttonLabel"
        @click="nextStep"
      ></TheButtonPrimary>
     </div>
    
</template>
<script setup>
import { computed}   from "vue";
import TheButtonPrimary from '@/components/TheButtonPrimary.vue';
import TheBackButton from "@/components/TheBackButton.vue";
import OpponnentPresentation from "@/components/OpponentPresentation.vue";
import { rankingData } from "@/stores/globals";
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();



const parsedData = computed(() => {
  try {
    return JSON.parse(decodeURIComponent(route.query.data));
  } catch (e) {
    console.error("Failed to parse route data:", e);
    return null;
  }
});

console.log("Parsed Data:", parsedData.value);

const opponent = computed(() => parsedData.value?.opponent || {});
const turnStatus = computed(() => parsedData.value?.turnStatus || "waiting");

const buttonLabel = turnStatus.value == "Your Turn" ? "Play 1vs1" : "Back";
console.log("Button Label:", buttonLabel);
function nextStep() {
  turnStatus.value === "Your Turn"
    //go to newQuizz with id of cuurent attempts etc
    ?  router.push({ name: "newQuizz" })
    //Go to back 
    : router.back();
}
</script>
