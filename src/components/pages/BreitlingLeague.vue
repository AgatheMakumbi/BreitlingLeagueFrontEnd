<script setup>
import { ref } from 'vue'
const challenges = ref([])

//fetch http://127.0.0.1:8000/api/challenges 
// to get the challenges and display them in the template
// Fetch challenges and update the ref
const fetchChallenges = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/challenges')
    const data = await response.json()
    challenges.value = data // Update the ref value
    console.log('Challenges fetched successfully:', challenges.value)
  } catch (error) {
    console.error('Error fetching challenges:', error)
  }
}

// Call the fetch function
fetchChallenges()
</script>

<template>
  <p class="greetingBreitling">breitling League</p>
  
    <div>
        <ul>
        <li v-for="challenge in challenges" :key="challenge.id">
            {{ challenge.titre }} - {{ challenge.contenu }}
        </li>
        </ul>
    </div>
</template>

<style>
.greetingBreitling {
  color: rgb(255, 217, 0);
  font-weight: bold;
}
</style>        