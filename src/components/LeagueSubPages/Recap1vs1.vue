<template>
   <div class="heroWrapper centered">
    <TheBackButton />


    <h1 class="pageTitleHero">1vs1 with <span>{{props.opponent}}</span></h1>

    <p class="pageDescriptionHero">
     Welcome to the recap of your 1v1 duel with John Doe. This page summarizes all the important details from your recent match, including the number of points you wagered, the points you earned, and the specific quiz theme you competed on. Use this overview to analyze your performance, understand your strengths, and identify areas for improvement. Reviewing your duels helps you stay motivated and better prepared for future challenges as you climb the ranks in the Breitling League.
    </p>


  </div>

  <div class="mainWrapper centered">
    <!--Pass the opponent player to OpponnentPresentation -->
    <OpponnentPresentation :opponent="props.opponent" :you="rankingData[1]" />

    
    <TheButtonPrimary 
        :label-name="buttonLabel"
        @click="nextStep"
      ></TheButtonPrimary>
     </div>
    
</template>
<script setup>
import { defineProps}   from "vue";
import TheButtonPrimary from '@/components/TheButtonPrimary.vue';
import { rankingData } from "../../stores/globals";
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
 opponent: {
    type: Object,
    required: true
  },
  turnStatus: {
    type: String,
    default: "waiting"
  }
});

const buttonLabel = props.turnStatus === "Your Turn" ? "Play 1vs1" : "Back";

function nextStep() {
  props.turnStatus === "waiting"
    //Go to back
    ? router.back()
    //go to newQuizz with id of cuurent attempts etc
    : router.push({ name: "newQuizz" });
}
</script>
