<template >
   <!--Composante Competion Score-->
      <div class="competitionScoresWrapper" v-if="user1 && !user2">
        <div class="QScore">
          <div class="QTextWrapper">
            <div class="QScoreLabel">Quarter’s score</div>
          </div>
          <div class="QTextWrapper">
            <div class="QScoreValue">10’000 pts</div>
          </div>
        </div>
        <div class="QScore">
          <div class="QTextWrapper">
            <div class="QScoreLabel">Qualification’s score</div>
          </div>
          <div class="QTextWrapper">
            <div class="QScoreValue">35’579 pts</div>
          </div>
        </div>
      </div>
      <!-- Display user scores if both users are provided -->
      <div class="competitionScoresWrapper" v-if="user1 && user2">
        <div class="QScore">
          <div class="QTextWrapper">
            <div class="QScoreLabel">Quarter’s score</div>
          </div>
          <div class="QTextWrapper">
            <div class="QScoreValue">{{props.user1.score}} pts</div>
          </div>
        </div>
        <div class="QScore">
          <div class="QTextWrapper">
            <div class="QScoreLabel">Quarter’s score</div>
          </div>
          <div class="QTextWrapper">
            <div class="QScoreValue">{{props.user2.score}} pts</div>
          </div>
        </div>
      </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  user1: {
    type:Object,
    required: true,

  },
  user2: {
   type:Object,
    required: true,

  }
});

</script>
