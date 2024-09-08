<template>
  <EntityAdminComponent
    title="Gérer les invitations"
    entity-name="invitation"
  />
</template>
<script setup>
import EntityAdminComponent from '@/views/admin/EntityAdminComponent.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'AdminInvitationPage',
})
</script>