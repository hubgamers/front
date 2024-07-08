<template>
  <ModalComponent title="Inviter le joueur" subtitle="Sélectionnez ci-dessous une équipe et/ou un roster pour y inviter le joueur">
    <Table
      v-if="store.getters.getTeamRosters.length > 0"
      :columns="store.getters.getTeamRosterColumns.filter((column) => column !== 'paidType' && column !== 'tag' && column !== 'visibility')"
      :items="store.getters.getTeamRosters"
      type="teamRoster"
    />
  </ModalComponent>
</template>
<script setup>
import ModalComponent from '@/views/dashboard/components/Modal.vue'
import { useStore } from 'vuex'
import { notify } from '@kyvg/vue3-notification'
import Table from '@/views/dashboard/components/Table.vue'
import { ref } from 'vue'

const props = defineProps({
  playerId: String
})

const store = useStore();
let teamIdSelected = ref("");
let teamRosterIdSelected = ref("");
function recruitStaff() {
  store.dispatch('createInvitation', {
    userId: localStorage.getItem('userId'),
    playerId: props.playerId,
    teamId: teamIdSelected,
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

function recruitTeamRoster() {
  store.dispatch('createInvitation', {
    userId: localStorage.getItem('userId'),
    playerId: props.playerId,
    rosterId: teamRosterIdSelected,
    type: 'JOIN_TEAM_ROSTER',
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