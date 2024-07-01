<template>
  <div class="py-10 px-10">
    <div class="max-w-[1200px] m-auto">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-3xl font-bold text-center">Équipes publiques</h1>
        <p class="text-center">Rejoignez une équipe publique pour participer à des tournois</p>
      </div>

      <!-- lister les équipes publiques -->
      <ul class="mt-5 flex flex-col gap-3">
        <li v-for="(team, teamIndex) in store.getters.getTeams" :key="teamIndex" class="rounded-lg bg-gray-300 flex items-center justify-around px-2">
          <div class="flex items-center gap-2">
            <img :src="team.logo" alt="team" class="w-20 h-20 rounded-full">
            <div class="flex flex-col">
              <span class="text-lg">{{team.name}}</span>
              <span class="text-sm"><i class="fa fa-person"></i> {{ team.players.length }}</span>
              <span v-if="team.region != null" class="text-sm"><i class="fa fa-language"></i> {{ team.region.language }}</span>
            </div>
          </div>
          <div class="flex-1 px-5">
            <img :src="team.banner" class="max-h-[100px] w-full object-cover" alt="banner">
          </div>
          <div>
            <button @click="toggleInvitationModal" class="bg-green-500 text-white px-3 py-1 rounded">Rejoindre</button>
          </div>
        </li>
      </ul>
    </div>
    
    <!-- Modal d'invitation -->
    <div v-if="invitationModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Voulez-vous envoyer une invitation ?</h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">Vous êtes sur le point d'envoyer une demande pour rejoindre l'équipe. Celle-ci pourra être acceptée ou refusée par le capitaine.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" @click="sendInvitation" class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Envoyer l'invitation</button>
              <button type="button" @click="toggleInvitationModal" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Annuler</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
import { ref } from 'vue'

const store = useStore();
store.dispatch('getAllPublicTeams');

let invitationModal = ref(false);

function toggleInvitationModal() {
  invitationModal.value = !invitationModal.value;
}

function sendInvitation(teamId: string) {
  store.dispatch('sendInvitation', teamId)
}
</script>