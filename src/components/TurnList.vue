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
            
            <div v-for="player in players" class="flex flex-col justify-center items-center min-w-fit" @click="showDetails(player)">
              
              <img
                  :src="player.media"
                  alt="avatar"
                  class="oponentAvatarWrapper"
                />
              <p class="oponentLabel whitespace-nowrap">{{player.nickname}}</p>
            </div>
          </div>
        </div>
      </div>
</template>
<script setup>
import { onMounted, computed} from 'vue';
import { ArrowRight } from "lucide-vue-next";
import { useRouter } from 'vue-router';
import { usersList, fetchUsers } from '@/stores/globals';



 // Ensure data is loaded
 onMounted(fetchUsers)
 const players = computed(() => usersList.value.slice(1));
const router = useRouter();
const props = defineProps({
  listName: {
    type: String,
    required: true
  }
})

// Handle the click event to show player details
function showDetails(player) {
  // route to show detailed information
  const myData = {
    opponent: player,
    turnStatus: props.listName
  };
  console.log("data:", myData);
  router.push({ 
    name: 'recap', 
    query: { data: encodeURIComponent(JSON.stringify(myData))},

});

}
</script>
