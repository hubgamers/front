<template>
  <DashboardLayout title="Mon profil" subtitle="Modifier vos informations">
    <PlayerModeComponent />
    <div class="row mt-10 gap-10">
      <SidebarOnPage :entity="store.getters.getUser" :tab-status="sideBarStatus" @changeSideBarStatus="changeSideBarStatus" :show-profile="true"  type-sidebar="profile"/>
      <div v-if="sideBarStatus == 'invitations'">
        <h3 class="text-2xl mt-5 mb-3">Invitations en attente</h3>
        <ul>
          <li class="mb-2" v-for="(invitation, key) in store.getters.getInvitationsByPlayerId.filter((invitation: any) => invitation.status == 'PENDING')" :key="key">
            <span>{{invitation.title}}</span>
            <div class="flex gap-1">
              <button class="info" @click="acceptInvitation(invitation.id)">Accepter</button>
              <button class="warning" @click="declineInvitation(invitation.id)">Refuser</button>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="sideBarStatus == 'notifications'">
        <h3>Notifications</h3>
      </div>
      <div v-if="sideBarStatus == 'messages'">
        <h3>Messages</h3>
      </div>
      <div v-if="sideBarStatus == 'gestion'">
        <h3>Gestion de mon compte</h3>
      </div>
    </div>
    
  </DashboardLayout>
</template>
<script setup lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue'
import { useStore } from 'vuex'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import SidebarOnPage from '@/components/SidebarOnPage.vue'
import { useRouter } from 'vue-router'
import PlayerModeComponent from '@/views/dashboard/components/PlayerModeComponent.vue'
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
function changeSideBarStatus(tab: string) {
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

function acceptInvitation(invitationId: string) {
  store.dispatch('acceptInvitation', invitationId)
}

function declineInvitation(invitationId: string) {
  store.dispatch('declineInvitation', invitationId)
}
</script>