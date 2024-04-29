<template>
  <div class="py-5 px-5">
    <Topbar title="Mes équipes" subtitle="Gérer l'ensemble de vos équipes." />
    
    <div class="flex flex-row gap-5 mt-10">
      <CardComponent v-for="(team, key) in store.getters.getMyTeams" :key="key" :title-card="team.name" :desc="team.description" :link-one="'/dashboard/teams/' + team.id" link-one-text="Détails de l'équipe" :link-two="'/dashboard/teams/' + team.id + '/join'" link-two-text="Rejoindre l'équipe" />
    </div>
    
    <Topbar class="mt-20" title="Equipes publiques" subtitle="Vous pouvez rejoindre une équipe parmi la liste" />
    <div class="flex justify-between mt-10">
      <div class="flex flex-col max-w-[300px] w-full">
        <input-text v-model:model-value="search" label="Recherche" placeholder="Rechercher une équipe" required />
        <button @click="searchInTeams" class="info">Rechercher</button>
      </div>
      <div class="flex flex-row gap-5">
        <CardComponent v-for="(team, key) in store.getters.getTeams" :key="key" :title-card="team.name" :desc="team.description" :link-one="'/dashboard/teams/' + team.id" link-one-text="Détails de l'équipe" :link-two="'/dashboard/teams/' + team.id + '/join'" link-two-text="Rejoindre l'équipe" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import CardComponent from '@/components/CardComponent.vue'
import InputText from '@/components/InputText.vue'
defineComponent({
  name: 'TeamsPage'
})

const store = useStore()
store.dispatch('getAllMyTeams')
store.dispatch('getAllTeams')
store.dispatch('getTeamColumns')
store.dispatch('getAllPlayers')

let search = ref('')

function searchInTeams() {
  console.log('search', search.value)
  if (search.value === '') {
    store.dispatch('getAllTeams')
  } else {
    store.dispatch('getAllTeamsByName', search.value)
  }
}
</script>