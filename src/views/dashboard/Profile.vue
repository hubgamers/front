<template>
  <div class="py-10 px-10">
    <Topbar title="Mon profil" subtitle="Modifier vos informations" />
    <!-- TODO : activer profil joueur afin de pouvoir recevoir des invitations -->
    <h3>Mode joueur</h3>
    <p>Vous pouvez activer le mode joueur afin d'être visible auprès des équipes pour recevoir des invitations.</p>
    <button class="info" @click="activatePlayerMode">Activer le mode joueur</button>
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'

import { defineComponent } from 'vue'
import { useStore } from 'vuex'
defineComponent({
  name: 'ProfilePage'
})

const store = useStore();
async function activatePlayerMode() {
  await store.dispatch('getUserById', localStorage.getItem('userId'))
  let player = {
    userId: store.getters.getUser.id,
    username: store.getters.getUser.username
  }
  store.dispatch('createPlayer', player)
}
</script>