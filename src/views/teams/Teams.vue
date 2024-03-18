<template>
  <div>
    <Topbar title="Mes équipes" subtitle="Gérer l'ensemble de vos équipes." />
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { defineComponent } from 'vue'
defineComponent({
  name: 'TeamsPage'
})
</script>