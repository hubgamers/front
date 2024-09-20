<template>
  <DashboardLayout 
      title="Mes structures" 
      subtitle="Gérer l'ensemble de mes structures."
      show-breadcrumb="true"
      :breadcrumb-list="[
        { name: 'Structures', url: '/dashboard/structures' }
      ]"
      >
    <div v-if="store.getters.getMyStructures.length > 0" class="flex flex-wrap flex-row gap-5 mt-10">
      <button class="info my-4 w-full">
        <RouterLink to="/dashboard/structures/create">Créer une structure</RouterLink>
      </button>
      <CardComponent v-for="(team, key) in store.getters.getMyStructures" :key="key" :title-card="team.name" :desc="team.description" :image="team.logo" :link-one="'/dashboard/structures/' + team.id" link-one-text="Détails de l'structure" />
    </div>
    <div class="mt-10" v-else>
      <p class="pb-3">Aucune structure de créée.</p>
      <button class="info">
        <RouterLink to="/dashboard/structures/create">Créer une structure dès maintenant</RouterLink>
      </button>
    </div>
  </DashboardLayout>
</template>
<script setup>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import CardComponent from '@/views/dashboard/components/TeamCardComponent.vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
defineComponent({
  name: 'MyStructuresPage'
})

const store = useStore()
store.dispatch('getAllMyStructures')
store.dispatch('getStructureColumns')
</script>