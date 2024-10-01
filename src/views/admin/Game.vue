<template>
  <EntityAdminComponent
    title="Gérer les jeux"
    entity-name="game"
  />
</template>
<script setup>
import EntityAdminComponent from '@/views/admin/EntityAdminComponent.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'AdminGamePage',
})
</script>