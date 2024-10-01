<template>
  <DashboardLayout 
      title="Mes scrims" 
      subtitle="Gérer l'ensemble de mes scrims."
      show-breadcrumb="true"
      :breadcrumb-list="[
        { name: 'Scrims', url: '/dashboard/scrims' }
      ]"
      >
      <div class="flex flex-wrap flex-row gap-5 mt-2">
        <ScrimCardComponent v-if="!isLoading" :options="store.getters.getMyScrims" />
        <Loading v-else />
      </div>
  </DashboardLayout>
</template>
<script setup>
import { defineComponent, onBeforeMount, ref } from 'vue'
import { useStore } from 'vuex'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import ScrimCardComponent from '../components/ScrimCardComponent.vue';
import Loading from '../components/Loading.vue';
defineComponent({
  name: 'MyScrimsPage'
})

const store = useStore()
let isLoading = ref(true)
onBeforeMount(async () => {
  await store.dispatch('getMyScrims')
  isLoading.value = false
})
</script>