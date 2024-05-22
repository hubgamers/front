<template>
  <div class="py-10 px-10">
    <Topbar title="Mon profil" subtitle="Modifier vos informations" />
    <div class="bg-gray-200 rounded-2xl p-4 mt-5" v-if="store.getters.getPlayer == null">
      <h3 class="text-2xl mb-3">Mode joueur</h3>
      <p>Vous pouvez activer le mode joueur afin d'être visible auprès des équipes pour recevoir des invitations.</p>
      <button class="info" @click="activatePlayerMode">Activer le mode joueur</button>
    </div>


    <h3 class="text-2xl mt-5 mb-3">Invitations en attente</h3>
    <ul>
      <li v-for="(invitation, key) in store.getters.getInvitationsByPlayerId.filter((invitation: any) => invitation.status == 'PENDING')" :key="key">
        <span>{{invitation.id}}</span>
        <div class="flex gap-1">
          <button class="info" @click="acceptInvitation(invitation.id)">Accepter</button>
          <button class="warning" @click="declineInvitation(invitation.id)">Refuser</button>
        </div>
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
  if (store.getters.getPlayer !== null) {
    await store.dispatch('getAllInvitationsbyPlayerId', store.getters.getPlayer.id)
  }
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

function declineInvitation(invitationId: string) {
  store.dispatch('declineInvitation', invitationId)
}
</script>