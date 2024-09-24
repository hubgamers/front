<template>
  <fwb-card
    v-for="(structure, key) in structures"
    :key="key"
  >
    <div class="relative">
      <img :src="structure.banner" alt="" class="rounded-t relative">
      <img :src="structure.logo" alt="" class="rounded-full absolute bottom-2 left-2 max-w-28">
    </div>
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{structure.name}}
      </h5>
      <p>{{structure.teamRosters.length}} équipe(s) créée(s).</p>
      <div class="flex mb-3">
        <fwb-badge v-for="(tag, tagIndex) in structure.tags.slice(0, 3)" :key="tagIndex" type="dark">
          {{ tag.name }}
        </fwb-badge>
      </div>
      <fwb-button-group class="gap-2">
        <fwb-button :href="'/dashboard/structures/' + structure.id">Détails de la structure</fwb-button>
      </fwb-button-group>
    </div>
  </fwb-card>
</template>

<script setup>
import { computed, defineComponent } from 'vue';
import { FwbCard, FwbButton, FwbButtonGroup, FwbBadge } from 'flowbite-vue'
import { useStore } from 'vuex';

defineComponent({
  name: 'StructureCardComponent',
});
const props = defineProps({
  isMyStructures: {
    type: Boolean,
    default: false,
  },
});

const store = useStore()

const structures = computed(() => {
  return props.isMyStructures
    ? store.getters.getMyStructures
    : store.getters.getStructures;
});

if (props.isMyStructures) {
  store.dispatch('getAllMyStructures')
} else {
  store.dispatch('getAllPublicStructures')
}
</script>