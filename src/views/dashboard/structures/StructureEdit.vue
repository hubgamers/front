<template>
  <DashboardLayout 
      title="Créer ou éditer une structure" 
      show-breadcrumb="true"
      :breadcrumb-list="[
        { name: 'Structures', url: '/dashboard/structures' }
      ]"
      >
    <div v-if="teamForm !== null && store.getters.getStructure != null" class="relative">
      <div>
        <input-text type="file" label="Bannière" @uploadFile="uploadStructureBanner" />
      </div>
      <div>
        <input-text type="file" label="Logo" @uploadFile="uploadStructureLogo" />
      </div>
    </div>
    
    <form @submit.prevent="submitForm">
      <div class="flex flex-col">
        <input-text v-model="teamForm.name" label="Saisissez un nom pour votre structure" placeholder="Vitality" required />
        <input-text v-model="teamForm.tags" :options="store.getters.getTags" type="select" label="Sélectionner les tags" placeholder="FPS, Battle Royale" info="Choisir les bons tags vous permettra de référencer votre structure dans notre moteur de recherche. Les joueurs pourront rechercher en fonction de tags précis pour vous retrouver." :multiple="true" />
        <input-text v-model="teamForm.description" type="textarea" label="Décrivez votre structure" placeholder="Une structure de choc" required />
      </div>
      <div class="flex gap-2 mt-2">
        <fwb-button color="alternative" @click="back">Retour</fwb-button>
        <fwb-button type="submit" color="default">{{store.getters.getStructure != null ? 'Editer mon structure' :' Créer une structure'}}</fwb-button>
      </div>
    </form>

  </DashboardLayout>
</template>
<script setup>
import { defineComponent, onBeforeMount, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import InputText from '@/components/InputText.vue'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import { useNotification } from "@kyvg/vue3-notification";
import { FwbButton } from 'flowbite-vue'

defineComponent({
  name: 'TeamEditPage'
})

const teamForm = ref({
  name: '',
  tags: [],
  description: '',
  visibility: false,
  players: [],
  organizerId: '',
  logo: '',
  banner: ''
});
const { notify } = useNotification();
const store = useStore();
const route = useRoute();
const router = useRouter();
const params = route.params;

onBeforeMount(() => {
  // On vérifie s'il s'agit d'une édition ou d'une création
  if (router.currentRoute.value.name === 'StructureEdit') {
    store.dispatch('getStructureById', params.id)
      .then(() => {
        teamForm.value = store.getters.getStructure
      })
      .catch(() => {
        notify({
          title: "Erreur",
          text: "Une erreur est survenue lors de la récupération de la structure",
          type: "error"
        });
      });
  } else {
    store.dispatch('resetStructure')
  }
})

store.dispatch('getAllPlayers')
store.dispatch('getAllTags')

function uploadStructureBanner(e) {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length)
    return;
  store.dispatch('uploadStructureBanner', {
    structureId: params.id,
    file: files[0]
  })
    .then(() => {
      notify({
        title: "Mis à jour",
        text: "Votre bannière a été mise à jour avec succès",
        type: "success"
      });
    })
    .catch(() => {
      notify({
        title: "Erreur",
        text: "Une erreur est survenue lors de la mise à jour de la bannière",
        type: "error"
      });
    });
}

function uploadStructureLogo(e) {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length)
    return;
  store.dispatch('uploadStructureLogo', {
    structureId: params.id,
    file: files[0]
  })
    .then(() => {
      notify({
        title: "Mis à jour",
        text: "Votre logo a été mis à jour avec succès",
        type: "success"
      });
    })
    .catch(() => {
      notify({
        title: "Erreur",
        text: "Une erreur est survenue lors de la mise à jour du logo",
        type: "error"
      });
    });
}

function submitForm() {
  if (params && params.id) {
    store.dispatch('updateStructure', teamForm.value).then(() => {
      notify({
        title: "Mis à jour",
        text: "Votre structure a été mise à jour avec succès",
        type: "success"
      });
      // Redirect to the team page
      router.push({ name: 'StructureDetail', params: { id: params.id } })
    })
      .catch(() => {
        notify({
          title: "Erreur",
          text: "Une erreur est survenue lors de la mise à jour de la structure",
          type: "error"
        });
      });
  } else {
    store.dispatch('createStructure', teamForm.value).then((res) => {
      notify({
        title: "Création",
        text: "Votre structure a été créée avec succès",
        type: "success"
      });
      // Redirect to the team page
      router.push({ name: 'StructureDetail', params: { id: res.id } })
    })
      .catch(() => {
        notify({
          title: "Erreur",
          text: "Une erreur est survenue lors de la création de la structure",
          type: "error"
        });
      });
  }
}

function back() {
  if (store.getters.getStructure != null) {
    router.push({ name: 'StructureDetail', params: { id: store.getters.getStructure.id } })
  } else {
    router.push({ name: 'Structures' })
  }
}
</script>