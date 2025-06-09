<template>
    <div class="centered">
        <TheBackButton />
        
        <h1 class="pageTitleHero force-black-text mt-15">History</h1>
        <p class="mt-7 mx-10 lg:mx-30 text-justify">
            In this presentation, you will discover that although a brand’s reputation is typically built over several
            decades of its history, this is not always the case. For instance, Breitling is often recognized as a brand
            specializing in instruments designed specifically for aviation professionals. This image has indeed been the
            one we aimed to project so far, especially since the quartz crisis, which marked a pivotal moment in the
            brand’s evolution.</p><br>
        <p class="mt-7 mx-10 lg:mx-30 text-justify">
            The History module offers a comprehensive exploration of the brand and its diverse worlds throughout time.
            We will examine the brand’s story in broad strokes to help you understand the foundations and legitimacy of
            our current positioning, while also providing you with the knowledge to strengthen your sales pitch and
            better connect with customers.</p><br>
        <p class="mt-7 mx-10 lg:mx-30 text-justify">
            The journey began in 1884 with the founding of the brand by Léon Breitling, whose ambition was to create the
            most precise and reliable time measurement instruments available. This legacy of innovation and quality has
            been preserved and built upon for more than a century, continuing to this day.
            This section highlights the key figures who played a crucial role in making Breitling one of the most iconic
            and respected watch brands worldwide. The three generations of the founding family—Léon, Gaston, and
            Willy—shared a common mission: to develop the world’s finest chronograph. Their dedication and passion laid
            the groundwork for the brand’s enduring success and prestigious reputation in the watchmaking industry.
        </p>

<!-- Conteneur de la barre jaune -->
<div class="relative w-screen h-60 mt-8 mb-15">
  <!-- Barre jaune en pleine largeur -->
  <div class="absolute top-[53px] w-screen h-44 bg-yellow-500 lg:h-70 lg:mt-10"></div>

  <!-- Image centrée au-dessus -->
  <img
    class="w-4/5 sm:w-110 lg:w-180 h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
           shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
           lg:mt-30"
    src="/assets/imgMontre.png"
  />
</div>
<div class="max-w-5xl sm:mx-15 mx-15 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start lg:mx-[30px] mx-10 gap-6 lg:gap-16 my-10 lg:mt-65">

  <!-- Paragraphe -->
  <p class="text-center lg:text-left text-justify lg:w-150 mb-6 lg:mb-0">
    Building on this rich heritage, Breitling has continually pushed the boundaries of innovation and design.
    Each generation introduced new technologies and crafted timepieces that not only met the highest standards
    of precision but also reflected the evolving needs of professionals and enthusiasts alike. From pioneering
    aviator watches to sophisticated chronographs, the brand’s commitment to excellence has remained unwavering.
    Today, Breitling combines this tradition with modern innovation, ensuring that every watch carries forward
    the spirit of its founders while appealing to a new generation of wearers who value both performance and
    style. This ongoing evolution is what keeps Breitling at the forefront of the watchmaking world.
  </p>

  <!-- Images côte à côte -->
  <div class="relative w-80 h-36 lg:w-115 lg:h-auto">
    <img class="w-36 h-36 object-cover absolute left-0 top-0 lg:w-40 lg:h-40 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
         src="/assets/imgMontre2.jpg" />
    <img class="w-36 h-36 object-cover absolute left-[166px] top-0 lg:w-40 lg:h-40 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
         src="/assets/imgMontre3.jpg" />
  </div>

</div>


        <h2 class="pageTitle2 force-black-text mt-15 text-justify">year 1990 - 2000</h2>
        <p class="mt-7 mx-10 lg:mx-30 text-justify">
            Between 1990 and 2000, Breitling entered a crucial decade that would redefine its trajectory and solidify
            its reputation as a premier luxury watchmaker.
            After the upheaval caused by the quartz crisis in the 1970s and 1980s, Breitling faced the challenge of
            reconnecting with its roots in mechanical watchmaking while adapting to a rapidly changing market. This
            period was marked by a strategic return to the brand’s core strengths: precision chronographs, robust
            engineering, and a strong link to aviation heritage.
        </p><br>
        <p class="mt-7 mx-10 lg:mx-30 text-justify">
            Throughout the 1990s, Breitling focused heavily on innovation and craftsmanship. The brand invested in
            refining its mechanical movements, ensuring that each timepiece met the highest standards of accuracy and
            reliability. Several new models were launched, blending traditional watchmaking techniques with contemporary
            design elements that appealed to both long-time enthusiasts and new customers. This era also saw Breitling
            expanding its product range beyond professional aviation instruments to include elegant watches suitable for
            everyday wear, broadening its appeal.
            In addition to product innovation, Breitling made significant strides in global expansion.
        </p><br>
        <p class="mt-7 mx-10 lg:mx-30 text-justify">
            The brand increased its presence in key international markets, opening boutiques and strengthening
            partnerships with retailers worldwide.</p>
    </div>
    <div class="centered mt-10 mb-20">
        <TheButtonPrimary label-name="Mini Game" />
    </div>
</template>
<script setup>
import TheButtonPrimary from '@/components/TheButtonPrimary.vue';
import TheBackButton from '@/components/TheBackButton.vue';
</script>
<style setup></style>