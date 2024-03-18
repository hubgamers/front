<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
import Rightbar from '@/components/Rightbar.vue'
</script>

<template>
  <!-- Si rajouter un header il sera pas compris dans la sidebar -->
  <div class="container">
    <Sidebar />
    <RouterView />
    <Rightbar />
  </div>
</template>

<style scoped>
.container {
  max-width: inherit;
  display: grid;
  grid-template-columns: 0.5fr 3fr;
  gap: 20px;
}
</style>