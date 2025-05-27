<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  pageName: {
    type: String,
    required: true
  }
})

const imageSrc = ref('') // Chemin de l'image

// Fonction pour mettre à jour l'image en fonction de la taille de l'écran
function updateImage() {
  const width = window.innerWidth

  let size = 'Desktop' // Par défaut
  if (width <= 640) {
    size = 'Mobile'
  } else if (width <= 1024) {
    size = 'Tablet'
  }

  imageSrc.value = `/src/assets/images/pages/${props.pageName}/${props.pageName}${size}.png`
}

onMounted(() => {
  updateImage()
  window.addEventListener('resize', updateImage)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateImage)
})
</script>

<template>
  <img
    :src="imageSrc"
    :alt="`${props.pageName} screenshot`"
    class="w-full h-auto object-cover"
  />
</template>
