<template>
    <div class="flex flex-col justify-center items-center w-full h-full ">
    <ThemePresentation/>
  <div class="w-[80%] h-30 relative flex flex-row justify-center items-center gap-10">
    <div class="flex flex-col justify-center items-center">
      <img
        class="w-20 h-20 rounded-[100px] outline-2  inline-flex "
        src="/assets/avatar.png"
      />
      <div
        class=" text-black text-base font-medium text-lg font-['Italian_Plate_No2'] leading-normal p-2.5"
      >
        You
      </div>
    </div>
    <div
        class="text-center justify-start text-black text-2xl font-semibold font-['Italian_Plate_No2'] leading-loose"
      >
        VS
      </div>
      <div class="flex flex-col justify-center items-center">
      <img
        class="w-20 h-20 rounded-[100px] outline-2  inline-flex "
        :src="props.opponent.avatar ? props.opponent.avatar : '/assets/avatar.png'"
      />
      <div
        class=" text-black text-base font-medium text-lg font-['Italian_Plate_No2'] leading-normal p-2.5"
      >
        {{props.opponent.pseudo}} 
      </div>
    </div>
    
  </div>
   <CompetitionUserScore :user1="props.you" :user2="props.opponent"/>
   </div>
</template>
<script setup>
import { ref } from 'vue'
import CompetitionUserScore from './CompetitionUserScore.vue'
import ThemePresentation from './ThemePresentation.vue';


const props = defineProps({
  opponent: {
    type: Object,
    required: true,
    default: 'Opponent'
  },
  you: {
    type: Object,
    required: true,
    default: 'You'
  }
})
</script>
<style></style>
