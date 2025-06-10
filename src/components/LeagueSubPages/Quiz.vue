<template>
  <div class="quizWrapper centered">
    <TheBackButton />
    <h1 class="pageTitleHero">
      {{ question.number }} <span>/ {{ total }} </span>
    </h1>
    <!--Timer-->
    <h2 class="pageTitle2 mt-7 mb-3 force-white-text">03:20</h2>
    <p class="pageDescriptionHero">{{ question.label }} ?</p>
    <p v-if="question.feedback" class="pageDescriptionHeroY">
      The correct answer is the Premier collection. This collection takes its
      inspiration directly from Breitling’s iconic 1940s models such as the
      Premier, Duograph, and Datora. Known for its timeless elegance, the
      Premier line showcases a refined and classic design that pays tribute to
      the brand’s rich heritage. It beautifully combines vintage style with
      modern craftsmanship and technology, making it a perfect choice for those
      who appreciate sophistication and tradition in a contemporary watch. The
      Premier collection truly represents Breitling’s dedication to elegance and
      quality.
    </p>
    <div class="flex flex-col gap-4">
      <!--Boucle for pour afficher les choix-->
      
      <div class="w-80 h-20 p-5 bg-white inline-flex justify-start items-center hover:bg-yellow-500 "   v-for="choice in question.choices" :key="choice.code_id">
        <div class="justify-start text-black text-lg font-medium font-['Italian_Plate_No2'] leading-relaxed" @click="selectAnswer(choice)">
          {{ choice.code_id }} 
        </div>
      </div>
    </div>
    <div>
      <!-- Progress bar create component-->
      <p class="pageDescription force-white-text">progress bar</p>
    </div>
    
  </div>
</template>
<script setup>
import TheButtonPrimary from "@/components/TheButtonPrimary.vue";
import TheBackButton from "@/components/TheBackButton.vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  question: {
    type: Object,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["answer"]);

function selectAnswer(choice) {
  emit("answer", {
    questionId: props.question.id,
    answerId: choice.code_id,
  });
}
</script>
<style></style>
