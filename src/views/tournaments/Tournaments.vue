<template>
  <div>
    <Topbar title="Mes tournois" subtitle="Créer ou rejoindre des tournois." />
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { defineComponent } from 'vue'
defineComponent({
  name: 'TournamentsPage'
})
</script>