<template>
  <div class="py-10 px-10">
    <Topbar title="Mon profil" subtitle="Modifier vos informations" />
    <!-- TODO : activer profil joueur afin de pouvoir recevoir des invitations -->
    <h3>Mode joueur</h3>
    <p>Vous pouvez activer le mode joueur afin d'être visible auprès des équipes pour recevoir des invitations.</p>
    <button class="info" @click="activatePlayerMode">Activer le mode joueur</button>

    <h3>Invitations reçues</h3>
    <ul>
      <li v-for="(invitation, key) in store.getters.getInvitationsByPlayerId" :key="key">
        <span>{{invitation.id}} <button class="info" @click="acceptInvitation(invitation.id)">Accepter</button></span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'

import { defineComponent, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
defineComponent({
  name: 'ProfilePage'
})

const store = useStore();
onBeforeMount(async () => {
  await store.dispatch('getPlayerByUserId', localStorage.getItem('userId'))
  await store.dispatch('getAllInvitationsbyPlayerId', store.getters.getPlayer.id)
})
async function activatePlayerMode() {
  await store.dispatch('getUserById', localStorage.getItem('userId'))
  let player = {
    userId: store.getters.getUser.id,
    username: store.getters.getUser.username
  }
  store.dispatch('createPlayer', player)
}

function acceptInvitation(invitationId: string) {
  store.dispatch('acceptInvitation', invitationId)
}
</script>