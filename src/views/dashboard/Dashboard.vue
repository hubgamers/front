<template>
  <div class="py-10 px-10">
    <Topbar title="Tableau de bord" subtitle="Bienvenue sur votre compte" :show-search-bar="true" />
  </div>
</template>

<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { defineComponent } from 'vue'
defineComponent({
  name: 'DashboardPage'
})
</script>