<template>
  <DashboardLayout title="Découvrez les joueurs du moment" subtitle="Vous pouvez inviter quiconque à rejoindre votre équipe">
        <form @submit.prevent="searchInTeams" class="py-4">   
          <h3 class="text-2xl font-bold">Rechercher un joueur</h3>
          <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Rechercher un joueur</label>
          <p class="help is-info">Vous pouvez rechercher directement par le pseudonyme du joueur ou bien par un tag ou un jeu en particulier afin d'avoir la liste des joueurs compatibles.</p>
          <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input v-model="search" type="search" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Valorant" />
              <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rechercher</button>
          </div>
        </form>

        <div class="flex flex-wrap flex-row gap-5" style="flex: 2">
        <CardComponent
          v-for="(player, key) in store.getters.getPlayers"
          :key="key"
          :title-card="player.username"
          :image="player.avatar ? player.avatar : 'https://avatar.iran.liara.run/public/6'"
          :link-one="'/dashboard/players/' + player.id"
          link-one-text="Détails du joueur"
          btn-modal-text="Inviter à rejoindre l'équipe"
          @modal="openInviteModal(player.id)" />
     </div>

    <JoinTeamModal v-if="showJoinModal" @close="closeJoinModal" :team-id="teamIdSelected" />
  </DashboardLayout>
</template>
<script setup>
import DashboardLayout from '@/layout/DashboardLayout.vue'
import CardComponent from '@/views/dashboard/components/TeamCardComponent.vue'
import { useStore } from 'vuex'
import { defineComponent, ref } from 'vue'
import JoinTeamModal from '@/views/dashboard/structures/modal/JoinTeamModal.vue'

defineComponent({
  name: 'PlayersPage'
})

const store = useStore();
store.dispatch('getAllPlayers')

let search = ref('')

function searchInTeams() {
  if (search.value === '') {
    store.dispatch('getAllPlayers')
  } else {
    store.dispatch('getAllPlayersLikeByName', search.value)
  }
}

let showJoinModal = ref(false)
let teamIdSelected = ref("")

function closeJoinModal() {
  showJoinModal.value = false
}
</script>