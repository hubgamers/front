<template>
  <DashboardLayout title="Tableau de bord" subtitle="Bienvenue sur votre compte" :show-search-bar="true">
   <div class="row justify-around gap-2 pt-2">
     <CardActionDashboardComponent
        title="Equipes créées"
        subtitle="10"
        btnUri="/dashboard/my-teams"
        btnText="Voir mes équipes"
        bg-color="blue"
     />
     <CardActionDashboardComponent
       title="Tournois crées"
       subtitle="23"
       btnUri="/dashboard/tournaments"
       btnText="Voir mes tournois"
       bg-color="blue"
     />
     <CardActionDashboardComponent
       title="Status d'abonnement"
       subtitle="Platinum"
       btnUri="/dashboard/subscriptions"
       btnText="Voir mon abonnement"
       bg-color="green"
       type="large"
     />
   </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import CardActionDashboardComponent from '@/views/dashboard/components/CardDashboardComponent.vue'
defineComponent({
  name: 'DashboardPage'
})
</script>

<style lang="scss" scoped>
</style>