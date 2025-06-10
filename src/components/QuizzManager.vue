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
import Quiz from '@/components/LeagueSubPages/Quiz.vue'; 
import router from '../Router';
const quizzes = ref([]);
const allQuestions = ref([]);
const currentQuestionIndex = ref(0);

//Logique pour savoir sur quel stage on est

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
  




async function fetchquizzes () {
  try {
    const response = await axios.get('http://195.15.212.178/api/quizzes/9207');
    console.log(response);
    quizzes.value = response.data; // Update the ref value
    console.log("quizzes fetched successfully:", quizzes.value);
    stageProgress(quizzes);
  } catch (error) {
    console.error(error);
  }
}
async function handleAnswer(payload) {
    console.log("handleAnswer called with payload:", payload);
  try {
    await axios.post(`http://195.15.212.178/api/quizzes/9207/questions/${payload.questionId}/answer`);
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
fetchquizzes();



</script>
<style>
    
</style>