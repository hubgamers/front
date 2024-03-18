<template>
  <div>
    <Topbar title="Tableau de bord" subtitle="Bienvenue sur votre compte" />
  </div>
</template>

<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { defineComponent } from 'vue'
defineComponent({
  name: 'DashboardPage'
})
</script>