<template>
  <div class="bg-gray-200 rounded-2xl p-4 mt-5" v-if="store.getters.getPlayer == null">
    <h3 class="text-2xl mb-3">Mode joueur</h3>
    <p>Vous pouvez activer le mode joueur afin d'être visible auprès des équipes pour recevoir des invitations.</p>
    <fwb-button color="default" @click="activatePlayerMode">Activer le mode joueur</fwb-button>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useNotification } from '@kyvg/vue3-notification'
import { FwbButton } from 'flowbite-vue'

defineComponent({
  name: 'PlayerModeComponent'
})

const store = useStore();
const { notify }  = useNotification()

async function activatePlayerMode() {
  let player = {
    userId: store.getters.getUser.id,
    username: store.getters.getUser.username
  }
  store.dispatch('createPlayer', player)
    .then(() => {
      notify({
        type: 'success',
        title: 'Mode joueur activé',
        text: 'Vous êtes désormais visible auprès des équipes pour recevoir des invitations.'
      })
      store.dispatch('getUserById', localStorage.getItem('userId'))
      store.dispatch('getProductByUser')
    })
    .catch(() => {
      notify({
        type: 'error',
        title: 'Erreur',
        text: 'Une erreur est survenue lors de l\'activation du mode joueur.'
      })
    });
}
</script>