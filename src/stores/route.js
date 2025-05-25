import { computed, ref, shallowRef } from 'vue';
import BreitlingCup from '@/components/pages/BreitlingCup.vue';
import BreitlingSpecialist from '@/components/pages/BreitlingSpecialist.vue';

export const routes = [
  {
    anchor: 'cup',
    label: 'Breitling Cup',
    page: BreitlingCup,
    
  }, {
    anchor: 'specialist-training',
    label: 'Breitling Specialist',
    page: BreitlingSpecialist,
  }
];

export const defaultAnchor = 'specialist-training';
export const curAnchor = ref(defaultAnchor);
export const currentPage = computed(() => {
  return routes.find((route) => route.anchor === curAnchor.value)?.page || BreitlingSpecialist;
});