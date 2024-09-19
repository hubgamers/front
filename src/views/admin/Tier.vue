<template>
  <EntityAdminComponent
    title="Gérer les tiers"
    entity-name="tier"
  />
</template>
<script setup>
import EntityAdminComponent from '@/views/admin/EntityAdminComponent.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'AdminTierPage',
})
</script>