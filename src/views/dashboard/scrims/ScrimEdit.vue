<template>
  <DashboardLayout title="Gérer ma scrim" subtitle="Créer ou éditer ma scrim">
    <fwb-button-group>
      <fwb-button @click="toggleFormState('create')">Créer une scrim</fwb-button>
      <fwb-button color="purple" @click="toggleFormState('annonce')">Déposer une annonce de scrim</fwb-button>
    </fwb-button-group>
    <p>Si vous avez déjà votre adversaire, vous pouvez directement <b>créer votre scrim</b>. Si ce n'est pas le cas, vous pouvez <b>déposer une annonce de scrim</b>.</p>

    <form v-if="formState === 'create'" @submit.prevent="submitCreateForm">
      <div class="row py-3">
        <div class="flex-1">
          <fwb-select
            v-model="scrimForm.structureIdAlpha"
            :options="store.getters.getMyStructures.map(structure => ({ value: structure.id, name: structure.name }))"
            label="Sélectionnez en premier lieu la structure"
          />
          <fwb-select
            v-model="scrimForm.teamRosterIdAlpha"
            :options="store.getters.getMyTeamRosters.map(teamRoster => ({ value: teamRoster.id, name: teamRoster.name }))"
            label="Sélectionnez l'équipe associé à la structure sélectionnée"
          />
        </div>
        <p class="flex-1 row justify-center items-center">VS</p>
        <div class="flex-1">
          <fwb-select
            v-model="scrimForm.structureIdBeta"
            :options="store.getters.getStructures.map(structure => ({ value: structure.id, name: structure.name }))"
            label="Sélectionnez en premier lieu la structure"
          />
          <fwb-select
            v-model="scrimForm.teamRosterIdBeta"
            :options="store.getters.getTeamRosters.map(teamRoster => ({ value: teamRoster.id, name: teamRoster.name }))"
            label="Sélectionnez l'équipe associé à la structure sélectionnée"
          />
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div class="relative max-w-sm">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
          </div>
          <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sélectionner une date</span>
          <input v-model="scrimForm.date" datepicker id="default-datepicker" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
        </div>

        <fwb-select
          v-model="scrimForm.gameId"
          :options="store.getters.getGames.map(game => ({ value: game.id, name: game.name }))"
          label="Sélectionnez le jeu"
        />
        <fwb-select
          v-model="scrimForm.platformId"
          :options="store.getters.getPlatforms.map(platform => ({ value: platform.id, name: platform.name }))"
          label="Sélectionnez la plateforme"
        />
        
        <div class="max-w-sm mx-auto">
          <label for="countries_multiple" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sélectionner le(s) tier(s)</label>
          <select v-model="scrimForm.tiers" multiple id="countries_multiple" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose countries</option>
            <option v-for="(tier, i) in store.getters.getTiers" :key=i :value="tier.id">{{ tier.name }}</option>
          </select>
        </div>

        <fwb-select
          v-model="scrimForm.boFormatId"
          :options="store.getters.getBoFormats.map(boFormat => ({ value: boFormat.id, name: boFormat.name }))"
          label="Sélectionner le type de BOx"
        />
        <fwb-select
          v-model="scrimForm.status"
          :options="[ { value: 'PENDING', name: 'En cours' }, { value: 'INCOMING', name: 'A venir' }, { value: 'FINISHED', name: 'Terminé' }]"
          label="Sélectionner le status"
        />
        <fwb-select
          v-model="scrimForm.result"
          :options="[ { value: 'ALPHA', name: 'Equipe de gauche' }, { value: 'DRAW', name: 'Egalité' }, { value: 'BETA', name: 'Equipe de droite' }]"
          label="Sélectionner le résultat"
        />
        <fwb-textarea
          v-model="scrimForm.description"
          :rows="4"
          label="Description"
          placeholder="Décrivez les détails de la scrim"
        />
        <fwb-input
          v-model="scrimForm.scoreAlpha"
          placeholder="Entrez le score de l'équipe de gauche"
          label="Score de l'équipe de gauche"
        />
        <fwb-input
          v-model="scrimForm.scoreBeta"
          placeholder="Entrez le score de l'équipe de droite"
          label="Score de l'équipe de droite"
        />
        <fwb-button color="default">{{store.getters.getScrim != null ? 'Editer' :' Créer'}}</fwb-button>
      </div>
    </form>
    <form v-else @submit.prevent="submitAnnonceForm">
      <fwb-select
        v-model="scrimForm.structureIdAlpha"
        :options="store.getters.getMyStructures.map(structure => ({ value: structure.id, name: structure.name }))"
        label="Sélectionnez en premier lieu la structure"
      />
      <fwb-select
        v-model="scrimForm.teamRosterIdAlpha"
        :options="store.getters.getMyTeamRosters.map(teamRoster => ({ value: teamRoster.id, name: teamRoster.name }))"
        label="Sélectionnez l'équipe associé à la structure sélectionnée"
      />
      <fwb-select
        v-model="scrimForm.gameId"
        :options="store.getters.getGames.map(game => ({ value: game.id, name: game.name }))"
        label="Sélectionnez le jeu"
      />
      <fwb-select
        v-model="scrimForm.platformId"
        :options="store.getters.getPlatforms.map(platform => ({ value: platform.id, name: platform.name }))"
        label="Sélectionnez la plateforme"
      />
      <div class="max-w-sm mx-auto">
        <label for="countries_multiple" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sélectionner le(s) tier(s)</label>
        <select v-model="scrimForm.tiers" multiple id="countries_multiple" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Choose countries</option>
          <option v-for="(tier, i) in store.getters.getTiers" :key=i :value="tier.id">{{ tier.name }}</option>
        </select>
      </div>

      <fwb-select
        v-model="scrimForm.boFormatId"
        :options="store.getters.getBoFormats.map(boFormat => ({ value: boFormat.id, name: boFormat.name }))"
        label="Sélectionner le type de BOx"
      />
      <fwb-button color="default">Déposer l'annonce</fwb-button>
    </form>
  </DashboardLayout>
</template>
<script setup>
import { defineComponent, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import { FwbSelect } from 'flowbite-vue'
import { FwbInput } from 'flowbite-vue'
import { FwbTextarea } from 'flowbite-vue'
import { FwbButtonGroup, FwbButton } from 'flowbite-vue'

defineComponent({
  name: 'ScrimEditPage'
})

let formState = ref('');
let scrimForm = ref({
  structureIdAlpha: null,
  structureIdBeta: null,
  teamRosterIdAlpha: null,
  teamRosterIdBeta: null,
  gameId: null,
  platformId: null,
  date: null,
  tiers: [],
  boFormatId: null,
  status: null,
  result: null,
  scoreAlpha: 0,
  scoreBeta: 0,
  description: null
});
function toggleFormState(newState) {
  formState.value = newState
  // Reset scrimForm
  scrimForm.value = {
    structureIdAlpha: null,
    structureIdBeta: null,
    teamRosterIdAlpha: null,
    teamRosterIdBeta: null,
    gameId: null,
    platformId: null,
    date: null,
    tiers: [],
    boFormatId: null,
    status: null,
    result: null,
    scoreAlpha: 0,
    scoreBeta: 0,
    description: null
  }
}

const store = useStore();
const router = useRouter();
const params = router.currentRoute.value.params;

if (params.id) {
  store.dispatch('getScrimById', params.id)
  scrimForm.value = store.getters.getScrim
}

onMounted(() => {
  store.dispatch('getAllMyStructures')
  store.dispatch('getMyTeamRosters')
  store.dispatch('getAllPublicStructures')
  store.dispatch('getAllTiers')
  store.dispatch('getAllGames')
  store.dispatch('getAllPlatforms')
  store.dispatch('getAllBoFormats')
})

function onStructureIdAlphaChange(newValue, oldValue) {
  console.log('structureIdAlpha has changed:', newValue, oldValue);
  store.dispatch('getMyTeamRostersByStructureId', newValue)
}

// Watcher pour surveiller uniquement la propriété structureIdAlpha
watch(() => scrimForm.value.structureIdAlpha, (newValue, oldValue) => {
  onStructureIdAlphaChange(newValue, oldValue);
});

function onStructureIdBetaChange(newValue, oldValue) {
  console.log('structureIdBeta has changed:', newValue, oldValue);
  store.dispatch('getAllTeamRostersByStructureId', newValue)
}

// Watcher pour surveiller uniquement la propriété structureIdBeta
watch(() => scrimForm.value.structureIdBeta, (newValue, oldValue) => {
  onStructureIdBetaChange(newValue, oldValue);
});

function submitCreateForm() {
  if (params && params.id) {
    store.dispatch('updateScrim', scrimForm.value).then(() => {
      router.push({ name: 'ScrimDetail', params: { id: params.id } })
    })
  } else {
    store.dispatch('createScrim', scrimForm.value).then(() => {
      router.push({ name: 'MyScrims' })
    })
  }
}

function submitAnnonceForm() {
  scrimForm.value.status = 'SEARCHING'
  store.dispatch('createScrim', scrimForm.value).then(() => {
    router.push({ name: 'MyScrims' })
  })
}
</script>