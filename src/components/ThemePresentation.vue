<template >
   <div class="flex flex-row justify-between items-center w-[80%] h-20 py-2.5 px-[5vw] lg:w-80">
        <div class="text-center justify-start text-gray-600 text-2xl font-['Italian_Plate_No2'] leading-loose">
            Theme
        </div>
        <div class="text-center justify-start text-bule-700 text-xl font-semibold font-['Italian_Plate_No2'] leading-loose">
            {{theme.name}}
        </div>
    </div>
</template>
<script setup>
import { themes } from '@/stores/globals';
import { pickRandom } from '@/stores/helpers';

const theme = pickRandom(themes);
</script>
<style >
    
</style>