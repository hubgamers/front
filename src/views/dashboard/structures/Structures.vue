<template>
  <DashboardLayout 
      title="Toutes les structures" 
      subtitle="Faites le tour de toutes les structures."
      >
      <div class="flex flex-col max-w-[300px] w-full">
        <input-text v-model:model-value="search" label="Recherche" placeholder="Rechercher une structure" required />
        <button @click="searchInTeams" class="info">Rechercher</button>
      </div>
      <div class="flex flex-wrap flex-row gap-5 mt-2">
        <fwb-card
          v-for="(team, key) in store.getters.getStructures"
          :key="key"
          img-alt="logo"
          :img-src="team.logo"
          variant="image"
        >
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{team.name}}
            </h5>
            <fwb-button-group class="gap-2">
              <fwb-button :href="'/dashboard/structures/' + team.id">Détails</fwb-button>
              <fwb-button color="purple" @click="openJoinModal(team.id)">Rejoindre l'équipe</fwb-button>
            </fwb-button-group>
          </div>
        </fwb-card>
      </div>
    
    <JoinTeamModal v-if="showJoinModal" @close="closeJoinModal" :team-id="structureIdSelected" />
  </DashboardLayout>
</template>
<script setup>
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import InputText from '@/components/InputText.vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import JoinTeamModal from '@/views/dashboard/structures/modal/JoinTeamModal.vue'
import { FwbCard, FwbButton, FwbButtonGroup } from 'flowbite-vue'

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