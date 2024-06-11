<template>
  <DashboardLayout title="Tableau de bord" subtitle="Bienvenue sur votre compte" :show-search-bar="true">
    
  </DashboardLayout>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
defineComponent({
  name: 'DashboardPage'
})
</script>