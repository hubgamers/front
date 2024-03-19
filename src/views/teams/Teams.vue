<template>
  <div class="py-10 px-10">
    <Topbar title="Mes équipes" subtitle="Gérer l'ensemble de vos équipes." />

    teams {{store.getters.getTeams}}
    
    
    <Table :columns="store.getters.getTeamColumns" :items="store.getters.getTeams" />
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { defineComponent, ref } from 'vue'
import Table from '@/components/Table.vue'
import { useStore } from 'vuex'
defineComponent({
  name: 'TeamsPage'
})

const store = useStore()
store.dispatch('getAllTeams')
store.dispatch('getTeamColumns')

</script>