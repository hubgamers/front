<template>
  <div v-if="store.getters.getTeam !== null">
    <div class="relative">
      <img class="relative max-h-[300px] max-w-full object-cover rounded-b" :src="store.getters.getTeam.banner" alt="banner">
      <img class="absolute bottom-0 left-0 max-h-[300px] max-w-[300px]" :src="store.getters.getTeam.logo" alt="logo">
    </div>
    <div class="py-10 px-10">
      <Topbar :title="store.getters.getTeam.name" :subtitle="store.getters.getTeam.description" />
      <div class="flex flex-row">
        <span class="max-w-[5rem] bg-blue-100 text-blue-800 text-base font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"><i class="fa-solid fa-gamepad"></i> {{ store.getters.getTeam.game }}</span>
        <span class="max-w-[5rem] bg-blue-100 text-blue-800 text-base font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"><i class="fa-solid fa-laptop"></i> {{ store.getters.getTeam.platform }}</span>
      </div>

      <h3 class="text-2xl font-bold mt-10 mb-5">Membres de l'équipe</h3>
      <div class="flex flex-row justify-between">
        <CardComponent v-for="(player, playerKey) in store.getters.getTeam.players" :key="playerKey" :titleCard="player.username" :image="store.getters.getTeam.logo" :link="'/players/' + player.id" linkText="Détails du joueur" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import CardComponent from '@/components/CardComponent.vue'
import { defineComponent, defineProps } from 'vue'

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
</script>