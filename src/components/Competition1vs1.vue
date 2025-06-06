<template>
  <!-- Composante 1vs1 -->
  <div class="mainWrapper centered">
    <h1 class="pageTitle">1VS1</h1>
    <p class="pageDescription">
      The 1v1 quiz duels are a key competitive feature of the Breitling League where two players face off directly. Each
      participant wagers a certain number of points, ranging from 1,000 to 10,000, on their ability to answer questions
      correctly. The duel consists of answering the same set of questions, either in real-time or asynchronously within
      48 hours. The winner is determined by who has the most correct answers and the fastest average response time. The
      winner earns double the points they wagered, while the loser loses the points they risked. This system encourages
      strategic betting and adds an exciting layer of competition beyond solo quizzes. Players can be matched randomly
      or choose to compete against a colleague, even selecting specific topics for the duel. These duels help sharpen
      product knowledge under pressure and foster friendly rivalry among team members. Overall, the 1v1 format makes the
      learning experience more dynamic and engaging.
    </p>
    <div class="space-y-6 mb-8 mt-6">
      <!-- Composante TurnList -->

      <TurnList list-name="Your Turn" />
      <TurnList list-name="Waiting" />
      <TurnList list-name="Finished" />
    </div>

    <!-- Composante button secondary -->
    <div class="flex flex-row gap-6">
      <RouterLink to="/league/friends-duels"
        class="w-40 h-14 p-2.5 bg-yellow-500 inline-flex flex-col justify-center items-center gap-2.5 buttonAnimation">
        <div class="self-stretch px-3 py-2 rounded-lg inline-flex justify-center items-center gap-2">
          <div class="justify-center text-base font-normal font-['Italian_Plate_No2'] uppercase leading-none">
            new game with a friend
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/league/random-duels"
        class="w-40 h-14 p-2.5 bg-yellow-500 inline-flex flex-col justify-center items-center gap-2.5 buttonAnimation">
        <div class="self-stretch px-3 py-2 rounded-lg inline-flex justify-center items-center gap-2">
          <div class="justify-center  text-base font-normal font-['Italian_Plate_No2'] uppercase leading-none">
            new game with a random
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import TurnList from "@/components/TurnList.vue";
import { Route, Router } from "lucide-vue-next";
</script>
<style></style>
