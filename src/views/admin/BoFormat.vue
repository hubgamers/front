<template>
  <EntityAdminComponent
    title="Gérer les formats BO"
    entity-name="bo-format"
  />
</template>
<script setup>
import EntityAdminComponent from '@/views/admin/EntityAdminComponent.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'AdminBoFormatPage',
})
</script>