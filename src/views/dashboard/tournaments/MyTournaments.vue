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
  </DashboardLayout>
</template>
<script setup>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import TournamentCardComponent from '@/views/dashboard/components/TournamentCardComponent.vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
defineComponent({
  name: 'MyTournamentsPage'
})

const store = useStore()
store.dispatch('getMyTournaments')
store.dispatch('getTournamentColumns')
</script>