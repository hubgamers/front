<template>
  <DashboardLayout 
      title="Mes scrims" 
      subtitle="Gérer l'ensemble de mes scrims."
      show-breadcrumb="true"
      :breadcrumb-list="[
        { name: 'Scrims', url: '/dashboard/scrims' }
      ]"
      >
      <div class="flex flex-wrap flex-row gap-5 mt-2">
        <ScrimCardComponent :isMyScrims="true" />
      </div>
  </DashboardLayout>
</template>
<script setup>
import { defineComponent } from 'vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import ScrimCardComponent from '../components/ScrimCardComponent.vue';
defineComponent({
  name: 'MyScrimsPage'
})
</script>