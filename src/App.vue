<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
import Rightbar from '@/components/Rightbar.vue'

// Get user from store
import Navbar from '@/components/Navbar.vue'
import { ref, watchEffect } from 'vue'
const currentRoute = useRoute()
const router = useRouter();

const isDashboardRoute = ref(false)
const isAuthRoute = ref(false)
// Vérifie si la route actuelle commence par "/dashboard"
watchEffect(() => {
  isDashboardRoute.value = currentRoute.path.startsWith('/dashboard')
  isAuthRoute.value = currentRoute.path.startsWith('/auth')
})

if (currentRoute.path.startsWith('/dashboard') && localStorage.getItem('jwtToken') == null) {
  router.push('/auth/login')
}
</script>

<template>
  <!-- Si rajouter un header il sera pas compris dans la sidebar -->
  <div v-if="isDashboardRoute" class="container">
    <Sidebar />
    <RouterView />
    <Rightbar />
  </div>
  <div v-else-if="isAuthRoute">
    <RouterView />
  </div>
  <div v-else>
    <Navbar />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
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