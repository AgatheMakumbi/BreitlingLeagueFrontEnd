<template>
    <div class="progressBarWrapper">
      <div class="circular-bar">
        <div class="percent">0%</div>
      </div>
      <label class="progressLabel">Novelties</label>
    </div>
</template>
<script setup>  
import { onMounted, ref } from "vue";
// javascript for circular progress bar
onMounted(() => {
  const circularBar = document.querySelector(".circular-bar");
  const percent = document.querySelector(".percent");

  const initialValue = ref(0); // Initial value for the progress
  const currentValue = ref(100);
  const speed = 10; // Adjust the speed of the progress

  //increase the value each 10ms then update the progress and text content
  const timer = setInterval(() => {
    initialValue.value++;
    //console.log(initialValue.value);

    const degree = (initialValue.value / 100) * 360;
    circularBar.style.background = `conic-gradient(#ffc72c ${degree}deg, #ffe08d 0deg)`;
    percent.textContent = `${initialValue.value}%`;

    if (initialValue.value >= currentValue.value) {
      clearInterval(timer);
    }
  }, speed);
});
</script>
