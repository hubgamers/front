<template>
  <DashboardLayout>
    <div v-if="store.getters.getTeam !== null">
      <div v-if="store.getters.getTeam.banner || store.getters.getTeam.logo" class="relative">
        <img v-if="store.getters.getTeam.banner" class="relative max-h-[300px] w-full object-cover rounded-b" :src="store.getters.getTeam.banner" alt="banner">
        <img v-if="store.getters.getTeam.logo" class="absolute bottom-0 left-0 max-h-[300px] max-w-[300px]" :src="store.getters.getTeam.logo" alt="logo">
      </div>
      <div class="py-10 px-10">
        <h1>{{store.getters.getTeam.name}}</h1>
        <p>{{store.getters.getTeam.description}}</p>
        <nav class="tabs border-b text-sm flex justify-start">
          <span :class="tabStatus == 'palmarès' ? 'active' : ''" @click="changeTabStatus('palmarès')">Palmarès</span>
          <span :class="tabStatus == 'composition' ? 'active' : ''" @click="changeTabStatus('composition')">Composition</span>
          <span :class="tabStatus == 'tournois' ? 'active' : ''" @click="changeTabStatus('tournois')">Tournois</span>
          <span :class="tabStatus == 'gestion' ? 'active' : ''" @click="changeTabStatus('gestion')">Gestion</span>
        </nav>

        <div v-if="tabStatus == 'palmarès'">
          <Topbar title="Palmarès de l'équipe" subtitle="Historique d'activité" class="mb-10" />
        </div>
        <div v-if="tabStatus == 'composition'">
          <Topbar title="Composition de l'équipe" subtitle="Des joueurs au staff" class="mb-10" />
          <ul v-if="store.getters.getTeam.players != null && store.getters.getTeam.players.length > 0">
            <li v-for="(player, index) in store.getters.getTeam.players" :key="index">
              <span>{{player.username}}</span>
            </li>
          </ul>
          <div v-else>
            <p>Aucun joueur dans l'équipe.</p>
            <button class="info">Ajouter des joueurs</button>
          </div>
        </div>
        <div v-if="tabStatus == 'tournois'">
          <Topbar title="Tournois terminés" subtitle="Historique des tournois" class="mb-10" />
        </div>
        <div v-if="tabStatus == 'gestion'">
          <Topbar title="Gestion de l'équipe" subtitle="Modifier votre équipe" class="mb-10" />
          <div class="flex mt-10 gap-10">
            <SidebarOnPage :entity="store.getters.getTeam" :tab-status="sideBarStatus" @changeSideBarStatus="changeSideBarStatus"  type-sidebar="team"/>
            <div v-if="sideBarStatus == 'tournaments_registrations'">
              <h3>Inscriptions aux tournois</h3>
            </div>
            <div v-if="sideBarStatus == 'messages'">
              <h3>Messages</h3>
            </div>
            <div v-if="sideBarStatus == 'compositon'">
              <h3 class="text-2xl mt-5 mb-3">Composition</h3>
              <ul v-if="store.getters.getTeam.players != null && store.getters.getTeam.players.length > 0">
                <li v-for="(player, index) in store.getters.getTeam.players" :key="index">
                  <span>{{player.username}}</span>
                </li>
              </ul>
              <p v-else>Aucun joueur dans l'équipe. Vous pouvez inviter des joueurs ci-dessous.</p>
              <h3 class="text-2xl mt-5 mb-3">Invitations</h3>
              <Table :columns="store.getters.getInvitationColumns.filter((column: any) => column !== 'type' && column !== 'teamId')" :items="store.getters.getInvitationsByTeamId" url="/dashboard/teams/invitations/" />
              <form class="mt-10">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <input-text v-model:model-value="playerSearch" label="Recherche" placeholder="Rechercher une équipe" required />
                  <button @click="searchPlayer" class="info">Rechercher</button>
                  <ul class="row gap-1 table-odd">
                    <li v-for="(player, key) in store.getters.getPlayers" :key="key" class="row items-center gap-1">
                      <span>{{player.username}}</span>
                      <button :class="invitationStatus == 'success' ? 'green' : 'info'" :disabled="invitationStatus !== ''" @click.prevent="invitePlayer(player.id)">Inviter</button>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
            <div v-if="sideBarStatus == 'configuration'">
              <h3 class="text-2xl mt-5 mb-3">Configuration</h3>
              <form @submit.prevent="updateTeam" class="mt-10">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <input-text v-model="teamForm.name" label="Nom" placeholder="Les p't" />
                  <input-text v-model="teamForm.description" type="textarea" label="Description" placeholder="Saisissez une description" />
                  <input-text v-model="teamForm.game" label="Jeu" placeholder="Rainbow Six Siege" />
                  <input-text v-model="teamForm.platform" label="Plateforme" placeholder="PC" />
                  <input-text type="file" label="Bannière" @uploadFile="uploadTeamBanner" />
                  <input-text type="file" label="Logo" @uploadFile="uploadTeamLogo" />
                  <button class="info">Modifier</button>
                </div>
              </form>
            </div>
            <div v-if="sideBarStatus == 'dangerous_area'">
              <h3>Zone dangereuse</h3>
            </div>
          </div>
        </div>

        <!--      <h3 class="text-2xl font-bold mt-10 mb-5">Membres de l'équipe</h3>-->
        <!--      <div class="flex flex-row justify-between">-->
        <!--        <CardComponent v-for="(player, playerKey) in store.getters.getTeam.players" :key="playerKey" :titleCard="player.username" :image="store.getters.getTeam.logo" :link="'/dashboard/players/' + player.id" linkText="Détails du joueur" />-->
        <!--      </div>-->
      </div>
    </div>
  </DashboardLayout>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { defineComponent, defineProps, ref } from 'vue'
import InputText from '@/components/InputText.vue'
import Table from '@/components/Table.vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import SidebarOnPage from '@/components/SidebarOnPage.vue'
import { useNotification } from '@kyvg/vue3-notification'

defineComponent({
  name: 'TeamDetailPage'
})

defineProps({
  team: Object
})

const store = useStore();
const params = useRoute().params;
const { notify } = useNotification();
let teamForm = ref({
  name: '',
  description: '',
  game: '',
  platform: ''
});
if (params && params.id) {
  store.dispatch('getTeamById', params.id)
  teamForm.value = store.getters.getTeam
}

// TODO: faire la gestion des onglets avec tab=... dans l'url
let tabStatus = ref('palmarès')
function changeTabStatus(tab: string) {
  tabStatus.value = tab
}

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

// Feat : ajout de joueur à une équipe
let playerSearch = ref('');
store.dispatch('getAllPlayers');
store.dispatch('getAllInvitationsByTeamId', params.id);
store.dispatch('getInvitationColumns')
function searchPlayer() {
  store.dispatch('getPlayerByUsername', playerSearch.value);
}
let invitationStatus = ref('');
async function invitePlayer(playerId: string) {
  console.log('add player')
  invitationStatus.value = 'disabled';
  await store.dispatch('createInvitation', {
    playerId: playerId,
    teamId: params.id,
    type: 'RECRUIT_PLAYER'
  })
    .then(() => {
      notify({
        type: 'success',
        title: 'Invitation envoyée',
        text: 'Le joueur a bien été invité dans votre équipe.'
      })
      store.dispatch('getAllInvitationsByTeamId', params.id)
    })
    .catch(() => {
      notify({
        type: 'error',
        title: 'Erreur',
        text: 'Une erreur est survenue lors de l\'invitation du joueur.'
      })
    });
  invitationStatus.value = 'success';
  setTimeout(() => {
    invitationStatus.value = '';
  }, 3000)
}

// Feat : modification de l'équipe
function updateTeam() {
  store.dispatch('updateTeam', {
    id: params.id,
    name: teamForm.value.name,
    description: teamForm.value.description,
    game: teamForm.value.game,
    platform: teamForm.value.platform
  })
    .then(() => {
      notify({
        type: 'success',
        title: 'Équipe modifiée',
        text: 'Votre équipe a bien été modifiée.'
      })
    })
    .catch(() => {
      notify({
        type: 'error',
        title: 'Erreur',
        text: 'Une erreur est survenue lors de la modification de votre équipe.'
      })
    });
}

function uploadTeamBanner(e: any) {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length)
    return;
  store.dispatch('uploadTeamBanner', {
    teamId: params.id,
    file: files[0]
  })
    .then(() => {
      notify({
        type: 'success',
        title: 'Bannière modifiée',
        text: 'La bannière de votre équipe a bien été modifiée.'
      })
    })
    .catch(() => {
      notify({
        type: 'error',
        title: 'Erreur',
        text: 'Une erreur est survenue lors de la modification de la bannière de votre équipe.'
      })
    });
}

function uploadTeamLogo(e: any) {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length)
    return;
  store.dispatch('uploadTeamLogo', {
    teamId: params.id,
    file: files[0]
  })
    .then(() => {
      notify({
        type: 'success',
        title: 'Logo modifié',
        text: 'Le logo de votre équipe a bien été modifié.'
      })
    })
    .catch(() => {
      notify({
        type: 'error',
        title: 'Erreur',
        text: 'Une erreur est survenue lors de la modification du logo de votre équipe.'
      })
    });
}
</script>