<template >
    <h1 class="pageTitle">Choose the opponent</h1>
      <p class="pageDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui
      </p>
        <!-- Liste scrollable toujours visible -->
    <ul class="border-3
    border-yellow-500 rounded-md max-h-64 w-[90%] overflow-y-auto shadow-sm bg-white divide-y">
      <li
        v-for="player in players"
        :key="player.rank"
        @click="selectPlayer(player)"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
        :class="{ 'bg-yellow-500': selectedOpponent?.rank === player.rank }"
      >
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
    <p class="errorMessages"></p>
    
    <TheButtonPrimary
      label-name="Next"
      @click="handleVerification"
    />
</template>
<script setup>
import { onMounted } from "vue"
import TheButtonPrimary from "../TheButtonPrimary.vue"
import { selectedOpponent } from '../../stores/globals'
import { verifySelection } from '@/stores/helpers.js'


// This will allow the component to receive props from the parent component
const props = defineProps({
  isOpponentSelected: {
    type: Boolean,
    required: true
  }
});

// This will allow the component to emit an event to update the parent component's state
const emit = defineEmits(['update:isOpponentSelected']);

const handleVerification = () => {
  verifySelection(selectedOpponent.value, emit, 'Please select an opponent first.')
}



function selectPlayer(player) {
  selectedOpponent.value = player;
  document.querySelector(".errorMessages").textContent = ""
}


onMounted(() => {
  document.querySelector(".errorMessages").textContent = ""
})

const players = [
  {
    rank: 1,
    avatar: "../src/assets/images/avatar/1avatar.png",
    pseudo: "BouattitNi",
    country: "Suisse",
    score: 42702,
  },
  {
    rank: 2,
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
<style >
    
</style>