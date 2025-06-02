<template>
  <section href="#home" class="home centered">
    <div class="heroWrapper centered">
      <h1 class="pageTitleHero">Breitling <span>League</span></h1>

      <p class="pageDescriptionHero">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui
      </p>

      <TheProgressBar />
    </div>
    <div class="mainWrapper centered">
      <h1 class="pageTitle">Competition</h1>
      <p class="pageDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui
      </p>

      <!--Composante Competion Score-->
      <div class="competitionScoresWrapper">
        <div class="QScore">
          <div class="QTextWrapper">
            <div class="QScoreLabel">Quarter’s score</div>
          </div>
          <div class="QTextWrapper">
            <div class="QScoreValue">10’000 pts</div>
          </div>
        </div>
        <div class="QScore">
          <div class="QTextWrapper">
            <div class="QScoreLabel">Qualification’s score</div>
          </div>
          <div class="QTextWrapper">
            <div class="QScoreValue">35’579 pts</div>
          </div>
        </div>
      </div>

      <!--Composante game mode toggle-->
      <div class="gameModeWrapper">
        <div class="gameModeToggleWrapper">
          <div data-state="Active" class="gameModeToggleButton">
            <div class="gameModeToggleText">1 vs 1</div>
          </div>
        </div>
        <div class="gameModeToggleWrapper">
          <div data-state="Default" class="gameModeToggleButton">
            <div class="gameModeToggleText">quiz solo</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Composante 1vs1 -->
    <div class="mainWrapper centered">
      <h1 class="pageTitle">1VS1</h1>
      <p class="pageDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui
      </p>
      <div class="turnWrapper">
        <!--Label top-->
        <div class="w-80 p-2.5 inline-flex flex flex-row">
          <div
            class="justify-self-center items-self-center flex flex-col w-full"
          >
            <div class="turnLabel">Your turn</div>
          </div>
          <div class="right-0 absolute">
            <ArrowRight color="#757575" />
          </div>
        </div>
        <!--Group bottom-->
        <div class="relative">
          <!-- Yellow background -->
          <div class="absolute inset-0 bg-yellow-500 h-10 top-[25%]"></div>
          <div class="oponentWrapper relative">
            <div class="flex flex-col justify-center items-center">
              <div class="oponentAvatarWrapper"></div>
              <p class="oponentLabel">ChronoAce</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- <div>
        <ul>
        <li v-for="challenge in challenges" :key="challenge.id">
            {{ challenge.titre }} - {{ challenge.contenu }}
        </li>
        </ul>
    </div> -->
</template>

<script setup>
import { onMounted, ref } from "vue";
import TheProgressBar from "@/components/TheProgressBar.vue";
import { ArrowRight } from "lucide-vue-next";

const challenges = ref([]);

//fetch http://127.0.0.1:8000/api/challenges
// to get the challenges and display them in the template
// Fetch challenges and update the ref
const fetchChallenges = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/challenges");
    const data = await response.json();
    challenges.value = data; // Update the ref value
    console.log("Challenges fetched successfully:", challenges.value);
  } catch (error) {
    console.error("Error fetching challenges:", error);
  }
};

// Call the fetch function
//fetchChallenges();
</script>

<style></style>
