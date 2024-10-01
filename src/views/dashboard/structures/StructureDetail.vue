<template>
  <DashboardLayout 
      title="Détails de la structure" 
      show-breadcrumb="true"
      :breadcrumb-list="[
        { name: 'Structures', url: '/dashboard/structures' }
      ]"
      >
      <div v-if="store.getters.getStructure">
        <div class="relative">
          <img :src="store.getters.getStructure.banner" alt="Bannière de la structure" class="w-full max-h-96 object-cover relative">
          <div class="absolute -bottom-20 left-2 flex gap-5">
            <img :src="store.getters.getStructure.logo" alt="Bannière de la structure" class=" max-w-48 rounded-full">
            <div class="mt-28 flex items-center gap-40">
              <h2 class="text-3xl font-bold">{{store.getters.getStructure.name}}</h2>
              <ul class="flex items-center justify-item-around gap-2">
                <li><RouterLink :to="'/dashboard/structures/' + store.getters.getStructure.id + '?tab=Informations'">Informations</RouterLink></li>
                <li><RouterLink :to="'/dashboard/structures/' + store.getters.getStructure.id + '?tab=Teams'">Equipes</RouterLink></li>
                <!-- <li><RouterLink :to="'/dashboard/structures/' + store.getters.getStructure.id + '?tab=Tournaments'">Tournois</RouterLink></li> -->
                <!-- <li><RouterLink :to="'/dashboard/structures/' + store.getters.getStructure.id + '?tab=Twitch'">Chaine Twitch</RouterLink></li> -->
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-28">
          <div v-if="routeName === 'StructureDetail_Teams'">
            <form @submit.prevent="searchInTeamRosters" class="py-4">   
              <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Rechercher une équipe</label>
              <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input v-model="searchTeamRoster" type="search" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Valorant" />
                  <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rechercher</button>
              </div>
            </form>
            <fwb-button color="default" @click="openTeamRosterEdit" class="mt-2">Créer une équipe</fwb-button>
            <div class="flex flex-wrap flex-row gap-5 mt-2">
              <TeamRosterCardComponent :options="teamRosters" :structureId="store.getters.getStructure.id" @details="openTeamRosterDetails" @edition="openTeamRosterEdit" />
            </div>
          </div>
          <div v-else-if="routeName === 'StructureDetail_Tournaments'">
            <h3 class="text-2xl font-bold">Description</h3>
            <p>{{store.getters.getStructure.description}}</p>
          </div>
          <div v-else-if="routeName === 'StructureDetail_Twitch'">
            <h3 class="text-2xl font-bold">Description</h3>
            <p>{{store.getters.getStructure.description}}</p>
          </div>
          <div v-else>
            <h3 class="text-2xl font-bold">Description</h3>
            <p>{{store.getters.getStructure.description}}</p>
          </div>
        </div>
      </div>
      <CreateRosterModal v-if="showTeamRosterEdit" @close="closeTeamRoster" :team-roster-id="teamRosterId" />
      <DetailsRosterModal v-if="showTeamRosterDetails" @close="closeTeamRoster" :team-roster-id="teamRosterId" />
  </DashboardLayout>
</template>
<script setup>
import { useStore } from 'vuex'
import { onBeforeRouteLeave, RouterLink, useRoute } from 'vue-router'
import { computed, defineComponent, onBeforeMount, ref, watch, watchEffect } from 'vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import CreateRosterModal from '@/views/dashboard/structures/modal/CreateRosterModal.vue'
import TeamRosterCardComponent from '../components/TeamRosterCardComponent.vue'
import { FwbButton } from 'flowbite-vue'
import DetailsRosterModal from './modal/DetailsRosterModal.vue'

defineComponent({
  name: 'TeamDetailPage'
})

const store = useStore();
const route = useRoute();
const params = route.params;
let teamForm = ref({
  name: '',
  description: '',
  game: '',
  platform: ''
});
const teamRosters = computed(() => store.getters.getTeamRosters);


let haveAccess = ref(false);
let routeName = ref('StructureDetail_Informations');
const updateRouteName = () => {
  // Récupérer le ?tab=xxx de l'url
  routeName.value = route.query.tab ? `StructureDetail_${route.query.tab}` : 'StructureDetail_Informations';
  console.log('routeName', routeName.value);

  // Vérifier si un ID est présent dans les paramètres de route
  if (route.params && route.params.id) {
    store.dispatch('getStructureById', route.params.id);
    teamForm.value = store.getters.getStructure;
  }
};
onBeforeMount(() => {
  store.dispatch('getTeamRosterColumns')
  store.dispatch('getAllTeamRostersByStructureId', params.id)
  updateRouteName();
})

watch(() => route.query.tab, () => {
  updateRouteName();
});

watchEffect(() => {
  if (store.getters.getUser && store.getters.getStructure) {
    if (store.getters.getStructure.users != null && store.getters.getStructure.users.length > 0) {
      haveAccess.value = store.getters.getStructure.users.some(user => user.id === store.getters.getUser.id)
    }
    if (!haveAccess.value) {
      haveAccess.value = store.getters.getStructure.organizerId === store.getters.getUser.id
    }
  }
})

onBeforeRouteLeave(() => {
  store.dispatch('resetStructure')
})


// Recherche d'équipe
let searchTeamRoster = ref('')
function searchInTeamRosters() {
  if (searchTeamRoster.value === '') {
    store.dispatch('getAllTeamRostersByStructureId', params.id)
  } else {
    store.dispatch('getTeamRosterByNameAndStructureId', {
      name: searchTeamRoster.value,
      structureId: params.id
    })
  }
}

// Ouvrir le modal de création d'équipe
let showTeamRosterDetails = ref(false);
function openTeamRosterDetails($event) {
  teamRosterId.value = $event.id;
  showTeamRosterDetails.value = true;
}

let showTeamRosterEdit = ref(false);
let teamRosterId = ref(null);
function openTeamRosterEdit(id) {
  if (typeof id === 'number') {
    teamRosterId.value = id;
  }
  showTeamRosterEdit.value = true;
}

async function closeTeamRoster() {
  showTeamRosterEdit.value = false;
  showTeamRosterDetails.value = false;
  await store.dispatch('getAllTeamRostersByStructureId', params.id)
  console.log(store.getters.getTeamRosters)
}
</script>