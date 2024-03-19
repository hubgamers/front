<template>
  <div>
    <Topbar title="Mes tournois" subtitle="Créer ou rejoindre des tournois." />

    <RouterLink to="/tournaments/create" class="btn btn-primary">
      Créer un tournoi
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { defineComponent } from 'vue'
defineComponent({
  name: 'TournamentsPage'
})
</script>