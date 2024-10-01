<template>
  <Modal v-if="!isLoading" :title="teamRosterId ? 'Editer l\'équipe' : 'Créer une équipe'" @success="submitForm" :success-text-button="teamRosterId ? 'Editer l\'équipe' : 'Créer l\'équipe'" @close="close">
    <input-text v-model="teamRosterForm.name" label="Saisissez un nom pour votre équipe" placeholder="Vitality" required />
    <input-text v-model="teamRosterForm.description" type="textarea" label="Décrivez l'équipe" placeholder="Description..." required />
    <input-text v-model="teamRosterForm.gameId" type="select" :options="store.getters.getGames" label="Sélectionnez un jeu" placeholder="Sélectionnez un jeu" required />
    <input-text v-model="teamRosterForm.platformId" type="select" :options="store.getters.getPlatforms" label="Sélectionnez un jeu" placeholder="Sélectionnez un jeu" required />
 </Modal>
 <div v-else>
  <LoadingModal />
 </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { notify } from '@kyvg/vue3-notification'
import InputText from '@/components/InputText.vue'
import { onBeforeMount, ref } from 'vue'
import Modal from '../../components/Modal.vue';
import { useRoute } from 'vue-router';
import LoadingModal from '../../components/LoadingModal.vue';

const props = defineProps({
  teamRosterId: Object
})
const route = useRoute();
const store = useStore();
const teamRosterForm = ref({
  name: '',
  description: '',
  gameId: '',
  platformId: '',
  structureId: store.getters.getStructure.id
})

let isLoading = ref(true);
onBeforeMount(async () => {
  try {
    // Dispatch pour récupérer les jeux et plateformes
    await store.dispatch('getAllGames');
    await store.dispatch('getAllPlatforms');

    // Si un id est présent dans les paramètres de la route, récupérer la structure correspondante
    if (route.params && route.params.id) {
      await store.dispatch('getStructureById', route.params.id);
      const structure = store.getters.getStructure;
      if (structure) {
        teamRosterForm.value = {
          ...teamRosterForm.value,
          structureId: route.params.id,  // Assigner l'id de la structure
          description: structure.description,
          gameId: structure.game ? structure.game.id : '',  // Vérifier si le jeu est bien défini
          platformId: structure.platform ? structure.platform.id : ''  // Vérifier si la plateforme est bien définie
        };
      }
    }

    // Si un teamRosterId est passé via les props, récupérer la sous-équipe correspondante
    if (props.teamRosterId) {
      const teamRoster = await store.dispatch('getTeamRosterById', props.teamRosterId);
      if (teamRoster) {
        teamRosterForm.value = {
          ...teamRosterForm.value,
          id: teamRoster.id,
          name: teamRoster.name,
          description: teamRoster.description,
          gameId: teamRoster.game ? teamRoster.game.id : '',  // Assigner le gameId si présent
          platformId: teamRoster.platform ? teamRoster.platform.id : ''  // Assigner le platformId si présent
        };
      } else {
        notify({
          title: "Erreur",
          text: "Aucune sous-équipe trouvée avec cet ID.",
          type: "error"
        });
      }
    }
    isLoading.value = false;
  } catch (error) {
    notify({
      title: "Erreur",
      text: "Une erreur est survenue lors de la récupération des données.",
      type: "error"
    });
  }
});


function submitForm() {
  if (props.teamRosterId) {
    store.dispatch('updateTeamRoster', teamRosterForm.value)
    .then(() => {
      notify({ type: 'success', text: 'Roster édité avec succès'})
      close();
    })
    .catch(() => {
      notify({ type: 'error', text: 'Erreur lors de la modification du roster' })
    })
  } else {
    store.dispatch('createTeamRoster', teamRosterForm.value)
    .then(() => {
      notify({ type: 'success', text: 'Roster créé avec succès'})
      close();
    })
    .catch(() => {
      notify({ type: 'error', text: 'Erreur lors de la création du roster' })
    })
  }
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