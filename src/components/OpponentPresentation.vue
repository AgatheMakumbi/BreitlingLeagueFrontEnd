<template>
    <div class="flex flex-col justify-center items-center w-full h-full ">
    <div class="flex flex-row justify-between items-center w-[80%] h-20 py-2.5 px-[5vw]">
        <div class="text-center justify-start text-gray-600 text-2xl font-['Italian_Plate_No2'] leading-loose">
            Theme
        </div>
        <div class="text-center justify-start text-black text-2xl font-semibold font-['Italian_Plate_No2'] leading-loose">
            History
        </div>
    </div>
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
        src="/assets/avatar.png"
      />
      <div
        class=" text-black text-base font-medium text-lg font-['Italian_Plate_No2'] leading-normal p-2.5"
      >
        {{props.oponentPseudo}} 
      </div>
    </div>
    
  </div>
   <CompetitionUserScore/>
   </div>
</template>
<script setup>
import { ref } from 'vue'
import CompetitionUserScore from './CompetitionUserScore.vue'


const props = defineProps({
  oponentAvatar: {
    type: String,
    required: true
  },
  oponentPseudo: {
    type: String,
    required: true,
    default: 'Opponent'
  }
})
</script>
<style></style>
