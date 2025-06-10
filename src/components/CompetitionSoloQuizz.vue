<template>
  <!-- Composante quiz solo -->
  <div class="mainWrapper centered">
    <h1 class="pageTitle">Quiz Solo</h1>
    <p class="pageDescription">
      Solo quizzes are a fundamental component of the Breitling League, designed to help participants deepen their
      product knowledge through individual practice. Each quarter, players have the opportunity to complete up to 18
      quizzes, with each correct answer awarding valuable points that contribute to their overall score. The questions
      are carefully crafted based on the content covered in the mandatory training modules, ensuring that participants
      reinforce and retain the latest product information. This format allows players to learn at their own pace and
      revisit topics as needed, making it a flexible and accessible learning tool. Solo quizzes also encourage
      consistent engagement throughout the season, as each attempt provides a chance to improve scores and climb the
      leaderboard. By regularly participating in these quizzes, players can steadily build their expertise and increase
      their chances of qualifying for the final stages of the competition.
    </p>
    <TheButtonPrimary label-name="New solo quiz" @click="startQuizz"/>


  </div>
</template>
<script setup>
import TheButtonPrimary from './TheButtonPrimary.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const startQuizz = () => {
 // navigation to the game page
      router.push({ name: 'newQuizz'}) 
};
</script>
<style></style>