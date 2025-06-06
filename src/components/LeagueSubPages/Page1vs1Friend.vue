<template>
  <div class="heroWrapper centered">

    <TheBackButton />
    <h1 class="pageTitleHero">1vs1 with <span>a friend</span></h1>

    <p class="pageDescriptionHero">
      The 1v1 with a Friend feature adds a fun and social dimension to the Breitling League. It allows players to
      challenge colleagues from their own boutique directly, choosing specific topics for the duel to focus on areas
      they want to improve. This personalized competition encourages teamwork and friendly rivalry, helping participants
      motivate each other to learn more effectively. By competing with familiar faces, players can sharpen their
      knowledge while earning valuable points toward their overall ranking.
    </p>


  </div>
  <div class="mainWrapper centered">
    <h1 class="pageTitle">Choose the opponent</h1>
    <p class="pageDescription">
      Select a colleague from your boutique below to challenge them in a 1v1 quiz duel. Compete on topics of your choice
      and test your knowledge in a friendly and motivating way. Use the table to find and pick your opponent quickly,
      then get ready to prove your skills and earn valuable points!
    </p>
    <!-- Liste scrollable toujours visible -->
    <ul class="border border-gray-300 rounded-md max-h-64 w-[90%] overflow-y-auto shadow-sm bg-white divide-y">
      <li v-for="player in players" :key="player.rank" @click="selectPlayer(player)"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
        :class="{ 'bg-yellow-500': selectedOpponent?.rank === player.rank }">
        <img :src="player.avatar" class="w-6 h-6 rounded-full object-cover" />
        <div class="flex flex-row justify-between w-full">
          <div class="text-sm font-medium">
            {{ player.rank }}. {{ player.pseudo }}
          </div>
          <div class="text-xs text-gray-500">
            {{ player.country }} - {{ player.score }} pts
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import TheBackButton from '@/components/TheBackButton.vue'


const selectedOpponent = ref(null)

function selectPlayer(player) {
  selectedOpponent.value = player
}

const players = [
  {
    rank: 1,
    avatar: "../src/assets/images/avatar/1avatar.png",
    pseudo: "BouattitNi",
    country: "Suisse",
    score: 42702,
  },
  {
    rank: 1,
    avatar: "../src/assets/images/avatar/2avatar.png",
    pseudo: "mathancay",
    country: "Suisse",
    score: 42702,
  },
  {
    rank: 3,
    avatar: "../src/assets/images/avatar/3avatar.png",
    pseudo: "CineCook",
    country: "Switzerland",
    score: 42701,
  },
  {
    rank: 4,
    avatar: "../src/assets/images/avatar/4avatar.png",
    pseudo: "Stanzie",
    country: "Switzerland",
    score: 42641,
  },
  {
    rank: 5,
    avatar: "../src/assets/images/avatar/5avatar.png",
    pseudo: "mam1lou",
    country: "Suisse",
    score: 42636,
  },
  {
    rank: 6,
    avatar: "../src/assets/images/avatar/6avatar.png",
    pseudo: "Vicoco",
    country: "Suisse",
    score: 42633,
  },
  {
    rank: 7,
    avatar: "../src/assets/images/avatar/7avatar.png",
    pseudo: "Maxouille",
    country: "Suisse",
    score: 42623,
  },
  {
    rank: 8,
    avatar: "../src/assets/images/avatar/8avatar.png",
    pseudo: "Princess MOON",
    country: "South Korea",
    score: 42552,
  }
]

</script>
<style></style>