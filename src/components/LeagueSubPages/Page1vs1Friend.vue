<template>
  <div class="heroWrapper centered">
    <TheBackButton />
    <h1 class="pageTitleHero">
      1vs1 with
      <span>{{
        isOpponentSelected ? `${isOpponentSelected.pseudo}` : "a Friend"
      }}</span>
    </h1>

    <p class="pageDescriptionHero">
      The 1v1 with a Friend feature adds a fun and social dimension to the
      Breitling League. It allows players to challenge colleagues from their own
      boutique directly, choosing specific topics for the duel to focus on areas
      they want to improve. This personalized competition encourages teamwork
      and friendly rivalry, helping participants motivate each other to learn
      more effectively. By competing with familiar faces, players can sharpen
      their knowledge while earning valuable points toward their overall
      ranking.
    </p>
  </div>
  <div class="mainWrapper centered">
    <OpponentChoice
      v-if="step === 1"
      v-model:isOpponentSelected="isOpponentSelected"
    />

    <ThemeChoice1vs1
      v-if="step === 2"
      v-model:isThemeSelected="isThemeSelected"
    />

    <BetChoice1vs1 v-if="step === 3" v-model:isBetSelected="isBetSelected" />

    <p class="errorMessages">{{ errorMessage }}</p>
    <div class="flex justify-between mt-4 gap-3.5">
      <TheButtonTertiary
        label-name="Back"
        v-if="step > 1"
        @click="prevStep"
      ></TheButtonTertiary>

      <TheButtonTertiary
        v-if="step > 1"
        :label-name="buttonLabel"
        @click="nextStep"
      ></TheButtonTertiary>

      <!-- Show the primary button only on the first step -->
      <TheButtonPrimary
        v-if="step <= 1"
        :label-name="buttonLabel"
        @click="nextStep"
      ></TheButtonPrimary>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import TheBackButton from "@/components/TheBackButton.vue";
import OpponentChoice from "./OpponentChoice.vue";
import ThemeChoice1vs1 from "./ThemeChoice1vs1.vue";
import BetChoice1vs1 from "./BetChoice1vs1.vue";
import TheButtonPrimary from "@/components/TheButtonPrimary.vue";
import TheButtonTertiary from "../TheButtonTertiary.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const step = ref(1); // current step
const buttonLabel = step === 3 ? "Start" : "Next";

const errorMessage = ref("");

const isOpponentSelected = ref(false);
const isThemeSelected = ref(false);
const isBetSelected = ref(null);

// Watch for changes in isOpponentSelected, isThemeSelected, and isBetSelected
watch(isOpponentSelected, updateErrorMessage);
watch(isThemeSelected, updateErrorMessage);
watch(isBetSelected, updateErrorMessage);

function updateErrorMessage() {
  //When isOpponentSelected, isThemeSelected, or isBetSelected changes, remove the error message
  if (isOpponentSelected || isThemeSelected || isBetSelected) {
    errorMessage.value = "";
  }
}

function nextStep() {
  if (step.value === 1 && !isOpponentSelected.value) {
    errorMessage.value = "Please select an opponent first.";
    return;
  }

  if (step.value === 2 && !isThemeSelected.value) {
    errorMessage.value = "Please select a theme first.";
    return;
  }

  if (step.value === 3) {
    if (!isBetSelected.value) {
      errorMessage.value = "Please select a valid bet amount (1000 to 10000).";
      return;
    } else {
      // navigation to the game page
      const myData = {
        opponent: isOpponentSelected.value,
        Theme: isThemeSelected.value,
        Bet: isBetSelected.value,
      };
      console.log("data:", myData);
      try {
        router.push({
          name: "duel",
          query: { data: encodeURIComponent(JSON.stringify(myData)) },
        });
      } catch(err) {
          console.error('erreur')
      }
    }
  }

  errorMessage.value = "";
  /* console.log(
    "Step:",
    step.value,
    "Opponent:",
    isOpponentSelected.value,
    "Theme:",
    isThemeSelected.value,
    "Bet:",
    isBetSelected.value
  ); */

  step.value++;
}

function prevStep() {
  if (step.value > 1) {
    step.value--;
    errorMessage.value = "";
  }
}
</script>
<style></style>
