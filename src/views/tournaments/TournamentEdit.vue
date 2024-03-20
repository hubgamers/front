<template>
  <div class="py-10 px-10">
    <Topbar title="Gérer mon tournoi" subtitle="Créer ou éditer mon tournoi" />


    <form @submit="createTournament">
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom du tournoi</label>
          <input type="text" v-model="tournamentForm.name">
        </div>

        <div>
          <label for="tournamentType" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sélectionner le type</label>
          <select name="tournamentType" id="tournamentType" v-model="tournamentForm.tournamentType">
            <option value="TOURNAMENT"></option>
            <option value="LEAGUE"></option>
            <option value="LADDER"></option>
          </select>
        </div>

        <div>
          <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <textarea v-model="tournamentForm.description"></textarea>
        </div>

        <div>
          <label for="game" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jeu</label>
          <input type="text" v-model="tournamentForm.game">
        </div>

        <div>
          <label for="platform" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plateforme</label>
          <select name="platform" id="platform" v-model="tournamentForm.platform">
            <option value="PS4"></option>
            <option value="PS5"></option>
            <option value="XBOX"></option>
            <option value="Switch"></option>
            <option value="PC"></option>
          </select>
        </div>

        <div>
          <label for="logo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Logo</label>
          <input type="text" v-model="tournamentForm.logo">
        </div>

        <div>
          <label for="banner" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Banner</label>
          <input type="text" v-model="tournamentForm.banner">
        </div>


        <ButtonDark typeBtn="submit">Créer le tournoi</ButtonDark>
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
  game: '',
  platform: '',
  logo: '',
  banner: '',
  tournamentType: ''
});

const store = useStore();
const router = useRouter();
function createTournament() {
  store.dispatch('createTournament', tournamentForm.value).then(() => {
    
  })
}
</script>