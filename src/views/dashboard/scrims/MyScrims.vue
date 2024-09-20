<template>
  <DashboardLayout 
      title="Mes scrims" 
      subtitle="Gérer l'ensemble de mes scrims."
      show-breadcrumb="true"
      :breadcrumb-list="[
        { name: 'Scrims', url: '/dashboard/scrims' }
      ]"
      >
    <div v-if="store.getters.getMyScrims.length > 0" class="flex flex-wrap flex-row gap-5 mt-10">
      <button class="info my-4">
        <RouterLink to="/dashboard/scrims/create">Créer une scrim</RouterLink>
      </button>
      <fwb-card v-for="(scrim, key) in store.getters.getMyScrims" :key="key" :href="'/dashboard/scrims/' + scrim.id">
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <template v-if="scrim.status === 'SEARCHING'">
              {{ scrim.teamRosterNameAlpha + ' (' + scrim.structureNameAlpha + ')' }}
              <fwb-badge type="yellow">Recherche</fwb-badge>
            </template>
          </h5>
          <div class="row justify-center items-center" v-if="scrim.status !== 'SEARCHING'">
            <div class="flex-1">
              <span>{{ scrim.teamRosterNameAlpha }}</span>
              <span>{{ scrim.structureNameAlpha }}</span>
            </div>
            <p class="flex-1 row justify-center items-center">VS</p>
            <div class="flex-1">
              <span>{{ scrim.teamRosterNameBeta }}</span>
              <span>{{ scrim.structureNameBeta }}</span>
            </div>
          </div>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {{scrim.platformName + ' - ' + scrim.gameName}}
          </p>
        </div>
      </fwb-card>
    </div>
    <div class="mt-10" v-else>
      <p class="pb-3">Aucune scrim de créée.</p>
      <button class="info">
        <RouterLink to="/dashboard/scrims/create">Créer une scrim dès maintenant</RouterLink>
      </button>
    </div>
  </DashboardLayout>
</template>
<script setup>
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import { FwbCard, FwbBadge } from 'flowbite-vue'
defineComponent({
  name: 'MyScrimsPage'
})

const store = useStore()
onMounted(() => {
  store.dispatch('getMyScrims')
})
</script>