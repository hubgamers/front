<template>
  <div class="container">
    <Sidebar />
    <div>
      <Topbar :title="title" :subtitle="subtitle" :show-search-bar="showSearchBar" />
      <fwb-breadcrumb class="mb-4">
        <fwb-breadcrumb-item home href="/dashboard">
          Tableau de bord
        </fwb-breadcrumb-item>
        <fwb-breadcrumb-item v-for="(item, key) in breadcrumbList" :key="key" :href="item.url">
          {{item.name}}
        </fwb-breadcrumb-item>
        <fwb-breadcrumb-item>
          {{title}}
        </fwb-breadcrumb-item>
      </fwb-breadcrumb>
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
import { FwbBreadcrumb, FwbBreadcrumbItem } from 'flowbite-vue'

defineComponent({
  name: 'DashboardLayout'
})

defineProps({
  title: String,
  subtitle: String,
  showSearchBar: Boolean,
  showBreadcrumb: Boolean,
  breadcrumbList: Array
})
const store = useStore();
const router = useRouter();
onBeforeMount(() => {
  if (!localStorage.getItem('userId')) {
    router.push('/login')
  }
})
store.dispatch('getUserById', localStorage.getItem('userId'))
</script>

<style>
  h1, h2, h3, p, i {
    color: var(--blue);
  }
  
  
  .container {
    max-width: inherit;
    display: grid;
    grid-template-columns: 0.5fr 3fr;

    @media screen and (min-width: 768px) {
      gap: 10px;
    }
    & > div:last-of-type {
      width: 100%;
      background-color: #fff;
      padding: 1rem;
    }
  }
</style>