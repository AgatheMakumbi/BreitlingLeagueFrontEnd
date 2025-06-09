
import { ref } from 'vue'
export const gameModeState = ref('1vs1') // Add state to track current gamemode
export const rankingModeState = ref('Quarter')
export const selectedAmount = ref('')
export const selectedOpponent = ref(null)
export const selectedTheme = ref(null)
export const selectedBet = ref(null)    
export const step = ref(1) // état courant

export const rankingData = [
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
    avatar: "/assetsassets/images/avatar/4avatar.png",
    pseudo: "Stanzie",
    country: "Switzerland",
    score: 42641,
  },
  {
    rank: 5,
    avatar: "/assetsassets/images/avatar/5avatar.png",
    pseudo: "mam1lou",
    country: "Suisse",
    score: 42636,
  },
  {
    rank: 6,
    avatar: "/assetsassets/images/avatar/6avatar.png",
    pseudo: "Vicoco",
    country: "Suisse",
    score: 42633,
  },
  {
    rank: 7,
    avatar: "/assetsassets/images/avatar/7avatar.png",
    pseudo: "Maxouille",
    country: "Suisse",
    score: 42623,
  },
  {
    rank: 8,
    avatar: "/assetsassets/images/avatar/8avatar.png",
    pseudo: "Princess MOON",
    country: "South Korea",
    score: 42552,
  },
  {
    rank: 9,
    avatar: "/assetsassets/images/avatar/9avatar.png",
    pseudo: "Ki Tam",
    country: "Macao",
    score: 42518,
  },
  {
    rank: 10,
    avatar: "/assetsassets/images/avatar/10avatar.png",
    pseudo: "gg.mak",
    country: "Suisse",
    score: 42490,
  },
  {
    rank: 11,
    avatar: "/assetsassets/images/avatar/11avatar.png",
    pseudo: "HSM",
    country: "South Korea",
    score: 42475,
  },
  {
    rank: 12,
    avatar: "/assetsassets/images/avatar/12avatar.png",
    pseudo: "슈퍼오션",
    country: "South Korea",
    score: 42441,
  },
  {
    rank: 13,
    avatar: "/assetsassets/images/avatar/13avatar.png",
    pseudo: "lea2001",
    country: "Suisse",
    score: 42433,
  },
  {
    rank: 14,
    avatar: "/assetsassets/images/avatar/14avatar.png",
    pseudo: "GeorgeM",
    country: "Romania",
    score: 42414,
  },
  {
    rank: 15,
    avatar: "/assetsassets/images/avatar/15avatar.png",
    pseudo: "math.ildee",
    country: "Suisse",
    score: 42409,
  },
  {
    rank: 16,
    avatar: "/assetsassets/images/avatar/16avatar.png",
    pseudo: "Halldór",
    country: "Iceland",
    score: 42398,
  },
  {
    rank: 17,
    avatar: "/assetsassets/images/avatar/17avatar.png",
    pseudo: "Léa",
    country: "Suisse",
    score: 42390,
  },
  {
    rank: 18,
    avatar: "/assetsassets/images/avatar/18avatar.png",
    pseudo: "Toto",
    country: "France",
    score: 42380,
  },
  {
    rank: 19,
    avatar: "/assetsassets/images/avatar/19avatar.png",
    pseudo: "JohnDoe",
    country: "USA",
    score: 42370,
  },
  {
    rank: 20,
    avatar: "/assetsassets/images/avatar/20avatar.png",
    pseudo: "JaneSmith",
    country: "Canada",
    score: 42360,
  },
  {
    rank: 21,
    avatar: "/assetsassets/images/avatar/21avatar.png",
    pseudo: "PlayerOne",
    country: "Germany",
    score: 42350,
  },
  {
    rank: 22,
    avatar: "/assetsassets/images/avatar/22avatar.png",
    pseudo: "GamerGirl",
    country: "UK",
    score: 42340,
  },
  {
    rank: 23,
    avatar: "/assetsassets/images/avatar/23avatar.png",
    pseudo: "Speedster",
    country: "Italy",
    score: 42330,
  },
  {
    rank: 24,
    avatar: "/assetsassets/images/avatar/24avatar.png",
    pseudo: "Challenger",
    country: "Spain",
    score: 42320,
  },
    {
        rank: 25,
        avatar: "/assetsassets/images/avatar/25avatar.png",
        pseudo: "ElitePlayer",
        country: "Portugal",
        score: 42310,
    },
    {
        rank: 26,
        avatar: "/assetsassets/images/avatar/26avatar.png",
        pseudo: "ProGamer",
        country: "Netherlands",
        score: 42300,
    },
    {
        rank: 27,
        avatar: "/assetsassets/images/avatar/27avatar.png",
        pseudo: "MasterMind",
        country: "Belgium",
        score: 42290,
    },
    {
        rank: 28,
        avatar: "/assetsassets/images/avatar/28avatar.png",
        pseudo: "GameChanger",
        country: "Austria",
        score: 42280,
    },

]

export const themes = [
  {
    id: 1,
    name: "History",
  },
  {
    id: 2,
    name: "Inspiration",
  },
  {
    id: 3,
    name: "Marketing",
  },
  {
    id: 4,
    name: "Products presenting",
  },
  {
    id: 5,
    name: "Products understanding",
  },
  {
    id: 6,
    name: "Specialist what's new",
  },
  {
    id: 7,
    name: "From functionality to elegance",
  }

]