<template>
  <div class="py-10 px-10">
    <Topbar title="Mes invitations" subtitle="Acceptez ou refusez les invitations en attente et créer de nouvelles invitations pour vos équipes." />
    <button class="info my-3" @click="toggleInvitationModal">Créer une invitation</button>
    <Table :columns="store.getters.getInvitationColumns" :items="store.getters.getInvitations" url="/dashboard/teams/invitations/" />

    <div v-if="invitationModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="flex flex-col gap-1">
                <form @submit.prevent="searchPlayer" class="flex flex-row">
                  <div class="flex flex-col">
                    <label for="playerUsername">Rechercher un joueur</label>
                    <input v-model="playerUsername" type="text" name="playerUsername" id="playerUsername">
                  </div>
                  <button type="submit" class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Rechercher un joueur</button>
                </form>
                <form>
                  <div>
                    <label for="playerId">Sélectionner un joueur</label>
                    <input v-model="playerUsername" type="text" name="playerId" id="playerId" disabled>
                  </div>
                  <div>
                    <label for="teamId">Sélectionner une équipe</label>
                    <select v-model="invitationForm.teamId" name="teamId" id="teamId">
                      <option v-for="(team, teamIndex) in store.getters.getTeams" :key="teamIndex" :value="team.id">{{team.name}}</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="submit" @click="sendInvitation" class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Envoyer l'invitation</button>
              <button type="button" @click="toggleInvitationModal" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Annuler</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Table from '@/components/Table.vue'
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import Topbar from '@/components/Topbar.vue'

defineComponent({
  name: 'InvitationsPage'
})
const store = useStore()

let invitationModal = ref(false)
let invitationForm = ref({
  playerId: null,
  teamId: null,
  type: 'RECRUIT_PLAYER'
})

let playerUsername = ref('')
function searchPlayer() {
  store.dispatch('getPlayerByUsername', playerUsername.value)
  invitationForm.value.playerId = store.getters.getPlayerByUsername.id
}

function toggleInvitationModal() {
  invitationModal.value = !invitationModal.value
}

function sendInvitation() {
  store.dispatch('createInvitation', invitationForm.value)
}
</script>