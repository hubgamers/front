<template>
  <fwb-card
    v-for="(teamRoster, key) in teamRosters"
    :key="key"
  >
    <div class="relative">
      <img :src="teamRoster.game.banner" alt="" class="rounded-t relative">
      <img :src="teamRoster.structure.logo" alt="" class="rounded-full absolute bottom-2 left-2 max-w-20">
    </div>
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{teamRoster.name}}
      </h5>
      <p class="text-primary">{{teamRoster.players.length}} joueur(s).</p>
      <fwb-button-group class="gap-2">
        <fwb-button @click="openDetails(teamRoster)" class="bg-primary">Détails de l'équipe</fwb-button>
      </fwb-button-group>
    </div>
  </fwb-card>
</template>

<script setup>
import { computed, defineComponent } from 'vue';
import { FwbCard, FwbButton, FwbButtonGroup } from 'flowbite-vue'
import { useStore } from 'vuex';

defineComponent({
  name: 'TeamRosterCardComponent',
});
const props = defineProps({
  structureId: {
    type: Number,
    default: 0,
  },
});

const store = useStore()
const teamRosters = computed(() => {
  return store.getters.getMyTeamRosters
});

if (props.structureId) {
  store.dispatch('getMyTeamRostersByStructureId', props.structureId)
}

const emit = defineEmits(['details'])
function openDetails(teamRosterId) {
  emit('details', teamRosterId)
}
</script>