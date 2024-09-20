<template>
  <DashboardLayout 
      title="Toutes les structures" 
      subtitle="Faites le tour de toutes les structures."
      >
    <div class="flex flex-wrap justify-between mt-10">
      <div class="flex flex-col max-w-[300px] w-full">
        <input-text v-model:model-value="search" label="Recherche" placeholder="Rechercher une structure" required />
        <button @click="searchInTeams" class="info">Rechercher</button>
      </div>
      <div class="flex flex-wrap flex-row gap-5 mt-2">
        <CardComponent v-for="(team, key) in store.getters.getStructures" :key="key" :title-card="team.name" :desc="team.description" :image="team.logo" :link-one="'/dashboard/structures/' + team.id" link-one-text="Détails de l'structure" btn-modal-text="Rejoindre l'structure" @modal="openJoinModal(team.id)" />
      </div>
    </div>
    
    <JoinTeamModal v-if="showJoinModal" @close="closeJoinModal" :team-id="structureIdSelected" />
  </DashboardLayout>
</template>
<script setup>
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import CardComponent from '@/views/dashboard/components/TeamCardComponent.vue'
import InputText from '@/components/InputText.vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import JoinTeamModal from '@/views/dashboard/structures/modal/JoinTeamModal.vue'

defineComponent({
  name: 'StructuresPage'
})

const store = useStore()
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
let structureIdSelected = ref("")
function openJoinModal(structureId) {
  showJoinModal.value = true
  structureIdSelected.value = structureId
}

function closeJoinModal() {
  showJoinModal.value = false
}
</script>