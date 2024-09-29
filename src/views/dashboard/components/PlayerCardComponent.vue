<template>
  <fwb-card
      v-for="(player, key) in players"
      :key="key"
      img-alt="Desk"
      :img-src="player.avatar"
      variant="horizontal"
    >
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{player.username}}
        </h5>
        <div v-if="player.tag" class="flex gap-1">
          <fwb-badge v-for="(tag, tagIndex) in player.tags" :key="tagIndex">{{tag.name}}</fwb-badge>
        </div>
        <fwb-button color="default"><RouterLink :to="'/dashboard/players/' + player.id">Fiche du joueur</RouterLink></fwb-button>
      </div>
    </fwb-card>
</template>

<script setup>
import { defineComponent } from 'vue';
import { FwbCard } from 'flowbite-vue'
import { useStore } from 'vuex';
import { FwbBadge, FwbButton } from 'flowbite-vue'
import { RouterLink } from 'vue-router';

defineComponent({
  name: 'PlayerCardComponent',
});

defineProps({
  players: Object,
});

const store = useStore()
store.dispatch('getAllPlayers')
</script>