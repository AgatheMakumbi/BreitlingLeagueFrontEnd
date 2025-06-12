

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import Quiz from "@/components/LeagueSubPages/Quiz.vue";
import { apiUrl } from "../stores/globals.js";
import { pickRandom } from "../stores/helpers.js";
import { usersList, fetchUsers } from "../stores/globals.js";

const router = useRouter();
const route = useRoute();

const matchId = ref(null);
// get first user of usersList
const currentUser = ref(usersList.value[0]);
const activeUserId = ref(null);
const participants = ref([]);
const adversaryBet = 1000;
const quizCodeId = ref("");
const startingUserId = ref(null);

const matchData = ref(null);
const questions = ref([]);
const currentQuestionIndex = ref(0);
const allQuestions = ref();

// Timer
const timeLeft = ref(0);
let timerInterval = null;

//Getting quizz Id
async function fetchQuizzId() {
  try {
    const response = await axios.get(`${apiUrl}/quizzes`);
    quizCodeId.value = pickRandom(response.data).code_id;
    console.log(quizCodeId.value);
    startMatch();
  } catch (err) {
    console.error("Error starting match:", err);
  }
}

//Collecting user and bet points from Previous page
const parsedData = computed(() => {
  try {
    return JSON.parse(decodeURIComponent(route.query.data));
  } catch (e) {
    console.error("Failed to parse route data:", e);
    return null;
  }
});

console.log("Parsed Data:", parsedData.value);


// Initialise le match (POST /start-match)
async function startMatch() {
  const adversary = parsedData.value.opponent; // passé depuis la page précédente
  const betAmount = parseInt(parsedData.value.Bet);

  participants.value = [
    {
      user_id: adversary.id,
      points_bet: adversaryBet,
    },
    {
      user_id: currentUser.value.id,
      points_bet: betAmount,
    },
  ];

  //data for fetch
  const url = `${apiUrl}/quiz-matches/start-match`;
  const data = {
    quiz_code_id: String(quizCodeId.value),
    participants: participants.value,
  };
  try {
    const response = await axios.post(url, data);

    console.log(response);
    matchId.value = response.data.id;
    startingUserId.value = response.data.first_turn_user_id;

    await fetchMatchDetails();
  } catch (err) {
    console.error("Error starting match:", err);
  }
}

// Récupère toutes les données du duel (GET /quiz-matches/{id}/details)
async function fetchMatchDetails() {
  try {
    const { data } = await axios.get(
      `${apiUrl}/quiz-matches/${matchId.value}/details`
    );
    matchData.value = data;
    questions.value = matchData.value.questions;
    console.log(questions.value);
    allQuestions.value = questions.value.map((q, index) => ({
      id: q.code_id,
      number: index + 1,
      label: q.label,
      choices: q.choices,
    }));
    console.log(allQuestions.value.length);
    
  } catch (err) {
    console.error("Error fetching match details:", err);
  }
}

// Envoie la réponse (POST /quiz-matches/{matchId}/questions/{questionId}/answer)
async function handleAnswer({ payload }) {
  const questionId = payload.questionId;
  const selectedChoice = payload.answerId;

  const url = `${apiUrl}/quiz-matches/${quizMatchId}/questions/${questionId}/answer`;
  const data = {
    selected_choices: [selectedChoice],
    order: 1
  };

  try {
    await axios.post(url, data);
    console.log("Réponse envoyée pour duel 1vs1", data);

    // Aller à la prochaine question si disponible
    if (currentQuestionIndex.value < allQuestions.value.length - 1) {
      currentQuestionIndex.value++;
    } else {
      //  Fin des questions : rediriger vers la page Recap avec status "waiting"
      router.push({
        name: "recap1vs1",
        query: {
          data: encodeURIComponent(JSON.stringify({
            turnStatus: "waiting",
            opponent: participants[1]
          }))
        }
      });
    }
  } catch (err) {
    console.error("Erreur lors de l’envoi de la réponse:", err);
  }
}

onMounted(() => {
  fetchQuizzId();
  startMatch();
  fetchMatchDetails()
  fetchUsers();
});
</script>

<template>
  <div v-if="allQuestions.length > 0" >
    <Quiz
      :question="allQuestions[currentQuestionIndex]"
      :total="allQuestions.length"
      :timeLeft="null"
      @answer="handleAnswer"
    />
  </div>
</template>
