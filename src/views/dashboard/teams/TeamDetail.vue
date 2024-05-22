<template>
  <div v-if="store.getters.getTeam !== null">
    <div v-if="store.getters.getTeam.banner || store.getters.getTeam.logo" class="relative">
      <img v-if="store.getters.getTeam.banner" class="relative max-h-[300px] w-full object-cover rounded-b" :src="store.getters.getTeam.banner" alt="banner">
      <img v-if="store.getters.getTeam.logo" class="absolute bottom-0 left-0 max-h-[300px] max-w-[300px]" :src="store.getters.getTeam.logo" alt="logo">
    </div>
    <div class="py-10 px-10">
      <h1>{{store.getters.getTeam.name}}</h1>
      <p>{{store.getters.getTeam.description}}</p>
      <nav class="border-b text-sm flex justify-start">
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
          <SidebarOnTeamDetails :team="store.getters.getTeam" :tab-status="sideBarStatus" @changeSideBarStatus="changeSideBarStatus" />
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
            <h3 class="text-2xl mt-5 mb-3">Invitations</h3>
            <Table :columns="store.getters.getInvitationColumns.filter((column: any) => column !== 'type' && column !== 'teamId')" :items="store.getters.getInvitationsByTeamId" url="/dashboard/teams/invitations/" />
            <form class="mt-10">
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <input-text v-model:model-value="playerSearch" label="Recherche" placeholder="Rechercher une équipe" required />
                <button @click="searchPlayer" class="info">Rechercher</button>
                <ul>
                  <li v-for="(player, key) in store.getters.getPlayers" :key="key">
                    <span>{{player.username}} <button :class="invitationStatus == 'success' ? 'green' : 'info'" :disabled="invitationStatus !== ''" @click.prevent="invitePlayer(player.id)">Inviter</button></span>
                  </li>
                </ul>
              </div>
            </form>
          </div>
          <div v-if="sideBarStatus == 'configuration'">
            <h3>Configuration</h3>
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
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { defineComponent, defineProps, ref } from 'vue'
import SidebarOnTeamDetails from '@/components/SidebarOnTeamDetails.vue'
import InputText from '@/components/InputText.vue'
import Table from '@/components/Table.vue'

defineComponent({
  name: 'TeamDetailPage'
})

defineProps({
  team: Object
})

const store = useStore();
const params = useRoute().params;
if (params && params.id) {
  store.dispatch('getTeamById', params.id)
}

let tabStatus = ref('palmarès')
function changeTabStatus(tab: string) {
  tabStatus.value = tab
}

let sideBarStatus = ref('')
function changeSideBarStatus(tab: string) {
  console.log(tab)
  sideBarStatus.value = tab
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
  invitationStatus.value = 'success';
  setTimeout(() => {
    invitationStatus.value = '';
  }, 3000)
}
</script>
<style lang="scss" scoped>
nav {
  span {
    cursor: pointer;
    padding: 10px 20px;
    border-bottom: 2px solid transparent;
    transition: all 0.3s;
    &:hover {
      border-color: #FF8811;
      color: #FF8811;
    }
  }
  .active {
    border-color: #FF8811;
    color: #FF8811;
  }
}
</style>