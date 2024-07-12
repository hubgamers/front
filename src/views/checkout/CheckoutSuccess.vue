<template>
  <VitrineLayout>
    <div class="columns">
      <h1>Abonnement réussie</h1>
      <p>Vous allez être redigiré</p>
    </div>
  </VitrineLayout>
</template>
<script setup>
import VitrineLayout from '@/layout/VitrineLayout.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const query = router.currentRoute.value.query
const store = useStore()

if (query.session_id) {
  // Call the API to get the checkout session details
  store.dispatch('createPortalSession', query.session_id).then((response) => {
    console.log(response)
    window.location.href = response
  })
  
}
</script>