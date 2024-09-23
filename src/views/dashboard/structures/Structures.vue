<template>
  <DashboardLayout 
      title="Toutes les structures" 
      subtitle="Faites le tour de toutes les structures."
      >
      <form @submit.prevent="searchInTeams" class="py-4">   
          <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Rechercher une structure</label>
          <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input v-model="search" type="search" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Valorant" />
              <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rechercher</button>
          </div>
        </form>
      <div class="flex flex-wrap flex-row gap-5 mt-2">
        <fwb-card
          v-for="(structure, key) in store.getters.getStructures"
          :key="key"
        >
          <div class="relative">
            <img :src="structure.banner" alt="" class="rounded-t relative">
            <img :src="structure.logo" alt="" class="rounded-full absolute bottom-2 left-2 max-w-28">
          </div>
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{structure.name}}
            </h5>
            <p>{{structure.teamRosters.length}} équipe(s) créée(s).</p>
            <div class="flex mb-3">
              <fwb-badge v-for="(tag, tagIndex) in structure.tags.slice(0, 3)" :key="tagIndex" type="dark">
                {{ tag.name }}
              </fwb-badge>
            </div>
            <fwb-button-group class="gap-2">
              <fwb-button :href="'/dashboard/structures/' + structure.id">Détails de la structure</fwb-button>
            </fwb-button-group>
          </div>
        </fwb-card>
      </div>
  </DashboardLayout>
</template>
<script setup>
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import { FwbCard, FwbButton, FwbButtonGroup, FwbBadge } from 'flowbite-vue'

defineComponent({
  name: 'StructuresPage'
})

const store = useStore()
store.dispatch('getAllPublicStructures')
store.dispatch('getStructureColumns')
store.dispatch('getAllPlayers')

let search = ref('')

function searchInTeams() {
  if (search.value === '') {
    store.dispatch('getAllPublicStructures')
  } else {
    store.dispatch('getAllStructuresByName', search.value)
  }
}
</script>