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
        <StructureCardComponent v-if="!isLoading" :options="store.getters.getMyStructures" />
        <Loading v-else />
      </div>
  </DashboardLayout>
</template>
<script setup>
import { defineComponent, onBeforeMount, ref } from 'vue'
import { useStore } from 'vuex'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import StructureCardComponent from '../components/StructureCardComponent.vue';
import Loading from '../components/Loading.vue';
defineComponent({
  name: 'MyStructuresPage'
})

const store = useStore()
let isLoading = ref(true)
onBeforeMount(async () => {
  await store.dispatch('getAllMyStructures')
  isLoading.value = false
})
</script>