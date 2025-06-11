<template>
    <div class="quizWrapper centered ">
        <h1 class="pageTitleHero">Finished <span>Quiz</span></h1>

        <p class="pageDescriptionHero">
            At the end of the quiz, you’ve tested your knowledge on the rich history of Breitling. This theme highlights
            the brand’s origins, iconic models, and its evolution over the decades. From its pioneering spirit in
            aviation watches to its elegant designs inspired by classic timepieces, understanding Breitling’s story
            deepens your appreciation of the craftsmanship and innovation behind each watch. Great job completing the
            quiz and expanding your expertise on this legendary brand! Keep exploring to become even more confident in
            sharing Breitling’s legacy.
        </p>
        <div class="force-white-text">
            <CompetitionUserScore /> <!--Modifier les scores pour dynamiques -->
        </div>
        <TheButtonPrimary label-name="End the quiz" @click="endQuizz"/>
    </div>
</template>
<script setup>
import CompetitionUserScore from "@/components/CompetitionUserScore.vue";
import TheButtonPrimary from "@/components/TheButtonPrimary.vue"

import { useRouter } from "vue-router";
const router = useRouter();
const endQuizz = () => {
    // navigation to the game page
    router.push({ name: "league" });
};
</script>
