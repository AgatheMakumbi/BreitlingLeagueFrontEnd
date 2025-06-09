<template>
    <div class="heroWrapper centered">
        <h1 class="pageTitleHero">User <span>Profile</span></h1>
        <img class="w-43 h-43 lg:w-38 lg:h-38" src="/assets/UserProfileImg.png" />
        <h5 class="pageBio">Alex Martin</h5>
        <p class="pageDescriptionHero">
            Passionate about learning and always ready to take on new challenges, I believe growth comes from curiosity
            and perseverance.
        </p>
        <div class="w-80 inline-flex justify-between items-center">
            <div class="w-20 p-2.5 flex justify-center items-center gap-2.5">
                <div
                    class="w-20 text-center justify-start text-white text-2xl font-normal font-['Italian_Plate_No2'] leading-9">
                    PROFILE</div>
            </div>
            <div class="w-12 p-2.5 flex justify-center items-center gap-2.5">
                <div
                    class="w-20 text-center justify-start text-white text-2xl font-normal font-['Italian_Plate_No2'] uppercase leading-9">
                    Shop</div>
            </div>
            <div class="w-20 p-2.5 border-b-[3px] border-yellow-500 flex justify-center items-center gap-2.5">
                <div
                    class="w-20 text-center justify-start text-yellow-500 text-2xl font-bold font-['Italian_Plate_No2'] leading-9">
                    1 VS 1</div>
            </div>
            <div class="py-2.5 flex justify-center items-center gap-2.5 ">
                <div
                    class="text-center justify-start text-white text-2xl font-medium font-['Italian_Plate_No2'] leading-9">
                    MEDALS</div>
            </div>
        </div>
    </div>
    <div>
        <div class="mainWrapper centered">
            <h1 class="pageTitle">1VS1 ranking</h1>
            <TheToggleMode option-one="Friends" option-two="Random" />
            <TheRanking /> <!--changer le titre du ranking avec soit friends soit random-->
        </div>
    </div>

</template>
<script setup>
import TheToggleMode from '@/components/TheToggleMode.vue';
import TheRanking from "@/components/TheRanking.vue";
</script>
<style setup></style>