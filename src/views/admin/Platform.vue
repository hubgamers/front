<template>
  <EntityAdminComponent
    title="Gérer les plateformes"
    entity-name="platform"
  />
</template>
<script setup>
import EntityAdminComponent from '@/views/admin/EntityAdminComponent.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'AdminPlatformPage',
})
</script>