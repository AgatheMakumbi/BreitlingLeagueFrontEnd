<template>
   
    <!-- Composante ranking -->
    <div class="mainWrapper centered">
      <h1 class="pageTitle">Ranking</h1>
      <p class="pageDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui
      </p>
      <!-- Composante country filter -->
      <div class="w-full max-w-sm mx-auto">
        <label class="block text-gray-500 mb-1 text-sm"
          >Select your country</label
        >
        <div class="relative">
          <select
            v-model="selectedCountry"
            class="w-full appearance-none border border-gray-300 rounded-md px-4 py-2 pr-10 bg-white text-black text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option
              v-for="country in countries"
              :key="country"
              :value="country"
            >
              {{ country }}
            </option>
          </select>
          <!-- Flèche droite -->
          <div
            class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
      <!-- Ranking-->
      <div>
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
              v-for="player in rankingData"
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
              <td class="p-2">{{ player.score.toLocaleString() }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
// List of countries for the dropdown
const selectedCountry = ref("Switzerland");
const countries = [
  "Switzerland",
  "France",
  "Germany",
  "Italy",
  "Spain",
  "Portugal",
  "United Kingdom",
  "Ireland",
  "Netherlands",
  "Belgium",
  "Austria",
  "Norway",
  "Sweden",
  "Finland",
  "Denmark",
  "Poland",
  "Czech Republic",
  "Hungary",
  "Greece",
  "Turkey",
  "Romania",
  "South Korea",
  "Japan",
  "Canada",
];
// Ranking data
const rankingData = [
  {
    rank: 1,
    avatar: "src/assets/images/avatar/1avatar.png",
    pseudo: "BouattitNi",
    country: "Suisse",
    score: 42702,
  },
  {
    rank: 1,
    avatar: "src/assets/images/avatar/2avatar.png",
    pseudo: "mathancay",
    country: "Suisse",
    score: 42702,
  },
  {
    rank: 3,
    avatar: "src/assets/images/avatar/3avatar.png",
    pseudo: "CineCook",
    country: "Switzerland",
    score: 42701,
  },
  {
    rank: 4,
    avatar: "src/assets/images/avatar/4avatar.png",
    pseudo: "Stanzie",
    country: "Switzerland",
    score: 42641,
  },
  {
    rank: 5,
    avatar: "src/assets/images/avatar/5avatar.png",
    pseudo: "mam1lou",
    country: "Suisse",
    score: 42636,
  },
  {
    rank: 6,
    avatar: "src/assets/images/avatar/6avatar.png",
    pseudo: "Vicoco",
    country: "Suisse",
    score: 42633,
  },
  {
    rank: 7,
    avatar: "src/assets/images/avatar/7avatar.png",
    pseudo: "Maxouille",
    country: "Suisse",
    score: 42623,
  },
  {
    rank: 8,
    avatar: "src/assets/images/avatar/8avatar.png",
    pseudo: "Princess MOON",
    country: "South Korea",
    score: 42552,
  },
  {
    rank: 9,
    avatar: "src/assets/images/avatar/9avatar.png",
    pseudo: "Ki Tam",
    country: "Macao",
    score: 42518,
  },
  {
    rank: 10,
    avatar: "src/assets/images/avatar/10avatar.png",
    pseudo: "gg.mak",
    country: "Suisse",
    score: 42490,
  },
  {
    rank: 11,
    avatar: "src/assets/images/avatar/11avatar.png",
    pseudo: "HSM",
    country: "South Korea",
    score: 42475,
  },
  {
    rank: 12,
    avatar: "src/assets/images/avatar/12avatar.png",
    pseudo: "슈퍼오션",
    country: "South Korea",
    score: 42441,
  },
  {
    rank: 13,
    avatar: "src/assets/images/avatar/13avatar.png",
    pseudo: "lea2001",
    country: "Suisse",
    score: 42433,
  },
  {
    rank: 14,
    avatar: "src/assets/images/avatar/14avatar.png",
    pseudo: "GeorgeM",
    country: "Romania",
    score: 42414,
  },
  {
    rank: 15,
    avatar: "src/assets/images/avatar/15avatar.png",
    pseudo: "math.ildee",
    country: "Suisse",
    score: 42409,
  },
  {
    rank: 16,
    avatar: "src/assets/images/avatar/16avatar.png",
    pseudo: "Halldór",
    country: "Iceland",
    score: 42398,
  },
];

</script>
