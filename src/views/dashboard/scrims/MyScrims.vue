<template>
  <DashboardLayout title="Mes scrims" subtitle="Gérer l'ensemble de vos scrims.">
    <div v-if="store.getters.getMyScrims.length > 0" class="flex flex-wrap flex-row gap-5 mt-10">
      <button class="info my-4">
        <RouterLink to="/dashboard/scrims/create">Créer une scrim</RouterLink>
      </button>
      <fwb-card v-for="(scrim, key) in store.getters.getMyScrims" :key="key" :href="'/dashboard/scrims/' + scrim.id">
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ scrim.teamRosterNameAlpha + ' (' + scrim.structureNameAlpha + ')' }}
            <template v-if="scrim.status === 'SEARCHING'">
              <fwb-badge type="yellow">Recherche</fwb-badge>
            </template>
            <template v-else>
              <fwb-badge type="blue">En attente</fwb-badge>
            </template>
          </h5>
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