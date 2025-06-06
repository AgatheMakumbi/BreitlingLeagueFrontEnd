<template>
   <!-- Ranking-->
      <div>
        <div class="flex justify-between items-center mb-4">
          <h2 v-if="rankingModeState==='Quarter'" class="text-lg font-semibold">Quarter's Ranking</h2>
            <h2 v-if="rankingModeState==='Qualification'" class="text-lg font-semibold">Qualification's Ranking</h2>
        </div>
        <table class="table-auto w-full text-left border-collapse">
          <thead class="bg-gray-100 text-sm">
            <tr>
              <th class="p-2">#</th>
              <th class="p-2">Avatar</th>
              <th class="p-2">Pseudo</th>
              <th class="p-2">Pays</th>
              <th class="p-2">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="player in paginatedPlayers"
              :key="player.rank + '-' + player.pseudo"
              class="border-b"
            >
              <td class="p-2">{{ player.rank }}</td>
              <td class="p-2">
                <img
                  :src="player.avatar"
                  alt="avatar"
                  class="w-5 h-5 rounded-full object-cover"
                />
              </td>
              <td class="p-2">{{ player.pseudo }}</td>
              <td class="p-2">{{ player.country }}</td>
              <td class="p-2" >{{ player.score.toLocaleString() }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination controls -->
    <div class="mt-4 flex justify-center space-x-2 mb-60">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
      >
        <ArrowLeft />
      </button>
        
      <span class="px-3 py-1">Page {{ currentPage }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
      >
        <ArrowRight />
      </button>
    </div>
  
    
  
</template>
<script setup>
import { ref, computed} from 'vue';
import { ArrowLeft } from 'lucide-vue-next';
import { ArrowRight } from 'lucide-vue-next';
import {rankingModeState} from '@/stores/globals';

/* const getImageUrl = (name) => {
return new URL(`/assets/images/${name}.png`, import.meta.url).href;
}; */

// Ranking data
const rankingData = [
  {
    rank: 1,
    avatar: "/assets/images/avatar/1avatar.png",
    pseudo: "BouattitNi",
    country: "Suisse",
    score: 42702,
  },
  {
    rank: 1,
    avatar: "/assets/images/avatar/2avatar.png",
    pseudo: "mathancay",
    country: "Suisse",
    score: 42702,
  },
  {
    rank: 3,
    avatar: "/assets/images/avatar/3avatar.png",
    pseudo: "CineCook",
    country: "Switzerland",
    score: 42701,
  },
  {
    rank: 4,
    avatar: "/assets/images/avatar/4avatar.png",
    pseudo: "Stanzie",
    country: "Switzerland",
    score: 42641,
  },
  {
    rank: 5,
    avatar: "/assets/images/avatar/5avatar.png",
    pseudo: "mam1lou",
    country: "Suisse",
    score: 42636,
  },
  {
    rank: 6,
    avatar: "/assets/images/avatar/6avatar.png",
    pseudo: "Vicoco",
    country: "Suisse",
    score: 42633,
  },
  {
    rank: 7,
    avatar: "/assets/images/avatar/7avatar.png",
    pseudo: "Maxouille",
    country: "Suisse",
    score: 42623,
  },
  {
    rank: 8,
    avatar: "/assets/images/avatar/8avatar.png",
    pseudo: "Princess MOON",
    country: "South Korea",
    score: 42552,
  },
  {
    rank: 9,
    avatar: "/assets/images/avatar/9avatar.png",
    pseudo: "Ki Tam",
    country: "Macao",
    score: 42518,
  },
  {
    rank: 10,
    avatar: "/assets/images/avatar/10avatar.png",
    pseudo: "gg.mak",
    country: "Suisse",
    score: 42490,
  },
  {
    rank: 11,
    avatar: "/assets/images/avatar/11avatar.png",
    pseudo: "HSM",
    country: "South Korea",
    score: 42475,
  },
  {
    rank: 12,
    avatar: "/assets/images/avatar/12avatar.png",
    pseudo: "슈퍼오션",
    country: "South Korea",
    score: 42441,
  },
  {
    rank: 13,
    avatar: "/assets/images/avatar/13avatar.png",
    pseudo: "lea2001",
    country: "Suisse",
    score: 42433,
  },
  {
    rank: 14,
    avatar: "/assets/images/avatar/14avatar.png",
    pseudo: "GeorgeM",
    country: "Romania",
    score: 42414,
  },
  {
    rank: 15,
    avatar: "/assets/images/avatar/15avatar.png",
    pseudo: "math.ildee",
    country: "Suisse",
    score: 42409,
  },
  {
    rank: 16,
    avatar: "/assets/images/avatar/16avatar.png",
    pseudo: "Halldór",
    country: "Iceland",
    score: 42398,
  },
  {
    rank: 17,
    avatar: "/assets/images/avatar/17avatar.png",
    pseudo: "Léa",
    country: "Suisse",
    score: 42390,
  },
  {
    rank: 18,
    avatar: "/assets/images/avatar/18avatar.png",
    pseudo: "Toto",
    country: "France",
    score: 42380,
  },
  {
    rank: 19,
    avatar: "/assets/images/avatar/19avatar.png",
    pseudo: "JohnDoe",
    country: "USA",
    score: 42370,
  },
  {
    rank: 20,
    avatar: "/assets/images/avatar/20avatar.png",
    pseudo: "JaneSmith",
    country: "Canada",
    score: 42360,
  },
  {
    rank: 21,
    avatar: "/assets/images/avatar/21avatar.png",
    pseudo: "PlayerOne",
    country: "Germany",
    score: 42350,
  },
  {
    rank: 22,
    avatar: "/assets/images/avatar/22avatar.png",
    pseudo: "GamerGirl",
    country: "UK",
    score: 42340,
  },
  {
    rank: 23,
    avatar: "/assets/images/avatar/23avatar.png",
    pseudo: "Speedster",
    country: "Italy",
    score: 42330,
  },
  {
    rank: 24,
    avatar: "/assets/images/avatar/24avatar.png",
    pseudo: "Challenger",
    country: "Spain",
    score: 42320,
  },
    {
        rank: 25,
        avatar: "/assets/images/avatar/25avatar.png",
        pseudo: "ElitePlayer",
        country: "Portugal",
        score: 42310,
    },
    {
        rank: 26,
        avatar: "/assets/images/avatar/26avatar.png",
        pseudo: "ProGamer",
        country: "Netherlands",
        score: 42300,
    },
    {
        rank: 27,
        avatar: "/assets/images/avatar/27avatar.png",
        pseudo: "MasterMind",
        country: "Belgium",
        score: 42290,
    },
    {
        rank: 28,
        avatar: "/assets/images/avatar/28avatar.png",
        pseudo: "GameChanger",
        country: "Austria",
        score: 42280,
    },



];
const playersPerPage = 16
const currentPage = ref(1)

 const totalPages = computed(() =>
  Math.ceil(rankingData.length / playersPerPage)
) 

const paginatedPlayers = computed(() => {
  const start = (currentPage.value - 1) * playersPerPage
  const end = start + playersPerPage
  return rankingData.slice(start, end)
})

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}
</script>
