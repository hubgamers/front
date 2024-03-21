<template>
  <div class="py-10 px-10">
    <Topbar title="Gérer mon tournoi" subtitle="Créer ou éditer mon tournoi" />

    <div class="relative" v-if="store.getters.getTournament != null">
      <div>
        <img v-if="store.getters.getTournament.banner != ''" class="relative max-h-[300px] max-w-full object-cover rounded-b" :src="store.getters.getTournament.banner" alt="banner">
        <div>
          <label for="banner" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bannière</label>
          <input @input="uploadTournamentBanner" type="file" id="banner" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
      </div>
      <div>
        <img v-if="store.getters.getTournament.logo != ''" class="absolute bottom-0 left-0 max-h-[300px] max-w-[300px]" :src="store.getters.getTournament.logo" alt="logo">
        <div>
          <label for="logo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Logo</label>
          <input @input="uploadTournamentLogo" type="file" id="logo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
      </div>
    </div>

    <form @submit.prevent="submitForm">
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom du tournoi</label>
          <input type="text" v-model="tournamentForm.name">
        </div>

        <div>
          <label for="tournamentType" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sélectionner le type</label>
          <select name="tournamentType" id="tournamentType" v-model="tournamentForm.tournamentType">
            <option value="TOURNAMENT">Tournoi</option>
            <option value="LEAGUE">League</option>
            <option value="LADDER">Ladder</option>
          </select>
        </div>

        <div>
          <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <textarea v-model="tournamentForm.description"></textarea>
        </div>

        <div>
          <label for="rules" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Règles</label>
          <textarea v-model="tournamentForm.rules"></textarea>
        </div>
        
        <div>
          <label for="startDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date de début</label>
          <input type="datetime-local" v-model="tournamentForm.startDate">
        </div>

        <div>
          <label for="endDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date de fin</label>
          <input type="datetime-local" v-model="tournamentForm.endDate">
        </div>

        <div>
          <label for="game" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jeu</label>
          <input type="text" v-model="tournamentForm.game">
        </div>

        <div>
          <label for="platform" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plateforme</label>
          <select name="platform" id="platform" v-model="tournamentForm.platform">
            <option value="PS4">PS4</option>
            <option value="PS5">PS5</option>
            <option value="XBOX">XBOX</option>
            <option value="Switch">Switch</option>
            <option value="PC">PC</option>
          </select>
        </div>

        <ButtonDark typeBtn="submit">Valider</ButtonDark>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'

import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import ButtonDark from '@/components/ButtonDark.vue'
import { useRouter } from 'vue-router'
defineComponent({
  name: 'TournamentEditPage'
})

let tournamentForm = ref({
  name: '',
  description: '',
  rules: '',
  startDate: '',
  endDate: '',
  game: '',
  platform: '',
  logo: '',
  banner: '',
  tournamentType: ''
});

const store = useStore();
const router = useRouter();
const params = router.currentRoute.value.params;

if (params.id) {
  store.dispatch('getTournamentById', params.id)
  tournamentForm.value = store.getters.getTournament
}

function uploadTournamentBanner(e: any) {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length)
    return;
  store.dispatch('uploadTournamentBanner', {
    teamId: params.id,
    file: files[0]
  }).then(() => {
    store.dispatch('getTournamentById', params.id)
  })
}

function uploadTournamentLogo(e: any) {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length)
    return;
  store.dispatch('uploadTournamentLogo', {
    teamId: params.id,
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
      router.push({ name: 'TournamentDetail', params: { id: params.id } })
    })
  }
}
</script>