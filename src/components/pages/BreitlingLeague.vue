<template>
  <section href="#home" class="home">
    <h1 class="pageTitle">Breitling League</h1>

    <p>
      The Breitling League is a competition that allows you to challenge your
      friends and other players in various challenges.
    </p>

    <TheProgressBar />

    <h1 class="pageTitle">Competition</h1>
    <p>
      The Breitling League is a competition that allows you to challenge your
      friends and other players in various challenges.
    </p>
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
