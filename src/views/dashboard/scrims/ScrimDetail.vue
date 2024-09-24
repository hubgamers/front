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
        <div class="relative mb-5">
          <img :src="store.getters.getScrim.game.banner" alt="Bannière du jeu" class="max-h-64 w-full object-cover">
          <span class="absolute top-0 left-0 text-4xl text-white bg-black p-2">{{ store.getters.getScrim.game.name }}</span>
        </div>
        <div class="row justify-around items-center">
          <div class="flex flex-col">
            <div class="logo">
              <img :src="store.getters.getScrim.structureAlpha.logo" alt="Logo" class="rounded max-w-52">
            </div>
            <span>Structure : {{store.getters.getScrim.structureAlpha.name}}</span>
            <span>Equipe : {{store.getters.getScrim.teamRosterAlpha.name}}</span>
          </div>
          <div>
            <span class="text-6xl">VS</span>
          </div>
          <div class="flex flex-col">
            <div v-if="store.getters.getScrim.status !== 'SEARCHING'" class="flex flex-col items-end">
              <div class="logo">
                <img :src="store.getters.getScrim.structureBeta.logo" alt="Logo" class="rounded max-w-52">
              </div>
              <span>Structure : {{store.getters.getScrim.structureBeta.name}}</span>
              <span>Equipe : {{store.getters.getScrim.teamRosterBeta.name}}</span>
            </div>
            <div v-else class="flex flex-col">
              <div class="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/13/13910.png" alt="Logo" class="rounded max-w-52">
              </div>
            </div>
            <template v-if="store.getters.getScrim.status !== 'SEARCHING'">
              <span class="text-4xl font-extrabold dark:text-white mt-2 text-[#339ca9]">{{store.getters.getScrim.structureNameBeta}}</span>
              <span>{{store.getters.getScrim.teamRosterNameBeta}}</span>
            </template>
            <template v-else>
              <fwb-button color="default" class="mt-2" @click="">Affronter</fwb-button>
            </template>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <span v-if="store.getters.getScrim.date">Date : {{moment(store.getters.getScrim.date).format('DD/MM/YYYY à hh:mm')}}</span>
          <span>Format : {{store.getters.getScrim.boFormat.name}}</span>
          <span>Plateforme : {{store.getters.getScrim.platform.name}}</span>
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
import moment from 'moment';

defineComponent({
  name: 'ScrimDetailPage'
})

const store = useStore();
const route = useRoute();
onMounted(() => {
  store.dispatch('getScrimById', route.params.id);
});

</script>