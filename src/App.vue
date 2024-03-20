<script setup>
import { RouterView, useRouter } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
import Rightbar from '@/components/Rightbar.vue'

// Get user from store
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()
if (localStorage.getItem('jwtToken') == null) {
  router.push('/auth/login')
}

setTimeout(() => {
  store.dispatch('getAllUsers')
}, 3000)
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