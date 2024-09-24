<template>
  <DashboardLayout 
      title="Créer ou éditer une scrim" 
      show-breadcrumb="true"
      :breadcrumb-list="[
        { name: 'Scrims', url: '/dashboard/scrims' }
      ]"
      >
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
        <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Définissez la date</label>
        <input v-model="scrimForm.date" type="date" id="date" class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

        <label for="time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Définissez l'heure</label>
        <input v-model="scrimForm.time" type="time" id="time" class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value="00:00" required />

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
import moment from 'moment'

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
  time: null,
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
    time: null,
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
  // Cumuler la date et l'heure
  scrimForm.value.date = moment(scrimForm.value.date).format('YYYY-MM-DD'); // Ex: '2024-09-25'
  scrimForm.value.time = moment(scrimForm.value.time, 'HH:mm').format('HH:mm'); // Ex: '10:00'
  // Combinez-les dans un seul champ si nécessaire
  scrimForm.value.date = scrimForm.value.date + 'T' + scrimForm.value.time; // Ex: '2024-09-25T10:00'
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