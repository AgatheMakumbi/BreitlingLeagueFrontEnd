<template >
   <div class="heroWrapper centered">
      <h1 class="pageTitleHero">1vs1 with <span>a random</span></h1>

      <p class="pageDescriptionHero">
        The 1v1 Random duel adds an exciting challenge by matching you with a random opponent from the league. This surprise element tests your knowledge against a variety of players, helping you sharpen your skills in a dynamic environment. You’ll face questions drawn from all available training topics, making each duel unique and unpredictable. Competing with different opponents pushes you to stay sharp and adapt quickly while earning points to improve your overall ranking.
        an exciting challenge by matching you with a random opponent from the league. This surprise element tests your knowledge against a variety of players, helping you sharpen your skills in a dynamic environment. You’ll face questions drawn from all available training topics, making each duel unique and unpredictable. Competing with different opponents pushes you to stay sharp and adapt quickly while earning points to improve your overall ranking.
        an exciting challenge by matching you with a random opponent from the league. This surprise element tests your knowledge against a variety of players, helping you sharpen your skills in a dynamic environment. You’ll face questions drawn from all available training topics, making each duel unique and unpredictable. Competing with different opponents pushes you to stay sharp and adapt quickly while earning points to improve your overall ranking.

      </p>

     
    </div>

     <div class="mainWrapper centered">
      <OpponnentPresentation/>
      <BetChoice1vs1/>
      <TheButtonPrimary label-name="start 1vs1" /> 
     </div>
    
    
</template>
<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import TheButtonPrimary from '@/components/TheButtonPrimary.vue';
import BetChoice1vs1 from "./BetChoice1vs1.vue";
import OpponnentPresentation from "../OpponentPresentation.vue";

</script>
<style >
    
</style>