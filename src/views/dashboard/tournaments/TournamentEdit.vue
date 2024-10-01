<template>
  <DashboardLayout 
      title="Créer ou éditer le tournoi" 
      show-breadcrumb="true"
      :breadcrumb-list="[
        { name: 'Tournois', url: '/dashboard/tournaments' }
      ]"
      >
    <div class="relative" v-if="store.getters.getTournament != null">
      <div>
        <input-text type="file" label="Bannière" @uploadFile="uploadTournamentBanner" />
      </div>
      <div>
        <input-text type="file" label="Logo" @uploadFile="uploadTournamentLogo" />
      </div>
    </div>

    <form @submit.prevent="submitForm">
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <input-text v-model="tournamentForm.name" label="Nom" placeholder="Les p't" />
        <input-text v-model="tournamentForm.type" type="select" label="Sélectionner le type" placeholder="Les p't">
          <option value="TOURNAMENT">Tournoi</option>
          <option value="LEAGUE">League</option>
          <option value="LADDER">Ladder</option>
        </input-text>
        <input-text v-model="tournamentForm.description" type="textarea" label="Description" placeholder="Les p't" />
        <input-text v-model="tournamentForm.rules" type="textarea" label="Règes" placeholder="Les p't" />
        <input-text v-model="tournamentForm.startDate" type="datetime-local" label="Date de début" placeholder="Les p't" />
        <input-text v-model="tournamentForm.endDate" type="datetime-local" label="Date de fin" placeholder="Les p't" />
        <input-text v-model="tournamentForm.game_id" type="select" label="Sélectionner le jeu">
          <option v-for="(game, key) in store.getters.getGames" :key="key" :value="game.id">{{ game.name }}</option>
        </input-text>
        <input-text v-model="tournamentForm.platform_id" type="select" label="Sélectionner la plateforme">
          <option v-for="(platform, key) in store.getters.getPlatforms" :key="key" :value="platform.id">{{ platform.name }}</option>
        </input-text>

        <button type="submit" class="green my-4">{{store.getters.getTournament != null ? 'Editer mon tournoi' :' Créer un tournoi'}}</button>
      </div>
    </form>
  </DashboardLayout>
</template>
<script setup>
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import InputText from '@/components/InputText.vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
defineComponent({
  name: 'TournamentEditPage'
})

let tournamentForm = ref({
  name: '',
  description: '',
  rules: '',
  startDate: '',
  endDate: '',
  game_id: 0,
  platform_id: 0,
  logo: '',
  banner: '',
  type: ''
});

const store = useStore();
const router = useRouter();
const params = router.currentRoute.value.params;

if (params.id) {
  store.dispatch('getTournamentById', params.id)
  tournamentForm.value = store.getters.getTournament
}
store.dispatch('getAllGames')
store.dispatch('getAllPlatforms')

function uploadTournamentBanner(e) {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length)
    return;
  store.dispatch('uploadTournamentBanner', {
    structureId: params.id,
    file: files[0]
  }).then(() => {
    store.dispatch('getTournamentById', params.id)
  })
}

function uploadTournamentLogo(e) {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length)
    return;
  store.dispatch('uploadTournamentLogo', {
    structureId: params.id,
    file: files[0]
  }).then(() => {
    store.dispatch('getTournamentById', params.id)
  })
}

function submitForm() {
  if (params && params.id) {
    store.dispatch('updateTournament', tournamentForm.value).then(() => {
      // Redirect to the team page
      router.push({ name: 'TournamentDetail', params: { id: params.id } })
    })
  } else {
    store.dispatch('createTournament', tournamentForm.value).then(() => {
      // Redirect to the team page
      router.push({ name: 'MyTournaments' })
    })
  }
}
</script>