<template>
  <DashboardLayout title="Tableau de bord des administrateurs" subtitle="Vous pouvez gérer l'ensemble des actions de la plateforme">
    
    <!-- Boutons pour accéder aux différents éléments de modération -->
    <div class="columns gap-1">
      <button class="info">
        <router-link to="/admin/user">Gérer les utilisateurs</router-link>
      </button>
      <button class="info">
        <router-link to="/admin/tournament">Gérer les tournois</router-link>
      </button>
      <button class="info">
        <router-link to="/admin/structure">Gérer les structures</router-link>
      </button>
      <button class="info">
        <router-link to="/admin/player">Gérer les joueurs</router-link>
      </button>
      <button class="info">
        <router-link to="/admin/tag">Gérer les tags</router-link>
      </button>
      <button class="info">
        <router-link to="/admin/bo-format">Gérer les formats BO</router-link>
      </button>
      <button class="info">
        <router-link to="/admin/platform">Gérer les plateformes</router-link>
      </button>
      <button class="info">
        <router-link to="/admin/tier">Gérer les tiers</router-link>
      </button>
      <button class="info">
        <router-link to="/admin/game">Gérer les jeux</router-link>
      </button>
      <button class="info">
        <router-link to="/admin/invitation">Gérer les invitations</router-link>
      </button>
    </div>
  </DashboardLayout>
</template>
<script setup>
import DashboardLayout from '@/layout/DashboardLayout.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'AdminPage',
})
</script>