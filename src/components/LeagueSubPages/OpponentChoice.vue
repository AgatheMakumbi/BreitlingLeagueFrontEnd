<template>
  <h1 class="pageTitle">Choose the opponent</h1>
  <p class="pageDescription">
    Select a colleague from your boutique below to challenge them in a 1v1 quiz duel. Compete on topics of your choice
    and test your knowledge in a friendly and motivating way. Use the table to find and pick your opponent quickly, then
    get ready to prove your skills and earn valuable points!
  </p>
  <!-- Liste scrollable toujours visible -->
  <ul class="border-3
    border-yellow-500 rounded-md max-h-64 w-[90%] overflow-y-auto shadow-sm bg-white divide-y">
      <li
        v-for="player in players.value"
        :key="player.id"
        @click="selectPlayer(player)"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
        :class="{ 'bg-yellow-500': modelValue?.id === player.id }"
      >
        <img :src="player.media" class="w-6 h-6 rounded-full object-cover" />
        <div class="flex flex-row justify-between w-full">
          <div class="text-sm font-medium">
             {{ player.nickname }}
          </div>
          <div class="text-sm text-black">
            {{ player.country }} - {{ player.total_score }} pts
          </div>
        </div>
      </li>
    </ul>
    <!-- {{modelValue}} -->
</template>
<script setup>
import axios from 'axios';
import { apiUrl } from '@/stores/globals';
import { ref, defineModel, onMounted, computed } from 'vue';

const players = ref([])
async function fetchBoutique(){
  const response = await axios.get(`${apiUrl}/users/1/group`);
    
     const array = response.data.data;
     players.value = computed(() => array.slice(1));

      console.log(players.value);

}


const modelValue = defineModel('isOpponentSelected')


function selectPlayer(player) {
  modelValue.value = player;
  
}


onMounted(fetchBoutique);
</script>
<style></style>