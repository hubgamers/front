<template>
  <EntityAdminComponent
    title="Gérer les équipes"
    entity-name="team"
  />
</template>
<script setup>
import EntityAdminComponent from '@/views/admin/EntityAdminComponent.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'AdminTeamPage',
})
</script>