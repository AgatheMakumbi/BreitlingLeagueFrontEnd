<template >
    <div class="turnWrapper">
        <!--Label top-->
        <div class="w-[80vw] p-2.5 inline-flex flex flex-row">
          <div
            class="justify-self-center items-self-center flex flex-col w-full"
          >
            <div class="turnLabel">{{props.listName}}</div>
          </div>
          <div class="right-0 absolute">
            <ArrowRight color="#757575" />
          </div>
        </div>
        <!--Group bottom-->
        <div class="relative">
          <!-- Yellow background -->
          <div class="absolute inset-0 bg-yellow-500 h-10 top-[25%] w-full"></div>
          <div class="oponentWrapper relative flex flex-row justify-between items-center w-[80vw] overflow-hidden overflow-x-auto">
            
            <div v-for="player in rankingData" class="flex flex-col justify-center items-center min-w-fit" @click="showDetails(player)">
              
              <img
                  :src="player.avatar"
                  alt="avatar"
                  class="oponentAvatarWrapper"
                />
              <p class="oponentLabel whitespace-nowrap">{{player.pseudo}}</p>
            </div>
          </div>
        </div>
      </div>
</template>
<script setup>
import { ref } from 'vue';
import { ArrowRight } from "lucide-vue-next";
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  listName: {
    type: String,
    required: true
  }
})
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
];
// Handle the click event to show player details
function showDetails(player) {
  // route to show detailed information
  const myData = {
    opponent: player,
    opponent: props.listName
  };
  router.push({ name: 'recap', state: { myData} });

}
</script>
