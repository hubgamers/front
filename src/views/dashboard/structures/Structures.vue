<template>
  <DashboardLayout title="Mes structures" subtitle="Gérer l'ensemble de vos structures.">
    <div v-if="store.getters.getMyStructures.length > 0" class="flex flex-wrap flex-row gap-5 mt-10">
      <button class="info my-4 w-full">
        <RouterLink to="/dashboard/structures/create">Créer une structure</RouterLink>
      </button>
      <CardComponent v-for="(team, key) in store.getters.getMyStructures" :key="key" :title-card="team.name" :desc="team.description" :image="team.logo" :link-one="'/dashboard/structures/' + team.id" link-one-text="Détails de l'structure" />
    </div>
    <div class="mt-10" v-else>
      <p class="pb-3">Aucune structure de créée.</p>
      <button class="info">
        <RouterLink to="/dashboard/structures/create">Créer une structure dès maintenant</RouterLink>
      </button>
    </div>
    
    <Topbar class="mt-20" title="Structures publiques" subtitle="Vous pouvez rejoindre une structure parmi la liste" />
    <div class="flex flex-wrap justify-between mt-10">
      <div class="flex flex-col max-w-[300px] w-full">
        <input-text v-model:model-value="search" label="Recherche" placeholder="Rechercher une structure" required />
        <button @click="searchInTeams" class="info">Rechercher</button>
      </div>
      <div class="flex flex-wrap flex-row gap-5 mt-2">
        <CardComponent v-for="(team, key) in store.getters.getStructures" :key="key" :title-card="team.name" :desc="team.description" :image="team.logo" :link-one="'/dashboard/structures/' + team.id" link-one-text="Détails de l'structure" btn-modal-text="Rejoindre l'structure" @modal="openJoinModal(team.id)" />
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
import JoinTeamModal from '@/views/dashboard/structures/modal/JoinTeamModal.vue'
defineComponent({
  name: 'TeamsPage'
})

const store = useStore()
store.dispatch('getAllMyStructures')
store.dispatch('getAllPublicStructures')
store.dispatch('getStructureColumns')
store.dispatch('getAllPlayers')

let search = ref('')

function searchInTeams() {
  if (search.value === '') {
    store.dispatch('getAllPublicStructures')
  } else {
    store.dispatch('getAllStructuresByName', search.value)
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