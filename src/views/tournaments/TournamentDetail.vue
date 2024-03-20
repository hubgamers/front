<template>
  <div v-if="store.getters.getTournament !== null">
    <div class="relative">
      <img class="relative max-h-[300px] max-w-full object-cover rounded-b" :src="store.getters.getTournament.banner" alt="banner">
      <img class="absolute bottom-0 left-0 max-h-[300px] max-w-[300px]" :src="store.getters.getTournament.logo" alt="logo">
    </div>
    <div class="py-10 px-10">
      <Topbar :title="store.getters.getTournament.name" :subtitle="store.getters.getTournament.description" />
      <div class="flex flex-row">
        <span class="max-w-[5rem] bg-blue-100 text-blue-800 text-base font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"><i class="fa-solid fa-gamepad"></i> {{ store.getters.getTournament.game }}</span>
        <span class="max-w-[5rem] bg-blue-100 text-blue-800 text-base font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"><i class="fa-solid fa-laptop"></i> {{ store.getters.getTournament.platform }}</span>
      </div>


    </div>
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import CardComponent from '@/components/CardComponent.vue'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

defineComponent({
  name: 'TournamentDetailPage'
})

const store = useStore();
const params = useRoute().params;
if (params && params.id) {
  store.dispatch('getTournamentById', params.id)
}
</script>