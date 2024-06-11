<template>
  <DashboardLayout title="Gérer mon équipe" :subtitle="store.getters.getTeam != null ? 'Editer mon équipe' :' Créer une équipe'">
    <div v-if="teamForm !== null && store.getters.getTeam != null" class="relative">
      <div>
        <input-text type="file" label="Bannière" @uploadFile="uploadTeamBanner" />
      </div>
      <div>
        <input-text type="file" label="Logo" @uploadFile="uploadTeamLogo" />
      </div>
      <InputText v-model="teamForm.description" label="Description" placeholder="HubGamers's Team" required />
    </div>

    <form @submit.prevent="submitForm">
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <input-text v-model="teamForm.name" label="Nom" placeholder="Les p't" />
        <input-text v-model="teamForm.description" label="Description" placeholder="Une équipe de choc" />
        <input-text v-model="teamForm.game" label="Description" placeholder="Une équipe de choc" />
        <input-text v-model="teamForm.platform" label="Description" placeholder="Une équipe de choc" />
      </div>
      <button type="submit" class="info my-4">Créer l'équipe</button>
    </form>

  </DashboardLayout>
</template>
<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import InputText from '@/components/InputText.vue'
import type { TeamDTO } from '@/models/TeamDTO'
import DashboardLayout from '@/layout/DashboardLayout.vue'

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

let createdPage = ref(false);
const router = useRouter();
const params = useRoute().params;
if (params && params.id) {
  store.dispatch('getTeamById', params.id)
  teamForm.value = store.getters.getTeam
} else {
  createdPage.value = true;
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
      router.push({ name: 'MyTeams'})
    })
  }
}
</script>