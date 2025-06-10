<template >
    <div v-if="allQuestions.length > 0">
    <Quiz
      :question="allQuestions[currentQuestionIndex]"
        :total="allQuestions.length"
      @answer="handleAnswer"
    />
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { apiUrl } from '../stores/globals.js';
import { getApiUsers } from '../stores/helpers.js';
import Quiz from '@/components/LeagueSubPages/Quiz.vue'; 
import router from '../Router';
const quizzId = ref(null); 
const quizzes = ref([]);
const allQuestions = ref([]);
const currentQuestionIndex = ref(0);


// This function processes the quizzes and extracts all questions into a flat list
function stageProgress(quizzes) {
    const list = [];
  for (let i = 0; i < quizzes.value.stages.length; i++) {
  
    const stage = quizzes.value.stages[i];
    //console.log("Rendering stage:", stage.code_id);
    //Iterate through the pools of the current stage
    for (let j = 0; j < stage.pools.length; j++) {
      const pool = stage.pools[j];
        
        //console.log("Rendering pool:", pool.code_id);
       //Iterete through the questions of the current pool 
      for (let k = 0; k < pool.questions.length; k++) {
        const question = pool.questions[k];
        //Create a quiz object
        const quiz = {
          id: question.code_id,
          number: list.length + 1, 
          label: question.label,
          choices: question.choices
          
        };
         list.push(quiz);
        console.log("Rendering quiz:", quiz);
        //console.log("Rendering quizz:", question.label);
        
        
      }
      /* //Check if the pool is completed
      if (pool.completed) {
        //If the pool is completed, increment the currentStage
        currentStage.value++; */
      }
    }
    allQuestions.value = list;
  }
  
// Fetch the quiz ID from the API and then fetch the quizzes using that ID
  async function fetchQuizzId () {
  try {
    const users = await getApiUsers();
    console.log("Fetching users:", users);
    const response = await axios.get(`${apiUrl}/quizzes/start-quiz`, {
      user_id: users[0].id 
    });
    console.log(response);
    quizzId.value = response.data; 
    console.log("quizzId fetched successfully:",  quizzId.value);
    fetchquizzes(quizzId.value);
  } catch (error) {
    console.error(error);
  }
}


// Fetch the quizzes using the quiz ID
async function fetchquizzes (quizzId) {
  try {
    const response = await axios.get(`${apiUrl}/quizzes/${quizzId}`);
    console.log(response);
    quizzes.value = response.data; // Update the ref value
    console.log("quizzes fetched successfully:", quizzes.value);
    stageProgress(quizzes);
  } catch (error) {
    console.error(error);
  }
}
// Handle the answer submission
async function handleAnswer(payload) {
    console.log("handleAnswer called with payload:", payload);
  try {
    await axios.post(`${apiUrl}/quizzes/9207/questions/${payload.questionId}/answer`);
    /* {
      question_id: payload.questionId,
      answer_id: payload.answerId
    } */

    // Aller à la question suivante
    if (currentQuestionIndex.value < allQuestions.value.length - 1) {
      currentQuestionIndex.value++;
    } else {
      // Fin du quiz
      router.push({ name: 'finishedquiz', query: { score: 100 } }); // Rediriger vers la page de fin du quiz
      
    }
  } catch (error) {
    console.error('Erreur lors de l’envoi de la réponse', error);
  }
}
fetchQuizzId();
//fetchquizzes();



</script>
<style>
    
</style>