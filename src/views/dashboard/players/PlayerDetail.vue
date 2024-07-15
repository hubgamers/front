<template>
  <DashboardLayout :title="store.getters.getPlayer.username" subtitle="Découvrez tous les détails">
    <div>
      <img :src="store.getters.getPlayer.avatar ? store.getters.getPlayer.avatar : 'https://avatar.iran.liara.run/public/6'" alt="">
    </div>
  </DashboardLayout>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout.vue'

const store = useStore();
const route = useRoute();
const params = route.params;

if (params.id) {
  store.dispatch('getPlayerById', params.id);
}
</script>