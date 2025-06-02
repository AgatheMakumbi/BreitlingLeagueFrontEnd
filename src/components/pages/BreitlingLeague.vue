<template>
  <section href="#home" class="home centered">
    <div class="learningWrapper centered">
      <h1 class="pageTitle">Breitling League</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      </p>

      <TheProgressBar />
    </div>
    <div class="competitionWrapper centered">
      <h1 class="pageTitle">Competition</h1>
    <p class="mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
    </p>

    <div class="competitionScore twoColums mt-6">
      <div class="quarterScore centered">
        <h2>Quarter’s score</h2>
        <p class="score">20’000 pts</p>
      </div>
      <div class="qualificationScorecentered ">
        <h2>Qualification’s score</h2>
        <p class="score">35’579 pts</p>
      </div>
    </div>
    <div class="twoColums mt-6">
      <a class="quarterScore centered">
        <h2>1 VS 1</h2>
        
      </a>
      <a class="qualificationScorecentered ">
        <h2>Quiz Solo</h2>
        
      </a>
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
