<template>
  <DashboardLayout>
    <div v-if="store.getters.getStructure !== null">
      <div class="relative images">
        <img class="relative banner w-full object-cover rounded-b" :src="(store.getters.getStructure.banner !== null && store.getters.getStructure.banner !== '') ? store.getters.getStructure.banner : 'https://picsum.photos/1000/800'" alt="banner">
        <img class="absolute logo bottom-0 left-0" :src="(store.getters.getStructure.logo !== null && store.getters.getStructure.logo !== '') ? store.getters.getStructure.logo : 'https://picsum.photos/300/300'" alt="logo">
      </div>
      <div class="py-3 px-3 div-max-100-vh">
        <h1 class="mt-3 mb-1">{{store.getters.getStructure.name}}</h1>
        <p>{{store.getters.getStructure.description}}</p>
        <nav class="tabs border-b text-sm flex justify-start">
          <span :class="tabStatus === 'palmarès' ? 'active' : ''" @click="changeTabStatus('palmarès')">Palmarès</span>
          <span v-if="haveAccess" :class="tabStatus === 'composition' ? 'active' : ''" @click="changeTabStatus('composition')">Composition</span>
          <span v-if="haveAccess" :class="tabStatus === 'invitations' ? 'active' : ''" @click="changeTabStatus('invitations')">Invitations</span>
          <span :class="tabStatus === 'tournois' ? 'active' : ''" @click="changeTabStatus('tournois')">Tournois</span>
          <span v-if="haveAccess" :class="tabStatus === 'gestion' ? 'active' : ''" @click="changeTabStatus('gestion')">Gestion</span>
          <span v-if="haveAccess" :class="tabStatus === 'edit' ? 'active' : ''" @click="changeTabStatus('edit')">Editer la structure <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
        </nav>

        <div v-if="tabStatus === 'palmarès'">
          <Topbar title="Palmarès de la structure" subtitle="Historique d'activité" class="mb-10" />
          <p>Aucun palmarès pour le moment.</p>
        </div>
        <div v-if="tabStatus === 'composition'">
          <Topbar title="Composition de la structure" subtitle="Des joueurs au staff" class="mb-10" />
          <p>Vous pouvez ajouter des utilisateurs parmis la liste ci-dessous afin qu'ils puissent gérer votre structure.</p>
          <br>
          <h3 class="text-2xl mt-5 mb-3">Staff</h3>
          <ul v-if="store.getters.getStructure.users != null && store.getters.getStructure.users.length > 0">
            <li v-for="(user, index) in store.getters.getStructure.users" :key="index">
              <span>{{user.username}}</span>
            </li>
          </ul>
          <p v-else>Aucun staff dans la structure. Vous pouvez inviter des utilisateurs en cliquant sur l'onglet "Invitations".</p>
          <h3 class="text-2xl mt-5 mb-3">Mes rosters</h3>
          <Table
            v-if="store.getters.getTeamRosters.length > 0" 
            :columns="store.getters.getTeamRosterColumns.filter((column) => column !== 'paidType' && column !== 'tag' && column !== 'visibility')" 
            :items="store.getters.getTeamRosters" 
            type="teamRoster"
            @edit="openTeamRoster"
          />
          <button class="info mt-3" @click="openTeamRoster">Créer un roster</button>
        </div>
        <div v-if="tabStatus === 'invitations'">
          <Topbar title="Invitations" subtitle="Retrouvez toutes les invitations" class="mb-10" />
          <Table :columns="store.getters.getInvitationColumns.filter((column) => column !== 'type' && column !== 'structureId')" :items="store.getters.getInvitationsByTeamId" type="invitation" />
          <form class="mt-10">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <input-text v-model:model-value="playerSearch" label="Recherche" placeholder="Rechercher une structure" required />
              <button @click="searchPlayer" class="info">Rechercher</button>
              <ul class="row gap-1 table-odd">
                <li v-for="(player, key) in store.getters.getPlayers" :key="key" class="row items-center gap-1">
                  <span>{{player.username}}</span>
                  <button :class="invitationStatus === 'success' ? 'green' : 'info'" :disabled="invitationStatus !== ''" @click.prevent="recruitStaff(player.id)">Inviter</button>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div v-if="tabStatus === 'tournois'">
          <Topbar title="Tournois terminés" subtitle="Historique des tournois" class="mb-10" />
          <p>Aucun tournoi joué avec cette structure.</p>
        </div>
        <div v-if="tabStatus === 'gestion'">
          <Topbar title="Gestion de la structure" subtitle="Modifier votre structure" class="mb-10" />
          <div class="flex mt-10 gap-10">
            <SidebarOnPage :entity="store.getters.getStructure" :tab-status="sideBarStatus" @changeSideBarStatus="changeSideBarStatus"  type-sidebar="team"/>
            <div v-if="sideBarStatus === 'tournaments_registrations'">
              <h3 class="text-2xl mt-5 mb-3">Inscriptions aux tournois</h3>
              <p>Retrouvez prochainement vos anciennes, présentes et futures inscriptions aux tournois.</p>
            </div>
            <div v-if="sideBarStatus === 'messages'">
              <h3 class="text-2xl mt-5 mb-3">Messages</h3>
              <p>Retrouvez prochainement le centre des messages entre le personnel et les joueurs de la structure.</p>
            </div>
            <div v-if="sideBarStatus === 'configuration'">
              <h3 class="text-2xl mt-5 mb-3">Configuration</h3>
              <p>Editer les informations générales de votre structure ainsi que le logo et la bannière en cliquant sur le bouton ci-dessous.</p>
              <button class="info mt-1">
                <RouterLink :to="'/dashboard/structures/edit/' + store.getters.getStructure.id">Editer</RouterLink>
              </button>
            </div>
            <div v-if="sideBarStatus === 'dangerous_area'">
              <h3 class="text-2xl mt-5 mb-3">Zone dangereuse</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CreateRosterModal v-if="showTeamRoster" @close="closeTeamRoster" :team-roster-id="teamRosterId" />
  </DashboardLayout>
</template>
<script setup>
import Topbar from '@/views/dashboard/components/Topbar.vue'
import { useStore } from 'vuex'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { defineComponent, onBeforeMount, ref, watchEffect } from 'vue'
import InputText from '@/components/InputText.vue'
import Table from '@/views/dashboard/components/Table.vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import SidebarOnPage from '@/views/dashboard/components/SidebarOnPage.vue'
import { useNotification } from '@kyvg/vue3-notification'
import CreateRosterModal from '@/views/dashboard/structures/modal/CreateRosterModal.vue'

defineComponent({
  name: 'TeamDetailPage'
})

const store = useStore();
const params = useRoute().params;
const { notify } = useNotification();
const router = useRouter()
let teamForm = ref({
  name: '',
  description: '',
  game: '',
  platform: ''
});

let haveAccess = ref(false);
onBeforeMount(() => {
  if (params && params.id) {
    store.dispatch('getStructureById', params.id)
    teamForm.value = store.getters.getStructure
  }
})

watchEffect(() => {
  if (store.getters.getUser && store.getters.getStructure) {
    if (store.getters.getStructure.users != null && store.getters.getStructure.users.length > 0) {
      haveAccess.value = store.getters.getStructure.users.some(user => user.id === store.getters.getUser.id)
    }
    if (!haveAccess.value) {
      haveAccess.value = store.getters.getStructure.organizerId === store.getters.getUser.id
    }
  }
})

onBeforeRouteLeave(() => {
  store.dispatch('resetStructure')
})

store.dispatch('getTeamRosterColumns')
store.dispatch('getAllTeamRostersByStructureId', params.id)

// TODO: faire la gestion des onglets avec tab=... dans l'url
let tabStatus = ref('palmarès')
function changeTabStatus(tab) {
  tabStatus.value = tab
  if (tab === 'edit') {
    router.push({name: 'EditTeam', params: { id: params.id }});
  }
}

let sideBarStatus = ref('')
if (router.currentRoute.value.query.tab) {
  // @ts-ignore
  sideBarStatus.value = router.currentRoute.value.query.tab
}
function changeSideBarStatus(tab) {
  sideBarStatus.value = tab
  router.push({ query: { tab: tab } })
}

// Feat : ajout de joueur à une structure
let playerSearch = ref('');
store.dispatch('getAllPlayers');
store.dispatch('getAllInvitationsByStructureId', params.id);
store.dispatch('getInvitationColumns')
function searchPlayer() {
  store.dispatch('getPlayerByUsername', playerSearch.value);
}
let invitationStatus = ref('');
async function recruitStaff(playerId) {
  invitationStatus.value = 'disabled';
  await store.dispatch('createInvitation', {
    playerId: playerId,
    structureId: params.id,
    type: 'RECRUIT_STAFF'
  })
    .then(() => {
      notify({
        type: 'success',
        title: 'Invitation envoyée',
        text: 'L\'utilisateur a bien été invité dans staff.'
      })
      store.dispatch('getAllInvitationsByStructureId', params.id)
    })
    .catch(() => {
      notify({
        type: 'error',
        title: 'Erreur',
        text: 'Une erreur est survenue lors de l\'invitation de l\'utilisateur.'
      })
    });
  invitationStatus.value = 'success';
  setTimeout(() => {
    invitationStatus.value = '';
  }, 3000)
}

let showTeamRoster = ref(false);
let teamRosterId = ref(null);
function openTeamRoster(id) {
  if (typeof id === 'number') {
    teamRosterId.value = id;
  }
  showTeamRoster.value = true;
}

function closeTeamRoster() {
  showTeamRoster.value = false;
  store.dispatch('getAllTeamRostersByStructureId', params.id)
}
</script>

<style lang="scss" scoped>
.images {
  .banner {
    max-height: 20vh;
    @media screen and (min-width: 768px){
      max-height: 500px;
    }
  }
  .logo {
    max-height: 100px;
    max-width: 100px;
    @media screen and (min-width: 768px){
      max-height: 300px;
      max-width: 300px;
    }
  }
}

h2 {
  font-size: 1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
}

.div-max-100-vh div {
  max-width: 100vw;
}
</style>