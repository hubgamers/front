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

<script setup>
import { defineComponent, onBeforeMount } from 'vue'
import Sidebar from '@/views/dashboard/components/Sidebar.vue'
import Rightbar from '@/views/dashboard/components/Rightbar.vue'
import Topbar from '@/views/dashboard/components/Topbar.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
defineComponent({
  name: 'DashboardLayout'
})

defineProps({
  title: String,
  subtitle: String,
  showSearchBar: Boolean
})
const store = useStore();
const router = useRouter();
onBeforeMount(() => {
  if (!localStorage.getItem('userId')) {
    router.push('/auth/login')
  }
})
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
        padding: 2rem;
      }
    }
  }
</style>