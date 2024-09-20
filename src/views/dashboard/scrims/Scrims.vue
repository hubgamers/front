<template>
  <DashboardLayout title="Toutes les scrims" subtitle="Affrontez les équipes une à une.">
    <div class="flex flex-wrap justify-between mt-10">
      <div class="flex flex-col max-w-[300px] w-full">
        <input-text v-model:model-value="search" label="Recherche" placeholder="Rechercher une scrim" required />
        <button @click="searchInScrims" class="info">Rechercher</button>
      </div>
      <div class="flex flex-wrap flex-row gap-5 mt-2">
        <fwb-card v-for="(scrim, key) in store.getters.getScrims" :key="key" :href="'/dashboard/scrims/' + scrim.id">
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ scrim }}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </div>
        </fwb-card>
      </div>
    </div>
  </DashboardLayout>
</template>
<script setup>
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import InputText from '@/components/InputText.vue'
import { FwbCard } from 'flowbite-vue'

defineComponent({
  name: 'ScrimsPage'
})

const store = useStore()
store.dispatch('getAllScrims')
store.dispatch('getScrimsColumns')

let search = ref('');
function searchInScrims() {
  console.log('search', search.value)
  if (search.value === '') {
    store.dispatch('getAllScrims')
  } else {
    // TODO: recherche par nom de roster et jeu et plateforme
    // store.dispatch('getTournamentByName', search.value)
  }
}
</script>