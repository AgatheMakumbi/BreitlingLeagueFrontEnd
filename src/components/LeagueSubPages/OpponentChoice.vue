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
        v-for="player in players"
        :key="player.id"
        @click="selectPlayer(player)"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
        :class="{ 'bg-yellow-500': modelValue?.id === player.id }"
      >
        <img :src="player.media" class="w-6 h-6 rounded-full object-cover" />
        <div class="flex flex-row justify-between w-full">
          <div class="text-sm font-medium">
            {{ player.id }}. {{ player.nickname }}
          </div>
          <div class="text-xs text-gray-500">
            {{ player.country }} - {{ player.score }} pts
          </div>
        </div>
      </li>
    </ul>
    <!-- {{modelValue}} -->
</template>
<script setup>
import { ref, defineModel, onMounted } from 'vue';
import { usersList, fetchUsers } from '../../stores/globals';

onMounted(fetchUsers)
const modelValue = defineModel('isOpponentSelected')


function selectPlayer(player) {
  modelValue.value = player;
  
}

const players = usersList.value;


</script>
<style></style>