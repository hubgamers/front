<template>
  <div class="py-5 px-5">
    <Topbar title="Mes tournois" subtitle="Gérer l'ensemble de vos tournois." />
    <div v-if="store.getters.getMyTournaments.length > 0" class="flex flex-wrap flex-row gap-5 mt-10">
      <button class="info my-4">
        <RouterLink to="/dashboard/tournaments/create">Créer un tournoi</RouterLink>
      </button>
      <TournamentCardComponent v-for="(tournament, key) in store.getters.getMyTournaments" :key="key" :title-card="tournament.name" :desc="tournament.description" :link-one="'/dashboard/tournaments/' + tournament.id" link-one-text="Détails du tournoi" :link-two="'/dashboard/tournaments/' + tournament.id + '/join'" link-two-text="Rejoindre le tournoi" />
    </div>
    <div class="mt-10" v-else>
      <p class="pb-3">Aucun tournoi de crée.</p>
      <button class="info">
        <RouterLink to="/dashboard/tournaments/create">Créer un tournoi dès maintenant</RouterLink>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import TournamentCardComponent from '@/components/TournamentCardComponent.vue'
defineComponent({
  name: 'TournamentsPage'
})

const store = useStore()
store.dispatch('getAllTournaments')
store.dispatch('getMyTournaments')
store.dispatch('getTournamentColumns')
</script>