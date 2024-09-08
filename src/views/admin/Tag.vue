<template>
  <EntityAdminComponent
    title="Gérer les tags"
    entity-name="tag"
  />
</template>
<script setup>
import EntityAdminComponent from '@/views/admin/EntityAdminComponent.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'AdminTagPage',
})
</script>