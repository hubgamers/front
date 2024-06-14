<template>
  <div class="container">
    <Sidebar />
    <div>
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
import { useStore } from 'vuex'
defineComponent({
  name: 'DashboardLayout'
})

defineProps({
  title: String,
  subtitle: String,
  showSearchBar: Boolean
})
const store = useStore()
store.dispatch('getUserById', localStorage.getItem('userId'))
</script>

<style scoped>
  .container {
    max-width: inherit;
    display: grid;
    grid-template-columns: 0.5fr 3fr;

    @media screen and (min-width: 768px) {
      gap: 20px;
    }
    & > div:last-of-type {
      width: 100%;
      background-color: #fff;
      padding: 1rem;
      @media screen and (min-width: 768px) {
        padding: 2.5rem;
      }
    }
  }
</style>