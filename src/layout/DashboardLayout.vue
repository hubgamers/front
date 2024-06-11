<template>
  <div class="container">
    <Sidebar />
    <div class="py-10 px-10">
      <Topbar :title="title" :subtitle="subtitle" :show-search-bar="showSearchBar" />
      <slot />
    </div>
    <Rightbar />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import Rightbar from '@/components/Rightbar.vue'
import Topbar from '@/components/Topbar.vue'
defineComponent({
  name: 'DashboardLayout'
})

defineProps({
  title: String,
  subtitle: String,
  showSearchBar: Boolean
})
</script>

<style scoped>
  .container {
    max-width: inherit;
    display: grid;
    grid-template-columns: 0.5fr 3fr;
    gap: 20px;

    & > div:last-of-type {
      background-color: #fff;
    }
  }
</style>