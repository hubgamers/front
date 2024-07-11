<template>
  <DashboardLayout title="Mon profil" subtitle="Modifier vos informations">
    <PlayerModeComponent />
    <div class="row mt-10 gap-10">
      <SidebarOnPage :entity="store.getters.getUser" :tab-status="sideBarStatus" @changeSideBarStatus="changeSideBarStatus" :show-profile="true"  type-sidebar="profile"/>
      <div v-if="sideBarStatus == 'invitations'">
        <h3 class="text-2xl mt-5 mb-3">Invitations en attente</h3>
        <ul v-if="store.getters.getInvitationsByPlayerId.length > 0">
          <li class="mb-2" v-for="(invitation, key) in store.getters.getInvitationsByPlayerId.filter((invitation) => invitation.status == 'PENDING')" :key="key">
            <span>{{invitation.title}}</span>
            <div class="flex gap-1">
              <button class="info" @click="acceptInvitation(invitation.id)">Accepter</button>
              <button class="warning" @click="declineInvitation(invitation.id)">Refuser</button>
            </div>
          </li>
        </ul>
        <p v-else>Vous n'avez pas d'invitation en attente. Revenez plus tard.</p>
      </div>
      <div v-if="sideBarStatus == 'notifications'">
        <h3 class="text-2xl mt-5 mb-3">Notifications</h3>
        <p>Prochainement, retrouvez l'ensemble de vos notifications.</p>
      </div>
      <div v-if="sideBarStatus == 'messages'">
        <h3 class="text-2xl mt-5 mb-3">Messages</h3>
        <p>Prochainement, retrouvez l'ensemble de vos messages.</p>
      </div>
      <div v-if="sideBarStatus == 'gestion'">
        <h3 class="text-2xl mt-5 mb-3">Gestion de mon compte</h3>
        <form>
          <div v-if="store.getters.getUser.avatar" class="max-w-96">
            <img :src="store.getters.getUser.avatar" alt="Avatar">
          </div>
          <input-text label="Avatar" type="file" @uploadFile="uploadAvatar" />
          <input-text v-model="userForm.username" label="Nom d'utilisateur" :disabled="true" />
          <input-text v-model="userForm.email" label="Adresse mail" :disabled="true" />
        </form>
      </div>
      <div v-if="sideBarStatus == 'dangerous_area'">
        <h3 class="text-2xl mt-5 mb-3">Zone dangereuse</h3>
        <p>Si vous souhaitez supprimer votre compte, cliquez sur le bouton ci-dessous.</p>
        <button class="warning">Supprimer mon compte</button>
      </div>
    </div>
    
  </DashboardLayout>
</template>
<script setup>
import { defineComponent, onBeforeMount, ref } from 'vue'
import { useStore } from 'vuex'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import SidebarOnPage from '@/views/dashboard/components/SidebarOnPage.vue'
import { useRouter } from 'vue-router'
import PlayerModeComponent from '@/views/dashboard/components/PlayerModeComponent.vue'
import InputText from '@/components/InputText.vue'
import { notify } from '@kyvg/vue3-notification'
defineComponent({
  name: 'ProfilePage'
})

const router = useRouter()
let sideBarStatus = ref('')
if (router.currentRoute.value.query.tab) {
  // @ts-ignore
  sideBarStatus.value = router.currentRoute.value.query.tab
} else {
  sideBarStatus.value = 'invitations'
}
function changeSideBarStatus(tab) {
  sideBarStatus.value = tab
  router.push({ query: { tab: tab } })
}

const store = useStore();
store.dispatch('getUserById', localStorage.getItem('userId'))
onBeforeMount(async () => {
  await store.dispatch('getPlayerByUserId', localStorage.getItem('userId'))
  if (store.getters.getPlayer !== null) {
    await store.dispatch('getAllInvitationsbyPlayerId', store.getters.getPlayer.id)
  }
})

function acceptInvitation(invitationId) {
  store.dispatch('acceptInvitation', invitationId)
}

function declineInvitation(invitationId) {
  store.dispatch('declineInvitation', invitationId)
}

const userForm = ref({
  email: '',
  username: ''
})
store.dispatch('getUserById', localStorage.getItem('userId'))
if (userForm.value) {
  userForm.value = store.getters.getUser
}

function uploadAvatar(e) {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length)
    return;
  store.dispatch('uploadAvatar', {
    file: files[0]
  })
    .then(() => {
      notify({
        title: "Mis à jour",
        text: "Votre avatar a été mise à jour avec succès",
        type: "success"
      });
    })
    .catch(() => {
      notify({
        title: "Erreur",
        text: "Une erreur est survenue lors de la mise à jour de l'avatar",
        type: "error"
      });
    });
}
</script>