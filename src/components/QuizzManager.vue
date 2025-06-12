<template>
  <div v-if="allQuestions.length > 0">
    <Quiz
      :question="allQuestions[currentQuestionIndex]"
      :total="allQuestions.length"
      :timeLeft="timeLeft"
      @answer="handleAnswer"
    />
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { apiUrl } from "@/stores/globals.js";
import { getApiUsers } from "@/stores/helpers.js";
import Quiz from "@/components/LeagueSubPages/Quiz.vue";
import router from "@/router.js";

const quizId = ref(null);
const quizzAttemptId = ref(null); 
const quizzes = ref([]);
const allQuestions = ref([]);
const currentQuestionIndex = ref(0);
// Timer variables
const timeLeft = ref(0); // en secondes
let timerInterval = null;
const quizFinished = ref(false); // état global


function startTimer() {
  timeLeft.value = allQuestions.value.length * 30; // 30 secondes par question
  timerInterval = setInterval(() => {
    timeLeft.value--;
    if (timeLeft.value <= 0) {
      clearInterval(timerInterval);
      quizFinished.value = true;
      // Tu peux aussi router vers la page de fin
      router.push({ name: 'finishedquiz' });
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
}

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
          choices: question.choices,
        };
        list.push(quiz);
        console.log("Rendering quiz:", quiz);
     
      }
     
    }
  }
  allQuestions.value = list;
  startTimer();
}

// Fetch the quiz ID from the API and then fetch the quizzes using that ID
async function fetchQuizzId() {
  const url = `${apiUrl}/quizzes/start-quiz`;
  const data = {
    user_id: 1, //temporary user ID
  };
  try {
    const response = await axios.post(url, data);
    console.log("Quizz ID fetched successfully:", response.data);
    quizzAttemptId.value = response.data.attempt_id; // Store the attempt ID
    quizId.value = response.data.quiz_id; // Store the quiz ID 
    fetchquizzes(response.data);

  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    }
  }
}



// Fetch the quizzes using the quiz ID
async function fetchquizzes(quizzId) {
  try {
    const response = await axios.get(`${apiUrl}/quizzes/${quizzId.quiz_id}`,);
    console.log(response);
    quizzes.value = response.data; // Update the ref value
    console.log("quizzes fetched successfully:", quizzes.value);
    stageProgress(quizzes);
  } catch (error) {
    console.error(error);
  }
}
// Handle the answer submission sur api/quizzes/{id_quiz}/questions/{id_question}/answer avec comme paramètres (attempt_id, selected_choices, order)
async function handleAnswer(payload) {
  console.log("handleAnswer called with payload:", payload);

  const url = `${apiUrl}/quizzes/${quizId.value}/questions/${payload.questionId}/answer`;
  const data = {
    attempt_id: quizzAttemptId.value, //temporary 
    selected_choices: [payload.answerId], 
    order: 1
  };
  try {
    const response = await axios.post(url, data);
    console.log("Answer posted successfully:", response.data);

    // Aller à la question suivante
    if (currentQuestionIndex.value < allQuestions.value.length - 1) {
      currentQuestionIndex.value++;
    } else {
      // Fin du quiz
      stopTimer(); 
      router.push({ name: "finishedquiz", query: { score: 100 } }); // Rediriger vers la page de fin du quiz avec le score et le timeleft
    }
  } catch (error) {
    console.error("Erreur lors de l’envoi de la réponse", error);
  }
}
fetchQuizzId();

</script>
<style></style>
