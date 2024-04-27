<template>
  <div v-if="store.getters.getTeam !== null">
    <h1>{{store.getters.getTeam.name}}</h1>
    <div class="relative">
      <img class="relative max-h-[300px] w-full object-cover rounded-b" :src="store.getters.getTeam.banner" alt="banner">
      <img class="absolute bottom-0 left-0 max-h-[300px] max-w-[300px]" :src="store.getters.getTeam.logo" alt="logo">
    </div>
    <div class="py-10">
      <p>{{store.getters.getTeam.description}}</p>
      <nav class="border-b text-sm flex justify-start">
        <span :class="tabStatus == 'palmarès' ? 'active' : ''" @click="changeTabStatus('palmarès')">Palmarès</span>
        <span :class="tabStatus == 'composition' ? 'active' : ''" @click="changeTabStatus('composition')">Composition</span>
        <span :class="tabStatus == 'tournois' ? 'active' : ''" @click="changeTabStatus('tournois')">Tournois</span>
        <span :class="tabStatus == 'gestion' ? 'active' : ''" @click="changeTabStatus('gestion')">Gestion</span>
      </nav>

      <div v-if="tabStatus == 'palmarès'">
        <Topbar title="Palmarès de l'équipe" subtitle="Historique d'activité" />
      </div>
      <div v-if="tabStatus == 'composition'">
        <Topbar title="Composition de l'équipe" subtitle="Des joueurs au staff" />
      </div>
      <div v-if="tabStatus == 'tournois'">
        <Topbar title="Tournois terminés" subtitle="Historique des tournois" />
      </div>
      <div v-if="tabStatus == 'gestion'">
        <Topbar title="Gestion de l'équipe" subtitle="Modifier votre équipe" />
        <div class="flex mt-2 gap-10">
          <SidebarOnTeamDetails :team="store.getters.getTeam" :tab-status="sideBarStatus" @changeSideBarStatus="changeSideBarStatus" />
          <div v-if="sideBarStatus == 'tournaments_registrations'">
            <h3>Inscriptions aux tournois</h3>
          </div>
          <div v-if="sideBarStatus == 'messages'">
            <h3>Messages</h3>
          </div>
          <div v-if="sideBarStatus == 'compositon'">
            <h3>Composition</h3>
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