<template>
  <DashboardLayout 
      title="Détails de la scrim" 
      show-breadcrumb="true"
      :breadcrumb-list="[
        { name: 'Scrims', url: '/dashboard/scrims' }
      ]"
      >
    <div v-if="store.getters.getScrim !== null">
      <div class="py-10 px-10">
        {{ store.getters.getScrim }}
        <div class="row justify-around items-center">
          <div class="flex flex-col items-center">
            <div class="logo">
              <img src="https://picsum.photos/300/300" alt="Logo" class="rounded max-w-52">
            </div>
            <span class="text-4xl font-extrabold dark:text-white mt-2 bg-[#339ca9] text-white px-3 py-2">{{store.getters.getScrim.structureNameAlpha}}</span>
            <span class="text-1xl font-extrabold dark:text-white mt-2 bg-[#339ca9] text-white px-3 py-2">{{store.getters.getScrim.teamRosterNameAlpha}}</span>
          </div>
          <div>
            <span class="text-6xl">VS</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="logo">
              <img :src="store.getters.getScrim.status !== 'SEARCHING' ? 'https://picsum.photos/300/300' : 'https://cdn-icons-png.flaticon.com/512/13/13910.png'" alt="Logo" class="rounded max-w-52">
            </div>
            <template v-if="store.getters.getScrim.status !== 'SEARCHING'">
              <span class="text-4xl font-extrabold dark:text-white mt-2 text-[#339ca9]">{{store.getters.getScrim.structureNameBeta}}</span>
              <span>{{store.getters.getScrim.teamRosterNameBeta}}</span>
            </template>
            <template v-else>
              <fwb-button color="default" class="mt-2">Affronter</fwb-button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>
<script setup>
import { defineComponent, onMounted } from 'vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { FwbButton } from 'flowbite-vue'

defineComponent({
  name: 'ScrimDetailPage'
})

const store = useStore();
const route = useRoute();
onMounted(() => {
  store.dispatch('getScrimById', route.params.id);
});

</script>