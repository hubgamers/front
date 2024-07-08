<template>
  <DashboardLayout title="Mes équipes" subtitle="Gérer l'ensemble de vos équipes.">
    <div v-if="store.getters.getMyTeams.length > 0" class="flex flex-wrap flex-row gap-5 mt-10">
      <button class="info my-4 w-full">
        <RouterLink to="/dashboard/teams/create">Créer une équipe</RouterLink>
      </button>
      <CardComponent v-for="(team, key) in store.getters.getMyTeams" :key="key" :title-card="team.name" :desc="team.description" :link-one="'/dashboard/teams/' + team.id" link-one-text="Détails de l'équipe" />
    </div>
    <div class="mt-10" v-else>
      <p class="pb-3">Aucune équipe de créée.</p>
      <button class="info">
        <RouterLink to="/dashboard/teams/create">Créer une équipe dès maintenant</RouterLink>
      </button>
    </div>
    
    <Topbar class="mt-20" title="Equipes publiques" subtitle="Vous pouvez rejoindre une équipe parmi la liste" />
    <div class="flex flex-wrap justify-between mt-10">
      <div class="flex flex-col max-w-[300px] w-full">
        <input-text v-model:model-value="search" label="Recherche" placeholder="Rechercher une équipe" required />
        <button @click="searchInTeams" class="info">Rechercher</button>
      </div>
      <div class="flex flex-wrap flex-row gap-5">
        <CardComponent v-for="(team, key) in store.getters.getTeams" :key="key" :title-card="team.name" :desc="team.description" :link-one="'/dashboard/teams/' + team.id" link-one-text="Détails de l'équipe" btn-modal-text="Rejoindre l'équipe" @modal="openJoinModal(team.id)" />
      </div>
    </div>
    
    <JoinTeamModal v-if="showJoinModal" @close="closeJoinModal" :team-id="teamIdSelected" />
  </DashboardLayout>
</template>
<script setup>
import Topbar from '@/views/dashboard/components/Topbar.vue'
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import CardComponent from '@/views/dashboard/components/TeamCardComponent.vue'
import InputText from '@/components/InputText.vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import JoinTeamModal from '@/views/dashboard/teams/modal/JoinTeamModal.vue'
defineComponent({
  name: 'TeamsPage'
})

const store = useStore()
store.dispatch('getAllMyTeams')
store.dispatch('getAllPublicTeams')
store.dispatch('getTeamColumns')
store.dispatch('getAllPlayers')

let search = ref('')

function searchInTeams() {
  console.log('search', search.value)
  if (search.value === '') {
    store.dispatch('getAllPublicTeams')
  } else {
    store.dispatch('getAllTeamsByName', search.value)
  }
}

let showJoinModal = ref(false)
let teamIdSelected = ref("")
function openJoinModal(teamId) {
  showJoinModal.value = true
  teamIdSelected.value = teamId
}

function closeJoinModal() {
  showJoinModal.value = false
}
</script>