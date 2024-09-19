<template>
  <ModalComponent :title="props.teamRosterId ? 'Editer le roster' : 'Créer un roster'" subtitle="Vous pouvez créer et modifier un roster pour votre équipe">
    <p>Sélectionner un jeu et une plateforme pour créer votre roster. Ainsi, vous pourrez y inviter des joueurs</p>
    <form>
      <input-text v-model="teamRosterForm.name" label="Nom" placeholder="Roster Valorant" />
      <input-text v-model="teamRosterForm.description" label="Description" type="textarea" placeholder="Roster de Valorant pour l'équipe Alpha" />
      <input-text v-model="teamRosterForm.game" type="select" label="Sélectionner le jeu">
        <option v-for="(game, key) in store.getters.getGames" :key="key" :value="game.id">{{ game.name }}</option>
      </input-text>
      <input-text v-model="teamRosterForm.platform" type="select" label="Sélectionner la plateforme" placeholder="Les p't">
        <option value="PS4">PS4</option>
        <option value="PS5">PS5</option>
        <option value="XBOX">XBOX</option>
        <option value="Switch">Switch</option>
        <option value="PC">PC</option>
      </input-text>
      <template v-if="teamRosterId">
        <Table :columns="store.getters.getInvitationColumns.filter((column) => column !== 'type' && column !== 'structureId')" :items="store.getters.getInvitationsByTeamId" type="invitation" />
        <form class="mt-10">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <input-text v-model:model-value="playerSearch" label="Recherche" placeholder="Rechercher une équipe" required />
            <button @click="searchPlayer" class="info">Rechercher</button>
            <ul class="row gap-1 table-odd">
              <li v-for="(player, key) in store.getters.getPlayers" :key="key" class="row items-center gap-1">
                <span>{{player.username}}</span>
                <button :class="invitationStatus === 'success' ? 'green' : 'info'" :disabled="invitationStatus !== ''" @click.prevent="recruitTeamRoster(player.id)">Inviter</button>
              </li>
            </ul>
          </div>
        </form>
      </template>
    </form>
    <button class="info" @click="submitForm">{{props.teamRosterId ? 'Editer le roster' : 'Créer le roster'}}</button>
    <button @click="close">Fermer</button>
  </ModalComponent>
</template>
<script setup>
import ModalComponent from '@/views/dashboard/components/Modal.vue'
import { useStore } from 'vuex'
import { notify } from '@kyvg/vue3-notification'
import InputText from '@/components/InputText.vue'
import { onBeforeMount, ref } from 'vue'
import Table from '@/views/dashboard/components/Table.vue'

const props = defineProps({
  teamRosterId: Object
})

const store = useStore();
const teamRosterForm = ref({
  name: '',
  description: '',
  game: '',
  platform: '',
  structureId: store.getters.getStructure.id
})

store.dispatch('getAllGames')
onBeforeMount(() => {
  // On vérifie s'il s'agit d'une édition ou d'une création
  if (props.teamRosterId) {
    store.dispatch('getTeamRosterById', props.teamRosterId)
    .then(() => {
      teamRosterForm.value = store.getters.getTeamRoster
    })
    .catch(() => {
      notify({
        title: "Erreur",
        text: "Une erreur est survenue lors de la récupération de la sous-équipe",
        type: "error"
      });
    });
  }
})

function submitForm() {
  store.dispatch('createStructureRoster', teamRosterForm.value)
    .then(() => {
      notify({ type: 'success', text: props.teamRosterId ? 'Roster édité avec succès' : 'Roster créé avec succès'})
      close();
    })
    .catch(() => {
      notify({ type: 'error', text: 'Erreur lors de la création du roster' })
    })
}

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
  })
  .catch(() => {
    notify({
      type: 'error',
      title: 'Erreur',
      text: 'Une erreur est survenue lors de l\'invitation du joueur.'
    })
  });
  invitationStatus.value = 'success';
  setTimeout(() => {
    invitationStatus.value = '';
  }, 3000)
}
</script>