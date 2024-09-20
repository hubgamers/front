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
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <input-text v-model="teamForm.name" label="Nom" placeholder="Les p't" required />
        <input-text v-model="teamForm.description" label="Description" placeholder="Une structure de choc" required />
        <input-text v-model="teamForm.tags" type="select" label="Sélectionner les tags" :multiple="true">
          <option v-for="(tag, index) in store.getters.getTags" :key="index" :value="tag.id">{{ tag.name }}</option>
        </input-text>
      </div>
      <button type="button" class="info my-4 mr-1" @click="back">Retour</button>
      <button type="submit" class="green my-4">{{store.getters.getStructure != null ? 'Editer mon structure' :' Créer une structure'}}</button>
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
  if (router.currentRoute.value.name === 'EditTeam') {
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