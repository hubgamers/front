<template>
  <DashboardLayout 
      title="Mes structures" 
      subtitle="Gérer l'ensemble de mes structures."
      show-breadcrumb="true"
      :breadcrumb-list="[
        { name: 'Structures', url: '/dashboard/structures' }
      ]"
      >
      <div class="flex flex-wrap flex-row gap-5 mt-2">
        <StructureCardComponent :isMyStructures="true" />
      </div>
  </DashboardLayout>
</template>
<script setup>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import StructureCardComponent from '../components/StructureCardComponent.vue';
defineComponent({
  name: 'MyStructuresPage'
})

const store = useStore()
store.dispatch('getAllMyStructures')
store.dispatch('getStructureColumns')
</script>