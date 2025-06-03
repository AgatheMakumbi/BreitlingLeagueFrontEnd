<template lang="">
   <!-- Composante button primary -->
      <div class="w-64 h-14 relative mt-6 ">
        <div
          class="w-64 h-14 p-2.5 left-0 top-0 absolute bg-yellow-500 inline-flex flex-col justify-center items-center gap-2.5 buttonAnimation"
        >
          <div
            data-state="Default"
            class="self-stretch px-3 py-2 rounded-lg inline-flex justify-center items-center gap-2"
          >
            <div
              class="justify-center  text-base font-normal font-['Italian_Plate_No2'] uppercase leading-none"
            >
              {{ props.labelName }}
            </div>
          </div>
        </div>
      </div>
</template>
<script setup>
const props = defineProps({
  labelName: {
    type: String,
    required: true
  }
})
</script>
<style >
    
</style>