<template >
    <div class="flex items-center justify-start mb-6">
    <div class="z-50 px-3 py-2 absolute top-22 left-6 rounded-lg inline-flex justify-center items-center mb-2">

    
    <button
        v-if="isBackButtonVisible"
        :disabled="isBackButtonDisabled"
        class="flex items-center  text-white text-lg justify-center w-13 h-13 hover:bg-yellow-500 "
        @click="goBack"
    >
        <component :is="backButtonIcon" class="w-5 h-5 text-white hover:text-yellow-500" />
        <span v-if="!isBackButtonDisabled">{{ backButtonText }}</span>
    </button>
    </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'

import { ref, computed } from 'vue'

const router = useRouter()
const backButtonText = ref('Back')
const isBackButtonVisible = ref(true)
const isBackButtonDisabled = ref(false)
const backButtonIcon = computed(() => {
  return isBackButtonDisabled.value ? '' : ArrowLeft
})
function goBack() {
  if (!isBackButtonDisabled.value) {
    router.back()
  }
}
function setBackButtonText(text) {
  backButtonText.value = text
}
function setBackButtonVisibility(visible) {
  isBackButtonVisible.value = visible
}
function setBackButtonDisabled(disabled) {
  isBackButtonDisabled.value = disabled
}
defineExpose({
  goBack,
  setBackButtonText,
  setBackButtonVisibility,
  setBackButtonDisabled
})  
</script>
<style >
    
</style>