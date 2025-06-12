
<script setup>
import axios from 'axios';
import { ref, computed, onMounted, defineProps} from 'vue';
import { ArrowLeft } from 'lucide-vue-next';
import { ArrowRight } from 'lucide-vue-next';
import {rankingModeState} from '@/stores/globals';
import { apiUrl } from '@/stores/globals';


const players = ref([]);
const currentUser = ref();
async function fetchRanking(){
  const response = await axios.get(`${apiUrl}/users/ranking`);
     players.value  = response.data.data;
     
     // find the id of user with nickame "BreitlingSpecialistTest"
     currentUser.value = players.value.find(player => player.user.nickname === "BreitlingSpecialistTest");
    
}



 // Ensure data is loaded
 onMounted(fetchRanking)



const playersPerPage = 16
const currentPage = ref(1)

 const totalPages = computed(() =>
  //Math.ceil(rankingData.length / playersPerPage)
  Math.ceil(players.value.length / playersPerPage)
) 

const paginatedPlayers = computed(() => {
  const start = (currentPage.value - 1) * playersPerPage
  const end = start + playersPerPage
  return players.value.slice(start, end)
})

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}
</script>
<template>
   <!-- Ranking-->
      <div>
        <div class="flex justify-between items-center mb-4 lg:w-250 sm:w-100">
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
              :key="player.user.id + '-' + player.user.nickname"
              class="border-b"
              :class="{ 'bg-yellow-500': player.user.id  === currentUser.user.id }"
            >
              <td class="p-2">{{ player.rank }} </td>
              <td class="p-2">
                <img
                  :src="player.user.media"
                  alt="avatar"
                  class="w-5 h-5 rounded-full object-cover"
                />
              </td>
              <td class="p-2">{{ player.user.nickname }}</td>
               <td class="p-2">{{ player.user.country }}</td>
              <td class="p-2" >{{ player.total_score.toLocaleString() }}</td> 
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