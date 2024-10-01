<template>
  <fwb-card
    v-for="(structure, key) in options"
    :key="key"
  >
    <div class="relative">
      <img :src="structure.banner" alt="" class="rounded-t relative">
      <img :src="structure.logo" alt="" class="rounded-full absolute bottom-2 left-2 max-w-20">
    </div>
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{structure.name}}
      </h5>
      <p class="text-primary">{{structure.teamRosters.length}} équipe(s) créée(s).</p>
      <div class="flex mb-3">
        <fwb-badge v-for="(tag, tagIndex) in structure.tags.slice(0, 3)" :key="tagIndex" type="dark">
          {{ tag.name }}
        </fwb-badge>
      </div>
      <fwb-button-group class="gap-2">
        <fwb-button :href="'/dashboard/structures/' + structure.id" class="bg-primary">Détails de la structure</fwb-button>
      </fwb-button-group>
    </div>
  </fwb-card>
</template>

<script setup>
import { defineComponent } from 'vue';
import { FwbCard, FwbButton, FwbButtonGroup, FwbBadge } from 'flowbite-vue'

defineComponent({
  name: 'StructureCardComponent',
});
defineProps({
  options: {
    type: Array,
    required: true,
  },
});
</script>