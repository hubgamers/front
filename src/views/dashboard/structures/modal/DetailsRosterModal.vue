<template>
  <Modal v-if="!isLoading" size="5xl" :title="'Détails de ' + store.getters.getTeamRoster.name" @close="close">
    <div v-if="store.getters.getTeamRoster.game" class="relative mb-3">
      <img :src="store.getters.getTeamRoster.game.banner" alt="" class="rounded-t relative h-36 w-full object-cover">
    </div>

    <fwb-tabs v-model="activeTab" class="p-5">
      <fwb-tab name="first" title="Composition">
        <fwb-list-group v-if="store.getters.getTeamRoster.players && store.getters.getTeamRoster.players.length > 0">
          <fwb-list-group-item v-for="(player, playerIndex) in store.getters.getTeamRoster.players" :key="playerIndex">{{ player.username }}</fwb-list-group-item>
        </fwb-list-group>
        <p v-else>Aucun joueur.</p>
        <p>Vous pouvez inviter des joueurs dans Invitations.</p>
      </fwb-tab>
      <fwb-tab name="invitations" title="Invitations">
        <Table :columns="store.getters.getInvitationColumns.filter((column) => column !== 'type' && column !== 'teamId')" :items="store.getters.getInvitationsByTeamId" type="invitation" />
      </fwb-tab>
      <fwb-tab name="second" title="Ajouter un joueur">
        <form @submit.prevent="searchPlayer" class="py-4 flex flex-col">
          <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Rechercher une équipe</label>
          <div class="relative flex items-center">
            <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input v-model="playerSearch" type="search" id="search" class="block w-full p-4 pl-10 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Valorant" />
            <fwb-button type="submit" color="default" class="ml-2">Rechercher</fwb-button>
          </div>
        </form>
        <ul class="row gap-1 table-odd">
          <li v-for="(player, key) in store.getters.getPlayers" :key="key" class="row items-center gap-1">
            <span>{{player.username}}</span>
            <fwb-button :disabled="invitationStatus !== ''" @click.prevent="recruitTeamRoster(player.id)" color="default">Inviter</fwb-button>
          </li>
        </ul>
      </fwb-tab>
    </fwb-tabs>
   
 </Modal>
 <div v-else>
  <LoadingModal size="5xl" />
 </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { notify } from '@kyvg/vue3-notification'
import { onBeforeMount, ref } from 'vue'
import Modal from '../../components/Modal.vue';
import { FwbTab, FwbTabs, FwbButton } from 'flowbite-vue'
import Table from '../../components/Table.vue';
import { FwbListGroup, FwbListGroupItem } from 'flowbite-vue'
import LoadingModal from '../../components/LoadingModal.vue';

const activeTab = ref('first')
const props = defineProps({
  teamRosterId: Object
})
const store = useStore();

let isLoading = ref(true);
onBeforeMount(async () => {
  await store.dispatch('getAllGames');
  await store.dispatch('getAllPlatforms');
  await store.dispatch('getTeamRosterById', props.teamRosterId);
  isLoading.value = false;
});

const emit = defineEmits(['close'])
function close() {
  emit('close')
}


// Feat : ajout de joueur à une équipe
let playerSearch = ref('');
store.dispatch('getAllPlayers');
if (props.teamRosterId) {
  store.dispatch('getAllInvitationsByStructureId', props.teamRosterId);
}
store.dispatch('getInvitationColumns')
function searchPlayer() {
  store.dispatch('getPlayerByUsername', playerSearch.value);
}
let invitationStatus = ref('');
async function recruitTeamRoster(playerId) {
  invitationStatus.value = 'disabled';
  await store.dispatch('createInvitation', {
    playerId: playerId,
    structureId: props.teamRosterId,
    type: 'RECRUIT_PLAYER'
  })
  .then(() => {
    notify({
      type: 'success',
      title: 'Invitation envoyée',
      text: 'Le joueur a bien été invité dans le roster.'
    })
    store.dispatch('getAllInvitationsByStructureId', props.teamRosterId)
    invitationStatus.value = '';
  })
  .catch(() => {
    notify({
      type: 'error',
      title: 'Erreur',
      text: 'Une erreur est survenue lors de l\'invitation du joueur.'
    })
  });
  invitationStatus.value = '';
  setTimeout(() => {
    invitationStatus.value = '';
  }, 3000)
}
</script>