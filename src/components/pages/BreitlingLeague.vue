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

      <CompetitionUserScore />

      <!--Composante game mode toggle-->
      <div class="gameModeWrapper">
        <!--on click on the button, change the data-state attribute-->
        <div @click="toggleMode" class="gameModeToggleWrapper">
          <div data-state="Active" class="gameModeToggleButton">
            <div class="gameModeToggleText">1vs1</div>
          </div>
        </div>
        <div @click="toggleMode" class="gameModeToggleWrapper">
          <div data-state="Default" class="gameModeToggleButton">
            <div class="gameModeToggleText">Solo quizz</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="gameModeContentWrapper">
      
      <Competition1vs1 v-if="gameModeState === '1vs1'" />
      <CompetitionSoloQuizz v-if="gameModeState === 'Solo quizz'" />
    </div>
    <CompetitionRanking />
    
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
import CompetitionUserScore from "@/components/CompetitionUserScore.vue";
import Competition1vs1 from "@/components/Competition1vs1.vue";
import CompetitionSoloQuizz from "@/components/CompetitionSoloQuizz.vue";
import CompetitionRanking from "@/components/CompetitionRanking.vue";



const challenges = ref([]);


const gameModeState = ref('1vs1') // Add state to track current gamemode


// Function to toggle game mode
const toggleMode = (event) => {
  const wrapper = event.currentTarget
  const button = wrapper.querySelector('.gameModeToggleButton')
  
  // Get all toggle buttons and reset their state
  const allButtons = document.querySelectorAll('.gameModeToggleButton')
  allButtons.forEach(btn => btn.setAttribute('data-state', 'Default'))
  
  // Set clicked button to active
  button.setAttribute('data-state', 'Active')
  
  // Update game mode state
  gameModeState.value = button.querySelector('.gameModeToggleText').textContent.trim()
  
}
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
