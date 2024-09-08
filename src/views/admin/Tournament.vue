<template>
  <EntityAdminComponent
    title="Gérer les tournois"
    entity-name="tournament"
  />
</template>
<script setup>
import EntityAdminComponent from '@/views/admin/EntityAdminComponent.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'AdminTournamentPage',
})
</script>