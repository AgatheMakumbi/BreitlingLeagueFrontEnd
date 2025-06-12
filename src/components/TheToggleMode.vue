<template >
    <!--Composante game mode toggle-->
      <div class="gameModeWrapper">
        <div ref="toggleContainer">
        <!--on click on the button, change the data-state attribute-->
        <div @click="toggleMode" class="gameModeToggleWrapper ">
          <div data-state="Active" class="gameModeToggleButton toggleAnimation">
            <div class="gameModeToggleText">{{props.optionOne}}</div>
          </div>
        </div>
        <div @click="toggleMode" class="gameModeToggleWrapper ">
          <div data-state="Default" class="gameModeToggleButton toggleAnimation">
            <div class="gameModeToggleText"> {{props.optionTwo}}</div>
          </div>
        </div>
        </div>
      </div>
</template>
<script setup>
import { ref} from 'vue';
import { gameModeState, rankingModeState } from '@/stores/globals';

const toggleContainer = ref(null);

const props = defineProps({
    optionOne:{
        type:String,
        required:true
    },
    optionTwo:{
        type:String,
        requiresd:true
    }
})
// Function to toggle game mode
const toggleMode = (event) => {
  const wrapper = event.currentTarget;
  const button = wrapper.querySelector('.gameModeToggleButton');
  
  // Only select buttons within this instance of the component
  const allButtons = toggleContainer.value.querySelectorAll('.gameModeToggleButton');
  allButtons.forEach(btn => btn.setAttribute('data-state', 'Default'));
  
  button.setAttribute('data-state', 'Active');
  
  const buttonText = button.querySelector('.gameModeToggleText').textContent.trim();
  
  // Handle game mode toggle
  if (buttonText === '1vs1' || buttonText === 'Solo quizz') {
    gameModeState.value = buttonText;
  }
  
  // Handle ranking mode toggle
  if (buttonText === 'Quarter' || buttonText === 'Qualification') {
    rankingModeState.value = buttonText;
  }
}

</script>
