<template>
  <DashboardLayout title="Tableau de bord" subtitle="Bienvenue sur votre compte">
    <div class="row justify-around gap-2 pt-2">
     <CardActionDashboardComponent
        title="Structures créées"
        :subtitle="teamSize"
        btnUri="/dashboard/structures"
        btnText="Voir mes structures"
        bg-color="blue"
     />
     <CardActionDashboardComponent
       title="Tournois crées"
       :subtitle="tournamentSize"
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
       v-else
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

<script setup>
import { defineComponent, onBeforeMount, ref } from 'vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import CardActionDashboardComponent from '@/views/dashboard/components/CardDashboardComponent.vue'
import { useStore } from 'vuex'
import teamService from '@/services/structureService'
import tournamentService from '@/services/tournamentService'
import { useRouter } from 'vue-router'
defineComponent({
  name: 'DashboardPage'
})

const store = useStore();
const router = useRouter();
onBeforeMount(() => {
  if (!localStorage.getItem('userId')) {
    router.push('/login')
  }
})
store.dispatch('getProductByUser')

const teamSize = ref(0);
teamService.countAllStructures().then((res) => {
  teamSize.value = res.data.data;
})

const tournamentSize = ref(0);
tournamentService.countAllTournaments().then((res) => {
  tournamentSize.value = res.data.data;
})
</script>

<style lang="scss" scoped>
</style>