<template>
  <ModalComponent title="Rejoindre une équipe" subtitle="Vous pouvez rejoindre une équipe en cliquant sur le bouton ci-dessous">
    <button class="info" @click="joinTeam">Rejoindre le staff</button>
  </ModalComponent>
</template>
<script setup>
import ModalComponent from '@/views/dashboard/components/Modal.vue'
import { useStore } from 'vuex'
import { notify } from '@kyvg/vue3-notification'

const props = defineProps({
  teamId: String
})

const store = useStore();

function joinTeam() {
  store.dispatch('createInvitation', {
    userId: localStorage.getItem('userId'),
    teamId: props.teamId,
    type: 'JOIN_STAFF'
  })
  .then(() => {
    notify({
      type: 'success',
      title: 'Demande envoyée',
      text: 'La demande a bien été envoyée à l\'équipe.'
    })
  })
  .catch(() => {
    notify({
      type: 'error',
      title: 'Erreur',
      text: 'Une erreur est survenue lors de la demande de rejoindre l\'équipe.'
    })
  });
}
</script>