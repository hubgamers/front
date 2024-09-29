<template>
  <Modal title="Créer une équipe" @success="submitForm" success-text-button="Créer l'équipe">
    <input-text v-model="teamRosterForm.name" label="Saisissez un nom pour votre équipe" placeholder="Vitality" required />
    <input-text v-model="teamRosterForm.description" type="textarea" label="Décrivez l'équipe" placeholder="Description..." required />
    <input-text v-model="teamRosterForm.gameId" type="select" :options="store.getters.getGames" label="Sélectionnez un jeu" placeholder="Sélectionnez un jeu" required />
    <input-text v-model="teamRosterForm.platformId" type="select" :options="store.getters.getPlatforms" label="Sélectionnez un jeu" placeholder="Sélectionnez un jeu" required />
 </Modal>
</template>
<script setup>
import { useStore } from 'vuex'
import { notify } from '@kyvg/vue3-notification'
import InputText from '@/components/InputText.vue'
import { onBeforeMount, ref } from 'vue'
import Modal from '../../components/Modal.vue';

const props = defineProps({
  teamRosterId: Object
})

const store = useStore();
const teamRosterForm = ref({
  name: '',
  description: '',
  gameId: '',
  platformId: '',
  structureId: store.getters.getStructure.id
})

store.dispatch('getAllGames')
store.dispatch('getAllPlatforms')
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
// let playerSearch = ref('');
// store.dispatch('getAllPlayers');
// if (props.teamRosterId) {
//   store.dispatch('getAllInvitationsByStructureId', props.teamRosterId);
// }
// store.dispatch('getInvitationColumns')
// function searchPlayer() {
//   store.dispatch('getPlayerByUsername', playerSearch.value);
// }
// let invitationStatus = ref('');
// async function recruitTeamRoster(playerId) {
//   invitationStatus.value = 'disabled';
//   await store.dispatch('createInvitation', {
//     playerId: playerId,
//     structureId: props.teamRosterId,
//     type: 'RECRUIT_PLAYER'
//   })
//   .then(() => {
//     notify({
//       type: 'success',
//       title: 'Invitation envoyée',
//       text: 'Le joueur a bien été invité dans le roster.'
//     })
//     store.dispatch('getAllInvitationsByStructureId', props.teamRosterId)
//   })
//   .catch(() => {
//     notify({
//       type: 'error',
//       title: 'Erreur',
//       text: 'Une erreur est survenue lors de l\'invitation du joueur.'
//     })
//   });
//   invitationStatus.value = 'success';
//   setTimeout(() => {
//     invitationStatus.value = '';
//   }, 3000)
// }
</script>