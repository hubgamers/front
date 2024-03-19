<template>
  <div class="py-10 px-10">
    <Topbar title="Mes équipes" subtitle="Gérer l'ensemble de vos équipes." />
    <div class="w-1/5 py-3">
      <RouterLink to="/teams/create">
        <ButtonDark>Ajouter une équipe</ButtonDark>
      </RouterLink>
    </div>
    <Table :columns="store.getters.getTeamColumns" :items="store.getters.getTeams" />
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { defineComponent, ref } from 'vue'
import Table from '@/components/Table.vue'
import { useStore } from 'vuex'
import ButtonDark from '@/components/ButtonDark.vue'
defineComponent({
  name: 'TeamsPage'
})

const store = useStore()
store.dispatch('getAllTeams')
store.dispatch('getTeamColumns')

</script>