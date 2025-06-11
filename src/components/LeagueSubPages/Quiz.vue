<template>
  <div class="quizWrapper centered">
    <TheBackButton />
    <h1 class="pageTitleHero">
      {{ question.number }} <span>/ {{ total }} </span>
    </h1>
    <!--Timer-->
    <h2 class="pageTitle2 mt-7 mb-3 force-white-text">{{ formattedTime }}</h2>
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

      <div
        class="w-[80vw] min-h-[5vh] p-5 bg-white inline-flex justify-start items-center hover:bg-yellow-500 cursor-pointer"
        v-for="choice in question.choices"
        :key="choice.code_id"
        @click="selectAnswer(choice)"
        :class="getChoiceClass(choice)"
      >
        <div
          class="justify-start text-black text-lg font-medium font-['Italian_Plate_No2'] leading-relaxed"
        >
          {{ choice.label }}
        </div>
      </div>
    </div>
    <div>
      <!-- Progress bar create component-->
      <div class="w-[80vw] bg-white rounded-full h-[1.5vh]">
        <div
          class="bg-yellow-500 h-[1.5vh] rounded-full transition-all duration-300"
          :style="{ width: `${progressPercentage}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import TheBackButton from "@/components/TheBackButton.vue";
import { defineProps, defineEmits, ref, computed } from "vue";
const selectedChoice = ref(null);
const showCorrect = ref(false);

const props = defineProps({
  question: {
    type: Object,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  timeLeft: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["answer"]);

function selectAnswer(choice) {
    selectedChoice.value = choice;
    showCorrect.value = true;

   //attendre 2 secondes avant de valider la réponse afin de laisser le temps à l’utilisateur de voir la réponse
  setTimeout(() => {
    selectedChoice.value = null;
    showCorrect.value = false;
    emit("answer", { 
    questionId: props.question.id,
    answerId: choice.code_id,
  });
  }, 3000); 
 
  
  
}

function getChoiceClass(choice) {
  if (!showCorrect.value) return "";

  if (choice.code_id === selectedChoice.value?.code_id) {
    return choice.is_correct
      ? "border-4 border-green-500"
      : "border-4 border-red-500";
  }

  // Révéler le bon choix même s’il n’a pas été cliqué
  if (choice.is_correct) {
    return "border-4 border-green-500";
  }

  return "opacity-60"; // griser les mauvais non sélectionnés
}

const formattedTime = computed(() => {
  const minutes = Math.floor(props.timeLeft / 60);
  const seconds = props.timeLeft % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
});

const progressPercentage = computed(() => {
  if (!props.question || !props.total) return 0;
  return Math.round((props.question.number / props.total) * 100);
});
</script>
<style></style>
