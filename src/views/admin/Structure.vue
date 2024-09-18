<template>
  <EntityAdminComponent
    title="Gérer les structures"
    entity-name="structure"
  />
</template>
<script setup>
import EntityAdminComponent from '@/views/admin/EntityAdminComponent.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'AdminStructurePage',
})
</script>