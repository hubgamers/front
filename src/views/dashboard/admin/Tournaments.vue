<template>
  <div class="py-10 px-10">
    <Topbar title="Mes tournois" subtitle="Créer ou rejoindre des tournois." />

    <div class="w-1/5 py-3">
      <RouterLink to="/dashboard/tournaments/create">
        <ButtonDark>Créer un tournoi</ButtonDark>
      </RouterLink>
    </div>
    <Table :columns="store.getters.getTournamentColumns" :items="store.getters.getTournaments" url="/dashboard/tournaments/" />
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/views/dashboard/components/Topbar.vue'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import ButtonDark from '@/components/ButtonDark.vue'
import Table from '@/views/dashboard/components/Table.vue'
defineComponent({
  name: 'TournamentsPage'
})

const store = useStore()
store.dispatch('getAllTournaments')
store.dispatch('getTournamentColumns')
</script>