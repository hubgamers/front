<template>
  <div>
    <Topbar title="Détails de mon équipe" :subtitle="'Détails de l`\'équipe'" />
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'

defineProps({
  team: Object
})
</script>