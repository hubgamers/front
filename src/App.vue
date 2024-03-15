<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <header>
    <h1>HubGamers</h1>
  </header>
  
  
  <div class="container">
    <Sidebar />
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}
</style>