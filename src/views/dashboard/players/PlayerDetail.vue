<template>
  <DashboardLayout :title="store.getters.getPlayer.username" subtitle="Découvrez tous les détails">
    <div>
      <img class="max-w-[200px] my-2" :src="store.getters.getPlayer.avatar ? store.getters.getPlayer.avatar : 'https://avatar.iran.liara.run/public/6'" alt="">

      <h2>Rosters</h2>
      <Table :columns="store.getters.getTeamRosterColumns" :items="store.getters.getTeamRosters" />
    </div>
  </DashboardLayout>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import Table from '@/views/dashboard/components/Table.vue'

const store = useStore();
const route = useRoute();
const params = route.params;

store.dispatch('getTeamRosterColumns')
store.dispatch('getPlayerById', params.id);
store.dispatch('getTeamRosterByPlayerId', params.id) 
</script>