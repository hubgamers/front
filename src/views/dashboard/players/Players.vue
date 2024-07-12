<template>
  <DashboardLayout title="Découvrez les joueurs du moment" subtitle="Vous pouvez inviter quiconque à rejoindre votre équipe">
    <div class="flex flex-wrap justify-between mt-10">
      <div class="flex flex-col max-w-[300px] w-full">
        <input-text v-model:model-value="search" label="Recherche" placeholder="Rechercher un joueur" required />
        <button @click="searchInTeams" class="info">Rechercher</button>
      </div>
      <div class="flex flex-wrap flex-row gap-5">
        <CardComponent
          v-for="(player, key) in store.getters.getPlayers"
          :key="key"
          :title-card="player.username"
          :image="player.avatar ? player.avatar : 'https://avatar.iran.liara.run/public/6'"
          :link-one="'/dashboard/players/' + player.id"
          link-one-text="Détails du joueur"
          btn-modal-text="Inviter à rejoindre l'équipe"
          @modal="openInviteModal(player.id)" />
      </div>
    </div>

    <JoinTeamModal v-if="showJoinModal" @close="closeJoinModal" :team-id="teamIdSelected" />
  </DashboardLayout>
</template>
<script setup>
import DashboardLayout from '@/layout/DashboardLayout.vue'
import CardComponent from '@/views/dashboard/components/TeamCardComponent.vue'
import { useStore } from 'vuex'
import { defineComponent, ref } from 'vue'
import InputText from '@/components/InputText.vue'
import JoinTeamModal from '@/views/dashboard/teams/modal/JoinTeamModal.vue'

defineComponent({
  name: 'PlayersPage'
})

const store = useStore();
store.dispatch('getAllPlayers')

let search = ref('')

function searchInTeams() {
  if (search.value === '') {
    store.dispatch('getAllPlayers')
  } else {
    store.dispatch('getAllPlayersLikeByName', search.value)
  }
}

let showJoinModal = ref(false)
let teamIdSelected = ref("")

function closeJoinModal() {
  showJoinModal.value = false
}
</script>