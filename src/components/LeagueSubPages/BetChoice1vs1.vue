<template>
  <h1 class="pageTitle">Choose your bet</h1>
  <p class="pageDescription">
    Choose the amount of points to wager for your 1v1 duel. Higher bets offer bigger rewards but also carry greater
    risk, adding a strategic element to the game. Make your choice wisely, then get ready to test your knowledge and
    compete for victory!
  </p>
  <!-- Composante 1vs1 BetChoice -->
  <div class="w-52 inline-flex flex-col justify-center items-center gap-2 mt-6 mb-6">
    <div class="w-36 flex flex-col justify-start items-center gap-2">
      <div class="justify-start text-gray-500 text-base font-normal font-['Italian_Plate_No2'] leading-snug">
        Winning bet
      </div>
    </div>
    <div class="inline-flex justify-start items-center gap-2">
      <div class="flex justify-start items-center gap-2">
        <div v-for="amount in betAmounts" :key="amount" @click="setBetAmount(amount)"
          class="h-12 p-2.5 bg-blue-700 flex justify-center items-center gap-2.5 cursor-pointer hover:bg-blue-600">
          <div
            class="text-center justify-start text-white text-lg font-medium font-['Italian_Plate_No2'] leading-relaxed">
            {{ amount.toLocaleString() }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-52 h-12 relative">
      <input v-model="selectedAmount" type="number"
        class="w-52 h-12 left-0 top-0 absolute bg-white border border-black px-2" />
    </div>
    <div
      class="w-20 h-8 text-center justify-center text-black text-lg font-medium font-['Italian_Plate_No2'] leading-relaxed">
      {{ selectedAmount }} points
    </div>
    <TheButtonPrimary
      label-name="START"

    />
  </div>
  
</template>
<script setup>
import { ref, watch } from 'vue';
import { selectedAmount } from '../../stores/globals'
import TheButtonPrimary from '../TheButtonPrimary.vue';

const emit = defineEmits(['update:isValid'])
const betAmounts = [1000, 3000, 10000]

const isValidAmount = (amount) => {
  return amount >= 1000 && amount <= 10000;
}
// Watch for changes in selectedAmount and emit validation state
watch(() => selectedAmount.value, (newAmount) => {
  emit('update:isValid', isValidAmount(newAmount))
})

const setBetAmount = (amount) => {
  selectedAmount.value = amount
}
</script>
<style></style>
