<template>
    <div class="heroWrapper centered" >
        <h1 class="pageTitleHero">Novelties</h1>

        <p class="pageDescriptionHero">
            To access the competition, you must first complete the novelties training. This ensures you’re up to date
            with the latest products before joining the quizzes and duels. Finishing this step is essential to start
            earning points and competing. Don’t miss this chance to prepare and secure your spot in the league!
        </p>

        <TheProgressBar />
        <div class="force-white-text">
            <CompetitionUserScore /> <!--Modifier les scores pour dynamiques -->
        </div>
    </div>
    <div class="centered">
        <img class="w-80 h-48 mt-[50px]" src="/src/assets/imgMontre.png" />
    </div>
    <div class="centered mt-[40px] mb-[77px]">
        <TheButtonPrimary label-name="league" />
    </div>
</template>

<script setup>
import TheProgressBar from "@/components/TheProgressBar.vue";
import CompetitionUserScore from "@/components/CompetitionUserScore.vue";
import TheButtonPrimary from '@/components/TheButtonPrimary.vue';
</script>
<style setup></style>