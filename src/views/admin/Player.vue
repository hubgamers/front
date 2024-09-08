<template>
  <EntityAdminComponent
    title="Gérer les joueurs"
    entity-name="player"
  />
</template>
<script setup>
import EntityAdminComponent from '@/views/admin/EntityAdminComponent.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'AdminPlayerPage',
})
</script>