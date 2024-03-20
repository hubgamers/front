<template>
  <div class="py-10 px-10" v-if="teamForm != null">
    <Topbar title="Gérer mon équipe" :subtitle="store.getters.getTeam != null ? 'Editer mon équipe' :' Créer une équipe'" />
    <!-- TODO: mettre un formulaire avec un select des équipes déjà crée pour les modifier directement -->
    <!-- TODO: penser à ajouter les joueurs -->

    <div class="relative">
      <div>
        <img v-if="store.getters.getTeam != null" class="relative max-h-[300px] max-w-full object-cover rounded-b" :src="store.getters.getTeam.banner" alt="banner">
        <div>
          <label for="banner" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bannière</label>
          <input @input="uploadTeamBanner" type="file" id="banner" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
      </div>
      <div>
<!--        <img v-if="store.getters.getTeam != null" class="absolute bottom-0 left-0 max-h-[300px] max-w-[300px]" :src="store.getters.getTeam.logo" alt="logo">-->
        <div>
          <label for="logo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Logo</label>
<!--          <input v-model="teamForm.logo" type="file" id="logo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />-->
        </div>
      </div>
    </div>

    <form @submit.prevent="submitForm">
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom de l'équipe</label>
          <input v-model="teamForm.name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nom de l'équipe" required />
        </div>
        <div>
          <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <textarea v-model="teamForm.description" id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Décrivez votre équipe"></textarea>
        </div>
        <div>
          <label for="game" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jeu</label>
          <input v-model="teamForm.game" type="text" id="game" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rainbow Six Siege" required />
        </div>
        <div>
          <label for="platform" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Platforme</label>
          <input v-model="teamForm.platform" type="text" id="platform" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PC" required />
        </div>
        <div>
          <label for="players" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Joueurs</label>
          <select v-model="teamForm.players" multiple name="players" id="players">
            <option v-for="(player, key) in store.getters.getPlayers" :key="key" :value="{id: player.id}">{{player.username}}</option>
          </select>
        </div>
      </div>
      <ButtonDark typeBtn="submit">Créer l'équipe</ButtonDark>
    </form>

  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import ButtonDark from '@/components/ButtonDark.vue'
import { useRoute, useRouter } from 'vue-router'

defineComponent({
  name: 'TeamEditPage'
})

const store = useStore();
let teamForm = ref({
  name: '',
  description: '',
  game: '',
  platform: '',
  players: [],
  banner: '',
  logo: ''
})
store.dispatch('getAllPlayers')

const router = useRouter()
const route = useRoute();
const params = route.params;

console.log(route.name)
if (route.name === 'EditTeam') {
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