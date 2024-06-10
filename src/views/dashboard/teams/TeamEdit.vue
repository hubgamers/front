<template>
  <div class="py-10 px-10" v-if="teamForm != null">
    <Topbar title="Gérer mon équipe" :subtitle="store.getters.getTeam != null ? 'Editer mon équipe' :' Créer une équipe'" />
    <!-- TODO: mettre un formulaire avec un select des équipes déjà crée pour les modifier directement -->
    <!-- TODO: penser à ajouter les joueurs -->
    
    <div class="flex gap-5">
      <InputText v-model="teamForm.name" label="Nom publique" placeholder="HubGamers's Team" required />
      <InputText v-model="teamForm.tag" label="Tag" placeholder="HGR" required />
      <InputText v-model="teamForm.visibility" label="Visibilité" placeholder="HGR" required />
      <div>
        <img v-if="store.getters.getTeam != null" class="absolute bottom-0 left-0 max-h-[300px] max-w-[300px]" :src="store.getters.getTeam.logo" alt="logo">
        <div>
          <label for="logo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Logo</label>
          <input @input="uploadTeamLogo" type="file" id="logo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
          <img v-if="store.getters.getTeam != null" class="relative max-h-[300px] max-w-full object-cover rounded-b" :src="store.getters.getTeam.banner" alt="banner">
          <div>
            <label for="banner" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bannière</label>
            <input @input="uploadTeamBanner" type="file" id="banner" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>
      </div>
      <InputText v-model="teamForm.description" label="Description" placeholder="HubGamers's Team" required />
    </div>
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import InputText from '@/components/InputText.vue'
import type { TeamDTO } from '@/models/TeamDTO'

defineComponent({
  name: 'TeamEditPage'
})

const store = useStore();
const teamForm = ref<TeamDTO>({
  name: '',
  tag: '',
  description: '',
  visibility: false,
  game: '',
  platform: '',
  players: [],
  organizerId: '',
  logo: '',
  banner: ''
})
store.dispatch('getAllPlayers')

const router = useRouter();
const params = useRoute().params;
if (params && params.id) {
  store.dispatch('getTeamById', params.id)
  teamForm.value = store.getters.getTeam
}

function uploadTeamBanner(e: any) {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length)
    return;
  store.dispatch('uploadTeamBanner', {
    teamId: params.id,
    file: files[0]
  })
}

function uploadTeamLogo(e: any) {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length)
    return;
  store.dispatch('uploadTeamLogo', {
    teamId: params.id,
    file: files[0]
  })
}

function submitForm() {
  if (params && params.id) {
    store.dispatch('updateTeam', teamForm.value).then(() => {
      // Redirect to the team page
      router.push({ name: 'TeamDetail', params: { id: params.id } })
    })
  } else {
    store.dispatch('createTeam', teamForm.value).then(() => {
      // Redirect to the team page
      router.push({ name: 'TeamDetail', params: { id: params.id } })
    })
  }
}
</script>