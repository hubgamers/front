<template>
  <div>
    <DashboardLayout title="Mes abonnements" subtitle="Gérer mon abonnement" :show-search-bar="true">
      <div class="row justify-around gap-2 pt-2">
        <Pricings />
      </div>
    </DashboardLayout>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import Pricings from '@/views/vitrine/components/Pricings.vue'

defineComponent({
  name: 'SubscriptionsPage'
})
</script>