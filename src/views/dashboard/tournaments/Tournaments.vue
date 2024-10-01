<template>
  <DashboardLayout title="Tous les tournois" subtitle="Participez aux tournois sur la plateforme.">
    <div class="flex flex-wrap justify-between mt-10">
      <div class="flex flex-col max-w-[300px] w-full">
        <input-text v-model:model-value="search" label="Recherche" placeholder="Rechercher un tournoi" required />
        <button @click="searchInTournaments" class="info">Rechercher</button>
      </div>
      <div class="flex flex-wrap flex-row gap-5 mt-2">
        <TournamentCardComponent v-for="(tournament, key) in store.getters.getTournaments" :key="key" :tournament="tournament" :link-one="'/dashboard/tournaments/' + tournament.id" link-one-text="Détails du tournoi" btn-modal-text="Rejoindre le tournoi" @modal="openJoinModal(tournament.id)" />
      </div>
    </div>
  </DashboardLayout>
</template>
<script setup>
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import TournamentCardComponent from '@/views/dashboard/components/TournamentCardComponent.vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import InputText from '@/components/InputText.vue'
defineComponent({
  name: 'TournamentsPage'
})

const store = useStore()
store.dispatch('getAllTournaments')
store.dispatch('getTournamentColumns')

let search = ref('');
function searchInTournaments() {
  if (search.value === '') {
    store.dispatch('getAllTournaments')
  } else {
    store.dispatch('getTournamentByName', search.value)
  }
}
</script>