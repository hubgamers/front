<template>
  <div>
    <div class="py-5">
      <h3 class="text-lg font-semibold">Mes équipes</h3>
      <p class="text-sm text-gray-500">Gérer l'ensemble de vos équipes.</p>
      <RouterLink to="/dashboard/teams/create">
        <ButtonDark class="my-3">Ajouter une équipe</ButtonDark>
      </RouterLink>
      <Table :columns="store.getters.getTeamColumns" :items="store.getters.getTeams" url="/dashboard/teams/" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Table from '@/components/Table.vue'
import ButtonDark from '@/components/ButtonDark.vue'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

defineComponent({
  name: 'AdminTeamsPage'
})

const store = useStore()
</script>