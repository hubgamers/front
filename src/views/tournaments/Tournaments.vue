<template>
  <div>
    <Topbar title="Mes tournois" subtitle="Créer ou rejoindre des tournois." />
    
    players {{store.getters.getPlayers}}

    <RouterLink to="/tournaments/create" class="btn btn-primary">
      Créer un tournoi
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
defineComponent({
  name: 'TournamentsPage'
})

const store = useStore()
store.dispatch('getAllTeams')
</script>