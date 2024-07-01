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
       v-if="store.getters.getStripeProduct !== null"
       title="Status d'abonnement"
       :subtitle="store.getters.getStripeProduct.name"
       btnUri="/dashboard/subscriptions"
       btnText="Voir mon abonnement"
       bg-color="green"
       type="large"
     />
     <CardActionDashboardComponent
       title="Status d'abonnement"
       subtitle="Non abonné"
       btnUri="/dashboard/subscriptions"
       btnText="M'abonner"
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
import { useStore } from 'vuex'
defineComponent({
  name: 'DashboardPage'
})

const store = useStore();
store.dispatch('getProductByUser')
</script>

<style lang="scss" scoped>
</style>