<template>
    <fwb-card
        v-for="(scrim, key) in scrims"
        :key="key"
      >
        <div class="relative">
          <img :src="scrim.game.banner" alt="" class="rounded-t relative">
          <template v-if="scrim.status !== 'SEARCHING'">
          <div class="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <img :src="scrim.structureAlpha.logo" alt="" class="rounded-full max-w-28">
            <span class="text-4xl mx-4 bg-[#28536B] p-2 text-white">VS</span>
            <img :src="scrim.structureBeta.logo" alt="" class="rounded-full max-w-28">
          </div>
        </template>
        </div>
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <!-- {{scrim}} -->
          </h5>
          <span v-if="scrim.date" class="py-2 px-1 bg-[#28536B] text-white rounded">{{ moment(scrim.date).format('DD/MM/YYYY à hh:mm')}}</span>
          <div class="flex flex-col gap-1 mt-2">
            <p>Jeu : {{ scrim.game.name }}</p>
            <p>Plateforme : {{ scrim.platform.name }}</p>
            <p>Format : {{ scrim.boFormat.name }}</p>
            <div class="flex">
              <p class="pr-2">{{scrim.status == 'SEARCHING' ? 'Tier(s) recherché(s)' : 'Tiers'}} :</p>
              <fwb-badge v-for="(tier, tierKey) in scrim.tiers" :key="tierKey">{{ tier.name }}</fwb-badge>
            </div>
            <fwb-badge v-if="scrim.status == 'SEARCHING'">En recherche d'adversaire</fwb-badge>
            <fwb-button-group class="gap-2">
            <fwb-button :href="'/dashboard/scrims/' + scrim.id">Détails de la scrim</fwb-button>
          </fwb-button-group>
         </div>  
        </div>
      </fwb-card>
</template>

<script setup>
import { computed, defineComponent } from 'vue';
import { FwbCard, FwbBadge, FwbButton } from 'flowbite-vue'
import { useStore } from 'vuex';
import moment from 'moment';

defineComponent({
  name: 'ScrimCardComponent'
})

const props = defineProps({
    isMyScrims: {
    type: Boolean,
    default: false,
  },
})

const store = useStore()

const scrims = computed(() => {
  return props.isMyScrims
    ? store.getters.getMyScrims
    : store.getters.getScrims;
});

if (props.isMyScrims) {
  store.dispatch('getMyScrims')
} else {
  store.dispatch('getAllScrims')
}
</script>