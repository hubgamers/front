<template>
  <DashboardLayout>
    <div v-if="store.getters.getTournament !== null">
    <div v-if="store.getters.getTournament.banner || store.getters.getTournament.logo" class="relative">
      <img v-if="store.getters.getTournament.banner" class="relative max-h-[300px] w-full object-cover rounded-b" :src="store.getters.getTournament.banner" alt="banner">
      <img v-if="store.getters.getTournament.logo" class="absolute bottom-0 left-0 max-h-[300px] max-w-[300px]" :src="store.getters.getTournament.logo" alt="logo">
    </div>
    <div class="py-10 px-10">
      <Topbar :title="store.getters.getTournament.name" />
      <div class="flex flex-row">
        <span v-if="store.getters.getGames && store.getters.getGames.filter(game => game.id === parseInt(store.getters.getTournament.game))[0]" class="bg-blue-100 text-blue-800 text-base font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"><i class="fa-solid fa-gamepad"></i> {{store.getters.getGames.filter(game => game.id === parseInt(store.getters.getTournament.game))[0].name }}</span>
        <span class="bg-blue-100 text-blue-800 text-base font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"><i class="fa-solid fa-laptop"></i> {{ store.getters.getTournament.platform }}</span>
      </div>

      <p class="text-2xl">{{formatDate(store.getters.getTournament.startDate, 'DD/MM/YYYY hh:mm') + ' - ' + formatDate(store.getters.getTournament.endDate, 'DD/MM/YYYY hh:mm')}}</p>

      <nav class="tabs border-b text-sm flex justify-start mt-4">
        <span :class="tabStatus === 'infos' ? 'active' : ''" @click="changeTabStatus('infos')">Informations</span>
        <span :class="tabStatus === 'rules' ? 'active' : ''" @click="changeTabStatus('rules')">Règlement</span>
        <span :class="tabStatus === 'participants' ? 'active' : ''" @click="changeTabStatus('participants')">Participants</span>
        <span v-if="haveAccess" :class="tabStatus === 'gestion' ? 'active' : ''" @click="changeTabStatus('gestion')">Gestion</span>
        <span v-if="haveAccess" :class="tabStatus === 'edit' ? 'active' : ''" @click="changeTabStatus('edit')">Editer le tournoi <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
      </nav>

      <div v-if="tabStatus === 'infos'">
        <Topbar title="Informations générales" subtitle="" class="mb-10" />
        <p>{{store.getters.getTournament.description}}</p>
      </div>
      <div v-if="tabStatus === 'rules'">
        <Topbar title="Règlement" subtitle="" class="mb-10" />
        <p>{{store.getters.getTournament.rules}}</p>
      </div>
      <div v-if="tabStatus === 'participants'">
        <Topbar title="Participants" subtitle="" class="mb-10" />
        <p>{{store.getters.getTournament.participants.length}} participant(s).</p>
      </div>
      <div v-if="tabStatus === 'gestion'">
        <Topbar title="Gestion" subtitle="" class="mb-10" />
        <div class="flex mt-10 gap-10">
          <SidebarOnPage :entity="store.getters.getTournament" :tab-status="sideBarStatus" @changeSideBarStatus="changeSideBarStatus"  type-sidebar="tournament"/>
          <div v-if="sideBarStatus === 'tournaments_registrations'">
            <h3>Inscriptions aux tournois</h3>
            <p>Retrouvez prochainement les inscriptions à vos tournois.</p>
          </div>
          <div v-if="sideBarStatus === 'messages'">
            <h3>Messages</h3>
            <p>Prochainement, retrouvez une messagerie interne pour votre tournoi.</p>
          </div>
          <div v-if="sideBarStatus === 'compositon'">
            <h3 class="text-2xl mt-5 mb-3">Composition</h3>
            <ul v-if="store.getters.getTournament.participants != null && store.getters.getTournament.participants.length > 0">
              <li v-for="(participant, index) in store.getters.getTournament.participants" :key="index">
                <template v-if="participant.team != null">
                  <span>{{participant.team.name}}</span>
                </template>
                <template v-if="participant.player != null">
                  <span>{{participant.player.name}}</span>
                </template>
              </li>
            </ul>
            <p v-else>Aucun participant</p>
            <h3 class="text-2xl mt-5 mb-3">Invitations</h3>
            <Table :columns="store.getters.getInvitationColumns.filter((column) => column !== 'type' && column !== 'teamId')" :items="store.getters.getInvitationsByTeamId" url="/dashboard/structures/invitations/" />
          </div>
          <div v-if="sideBarStatus === 'configuration'">
            <h3 class="text-2xl mt-5 mb-3">Configuration</h3>
            <form @submit.prevent="updateTournament" class="mt-10">
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <input-text v-model="tournamentForm.name" label="Nom" placeholder="Les p't" />
                <input-text v-model="tournamentForm.tournamentType" type="select" label="Sélectionner le type" placeholder="Les p't">
                  <option value="TOURNAMENT">Tournoi</option>
                  <option value="LEAGUE">League</option>
                  <option value="LADDER">Ladder</option>
                </input-text>
                <input-text v-model="tournamentForm.description" type="textarea" label="Description" placeholder="Les p't" />
                <input-text v-model="tournamentForm.rules" type="textarea" label="Règes" placeholder="Les p't" />
                <input-text v-model="tournamentForm.startDate" type="datetime-local" label="Date de début" placeholder="Les p't" />
                <input-text v-model="tournamentForm.endDate" type="datetime-local" label="Date de fin" placeholder="Les p't" />
                <input-text v-model="tournamentForm.game" label="Jeu" placeholder="Les p't" />
                <input-text v-model="tournamentForm.platform" type="select" label="Sélectionner la plateforme" placeholder="Les p't">
                  <option value="PS4">PS4</option>
                  <option value="PS5">PS5</option>
                  <option value="XBOX">XBOX</option>
                  <option value="Switch">Switch</option>
                  <option value="PC">PC</option>
                </input-text>
                <button class="info">Modifier</button>
              </div>
            </form>
          </div>
          <div v-if="sideBarStatus === 'dangerous_area'">
            <h3>Zone dangereuse</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  </DashboardLayout>
</template>
<script setup>
import Topbar from '@/views/dashboard/components/Topbar.vue'
import { defineComponent, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import moment from 'moment';
import InputText from '@/components/InputText.vue'
import Table from '@/views/dashboard/components/Table.vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import SidebarOnPage from '@/views/dashboard/components/SidebarOnPage.vue'

defineComponent({
  name: 'TournamentDetailPage'
})

const store = useStore();
const params = useRoute().params;
let tournamentForm = ref({
  name: '',
  description: '',
  rules: '',
  startDate: '',
  endDate: '',
  game: '',
  platform: '',
  logo: '',
  banner: '',
  tournamentType: ''
});
if (params && params.id) {
  store.dispatch('getTournamentById', params.id)
  tournamentForm.value = store.getters.getTournament;
}

let haveAccess = ref(false);
watchEffect(() => {
  if (store.getters.getUser && store.getters.getTournament) {
    if (!haveAccess.value) {
      haveAccess.value = store.getters.getTournament.organizerId === store.getters.getUser.id
    }
  }
})

store.dispatch('getAllGames')

// TODO: faire la gestion des onglets avec tab=... dans l'url
let tabStatus = ref('rules')
function changeTabStatus(tab) {
  tabStatus.value = tab
  if (tab === 'edit') {
    router.push({name: 'EditTournament', params: { id: params.id }});
  }
}

function formatDate(date, formatDate= 'yyyy-MM-dd') {
  return moment(date).format(formatDate)
}

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

function updateTournament() {
  store.dispatch('updateTournament', tournamentForm.value)
}
</script>