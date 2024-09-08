<template>
  <EntityAdminComponent
    title="Gérer les utilisateurs"
    entity-name="user"
  />
</template>
<script setup>
import EntityAdminComponent from '@/views/admin/EntityAdminComponent.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'AdminUserPage',
})
</script>