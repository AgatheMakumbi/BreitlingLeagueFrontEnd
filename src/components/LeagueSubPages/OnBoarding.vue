<template>
    <div class="heroWrapper centered">
        <h1 class="pageTitleHero">On <span>boarding</span></h1>

        <p class="pageDescriptionHero">
            Before entering the League, we invite you to watch the onboarding video. This short introduction gives you a
            clear overview of how the Breitling League works. It’s the perfect starting point to understand the rules
            and how to make the most of your experience. Watching it will ensure you’re fully prepared to dive in, start
            learning, and compete with confidence.
        </p>
    </div>
    <div class="centered">
        <img class="w-80 h-48 mt-[50px] lg:w-210 lg:h-115" src="/src/assets/videoimg.jpg" />
    </div>
    <div class="centered mt-[40px] mb-[77px]">
        <TheButtonPrimary label-name="league" />
    </div>


</template>
<script setup>
import TheButtonPrimary from '@/components/TheButtonPrimary.vue';
</script>
<style setup></style>