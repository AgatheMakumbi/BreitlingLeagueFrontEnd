<template>
    <div class="quizWrapper centered">
        <TheBackButton />
        <h1 class="pageTitleHero mt-10">Memory <span>Mini Game</span></h1>

        <p class="pageDescriptionHero">
            At the end of the quiz, you’ve tested your knowledge on the rich history of Breitling. This theme highlights
            the brand’s origins, iconic models, and its evolution over the decades. From its pioneering spirit in
            aviation watches to its elegant designs inspired by classic timepieces, understanding Breitling’s story
            deepens your appreciation of the craftsmanship and innovation behind each watch. Great job completing the
            quiz and expanding your expertise on this legendary brand! Keep exploring to become even more confident in
            sharing Breitling’s legacy.
        </p>
        <p class="pageDescriptionHeroY">
            The Super Chronomat Automatic 38 Origins is easily recognizable by its bold 38 mm case, diamond-set bezel,
            and Rouleaux-style strap. Its mix of sportiness and elegance, along with sustainable materials like
            lab-grown diamonds and responsibly sourced gold, make it truly unique.
        </p>
        <div class="w-100 h-30 flex gap-[20px] mt-10 justify-center">
            <img class="w-40 h-40 object-cover shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                src="/src/assets/MemoryCard.png" />
            <img class="w-40 h-40 object-cover shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                src="/src/assets/MemoryCard.png" />
        </div>
        <div class="w-100 h-30 flex gap-[20px] mt-10 justify-center">
            <img class="w-40 h-40 object-cover shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                src="/src/assets/MemoryCard.png" />
            <img class="w-40 h-40 object-cover shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                src="/src/assets/MemoryCard.png" />
        </div>
        <div class="w-100 h-30 flex gap-[20px] mt-10 mb-15 justify-center">
            <img class="w-40 h-40 object-cover shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                src="/src/assets/MemoryCard.png" />
            <img class="w-40 h-40 object-cover shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                src="/src/assets/MemoryCard.png" />
        </div>
        <div class="centered mb-20">
            <TheButtonPrimary label-name="Next" />
        </div>
    </div>

</template>
<script setup>
import TheBackButton from '@/components/TheBackButton.vue';
import TheButtonPrimary from '@/components/TheButtonPrimary.vue';
</script>
<style setup></style>