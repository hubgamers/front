<template>
  <DashboardLayout title="Mes tournois" subtitle="Gérer l'ensemble de vos tournois.">
    <div v-if="store.getters.getMyTournaments.length > 0" class="flex flex-wrap flex-row gap-5 mt-10">
      <button class="info my-4">
        <RouterLink to="/dashboard/tournaments/create">Créer un tournoi</RouterLink>
      </button>
      <TournamentCardComponent v-for="(tournament, key) in store.getters.getMyTournaments" :key="key" :tournament="tournament" :link-one="'/dashboard/tournaments/' + tournament.id" link-one-text="Détails du tournoi" />
    </div>
    <div class="mt-10" v-else>
      <p class="pb-3">Aucun tournoi de crée.</p>
      <button class="info">
        <RouterLink to="/dashboard/tournaments/create">Créer un tournoi dès maintenant</RouterLink>
      </button>
    </div>

    <Topbar class="mt-20" title="Tournois publiques" subtitle="Vous pouvez rejoindre un tournoi parmi la liste" />
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
import Topbar from '@/views/dashboard/components/Topbar.vue'
defineComponent({
  name: 'TournamentsPage'
})

const store = useStore()
store.dispatch('getAllTournaments')
store.dispatch('getMyTournaments')
store.dispatch('getTournamentColumns')

let search = ref('');
function searchInTournaments() {
  console.log('search', search.value)
  if (search.value === '') {
    store.dispatch('getAllTournaments')
  } else {
    store.dispatch('getTournamentByName', search.value)
  }
}
</script>