<template>
  <div v-if="store.getters.getTournament !== null">
    <div class="relative">
      <img class="relative max-h-[300px] w-full object-cover rounded-b" :src="store.getters.getTournament.banner" alt="banner">
      <img class="absolute bottom-0 left-0 max-h-[300px] max-w-[300px]" :src="store.getters.getTournament.logo" alt="logo">
    </div>
    <div class="py-10 px-10">
      <Topbar :title="store.getters.getTournament.name" :subtitle="store.getters.getTournament.description" />
      <div class="flex flex-row">
        <span class="max-w-[5rem] bg-blue-100 text-blue-800 text-base font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"><i class="fa-solid fa-gamepad"></i> {{ store.getters.getTournament.game }}</span>
        <span class="max-w-[5rem] bg-blue-100 text-blue-800 text-base font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"><i class="fa-solid fa-laptop"></i> {{ store.getters.getTournament.platform }}</span>
      </div>
      
      <p>Début : {{ formatDate(store.getters.getTournament.startDate, 'DD/MM/YYYY hh:mm')  }}</p>
      <p>Fin : {{ formatDate(store.getters.getTournament.endDate, 'DD/MM/YYYY hh:mm')  }}</p>

      <ul class="mt-2 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li class="me-2">
          <button id="informations" @click="changeCurrentTab" aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Informations</button>
        </li>
        <li class="me-2">
          <button id="rules" @click="changeCurrentTab" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Règles</button>
        </li>
        <li class="me-2">
          <button id="participants" @click="changeCurrentTab" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Participants</button>
        </li>
        <li class="me-2">
          <button id="matchs" @click="changeCurrentTab" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Matchs</button>
        </li>
        <li>
          <!-- TODO: rendre ceci que pour l'organisateur -->
          <button id="options" @click="changeCurrentTab" class="inline-block p-4 text-gray-400 rounded-t-lg dark:text-gray-500">Paramètres</button>
        </li>
      </ul>
      
      <div v-if="currentTab == 'informations'">
        <h3 class="text-lg font-semibold mt-4">Description</h3>
        <p class="mt-2">{{ store.getters.getTournament.description }}</p>
      </div>
      <div v-if="currentTab == 'rules'">
        <h3 class="text-lg font-semibold mt-4">Règles</h3>
        <p class="mt-2">{{ store.getters.getTournament.rules }}</p>
      </div>
      <div v-if="currentTab == 'participants'">
        <h3 class="text-lg font-semibold mt-4">Liste des participants</h3>
        <div class="flex flex-row justify-between">
          <!-- TODO : afficher les participants -->
        </div>
      </div>
      <div v-if="currentTab == 'options'">
        <div class="px-2 py-5">
          <h4 class="text-lg font-semibold mt-4">Apporter une modification sur votre tournoi ?</h4>
          <RouterLink :to="'/tournaments/edit/' + params.id">
            <button class="mt-2 bg-black text-white px-4 py-2 rounded">Editer le tournoi</button>
          </RouterLink>
        </div>
        <div class="px-2 py-5">
          <h4 class="text-lg font-semibold mt-4">Voulez-vous supprimer le tournoi ?</h4>
          <p class="mt-2">Attention, cette action est irréversible.</p>
          <RouterLink :to="'/tournaments/delete/' + params.id">
            <button class="mt-2 bg-red-500 text-white px-4 py-2 rounded">Supprimer le tournoi</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import moment from 'moment/moment'

defineComponent({
  name: 'TournamentDetailPage'
})

const store = useStore();
const params = useRoute().params;
if (params && params.id) {
  store.dispatch('getTournamentById', params.id)
}

let currentTab = ref('informations')
function changeCurrentTab(event: any) {
  currentTab.value = event.target.id
}

function formatDate(date: any, formatDate= 'yyyy-MM-dd') {
  return moment(date).format(formatDate)
}
</script>