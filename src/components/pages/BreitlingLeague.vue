<template>
  <section href="#home" class="home centered">
    <div class="heroWrapper centered">
      <h1 class="pageTitleHero">Breitling <span>League</span></h1>

      <p class="pageDescriptionHero">
        The Breitling League is a national championship that combines ongoing training and competition. You advance
        throughout the seasons by completing quizzes and duels. To participate, you must first complete the current
        product updates. Each quiz gives you a chance to stand out. At the end of the league, the top performers qualify
        for the prestigious Breitling Cup.
      </p>

      <TheProgressBar />
    </div>
    <div class="mainWrapper centered">
      <h1 class="pageTitle">Competition</h1>
      <p class="pageDescription">
        The Breitling League is a national digital competition running from April to November, divided into three
        quarters: Spring, Summer, and Fall. Each quarter begins with a mandatory training phase on new product updates,
        featuring interactive modules like videos, quizzes, and games. Once training is completed, participants earn
        points by completing solo quizzes and competing in 1v1 duels where they wager points on their knowledge. These
        engaging formats encourage continuous learning and friendly rivalry among participants. The competition is
        designed to reward both knowledge retention and strategic play. At the end of each quarter, an interim ranking
        is published, while the overall leaderboard totals points accumulated throughout the season. The top 16 sellers
        from each country at the end of the Fall quarter qualify for the Breitling Cup, the season’s final event. The
        league also includes a retroactive integration system for newcomers, allowing them to catch up on past training
        and quizzes to stay competitive.
      </p>

      <CompetitionUserScore />

      <TheToggleMode option-one="1vs1" option-two="Solo quizz" />
    </div>

    <div class="gameModeContentWrapper">

      <Competition1vs1 v-if="gameModeState === '1vs1'" />
      <CompetitionSoloQuizz v-if="gameModeState === 'Solo quizz'" />
    </div>
    <CompetitionRanking />

  </section>

   <div>
        <ul>
        <li v-for="challenge in challenges" :key="challenge.id">
            {{ challenge.titre }} - {{ challenge.contenu }}
        </li>
        </ul>
    </div> 
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from "vue";
import TheProgressBar from "@/components/TheProgressBar.vue";
import CompetitionUserScore from "@/components/CompetitionUserScore.vue";
import Competition1vs1 from "@/components/Competition1vs1.vue";
import CompetitionSoloQuizz from "@/components/CompetitionSoloQuizz.vue";
import CompetitionRanking from "@/components/CompetitionRanking.vue";
import { gameModeState } from '@/stores/globals';
import TheToggleMode from '@/components/TheToggleMode.vue';



const challenges = ref([]);



//fetch http://195.15.212.178/api/challenges
// to get the challenges and display them in the template
// Fetch challenges and update the ref
/* const fetchChallenges = async () => {
  try {
    const response = await fetch("http://195.15.212.178/api/challenges");
    const data = await response.json();
    challenges.value = data; // Update the ref value
    console.log("Challenges fetched successfully:", challenges.value);
  } catch (error) {
    console.error("Error fetching challenges:", error);
  }
}; */

// Use axios to fetch challenges from the API
async function fetchChallenges () {
  try {
    const response = await axios.get('http://195.15.212.178/api/challenges');
    console.log(response);
    challenges.value = response.data; // Update the ref value
  } catch (error) {
    console.error(error);
  }
}

// Call the fetch function
//fetchChallenges();
</script>

<style></style>
