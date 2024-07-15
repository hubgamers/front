<template>
  <DashboardLayout title="Gérer mon équipe" :subtitle="store.getters.getTeam != null ? 'Editer mon équipe' :' Créer une équipe'">
    <div v-if="teamForm !== null && store.getters.getTeam != null" class="relative">
      <div>
        <input-text type="file" label="Bannière" @uploadFile="uploadTeamBanner" />
      </div>
      <div>
        <input-text type="file" label="Logo" @uploadFile="uploadTeamLogo" />
      </div>
    </div>
    
    <form @submit.prevent="submitForm">
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <input-text v-model="teamForm.name" label="Nom" placeholder="Les p't" required />
        <input-text v-model="teamForm.description" label="Description" placeholder="Une équipe de choc" required />
        <input-text v-model="teamForm.tags" type="select" label="Sélectionner les tags" :multiple="true">
          <option v-for="(tag, index) in store.getters.getTags" :key="index" :value="tag.id">{{ tag.name }}</option>
        </input-text>
      </div>
      <button type="button" class="info my-4 mr-1" @click="back">Retour</button>
      <button type="submit" class="green my-4">{{store.getters.getTeam != null ? 'Editer mon équipe' :' Créer une équipe'}}</button>
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
    store.dispatch('getTeamById', params.id)
      .then(() => {
        teamForm.value = store.getters.getTeam
      })
      .catch(() => {
        notify({
          title: "Erreur",
          text: "Une erreur est survenue lors de la récupération de l'équipe",
          type: "error"
        });
      });
  }
})

store.dispatch('getAllPlayers')
store.dispatch('getAllTags')

function uploadTeamBanner(e) {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length)
    return;
  store.dispatch('uploadTeamBanner', {
    teamId: params.id,
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

function uploadTeamLogo(e) {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length)
    return;
  store.dispatch('uploadTeamLogo', {
    teamId: params.id,
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
    store.dispatch('updateTeam', teamForm.value).then(() => {
      notify({
        title: "Mis à jour",
        text: "Votre équipe a été mise à jour avec succès",
        type: "success"
      });
      // Redirect to the team page
      router.push({ name: 'TeamDetail', params: { id: params.id } })
    })
      .catch(() => {
        notify({
          title: "Erreur",
          text: "Une erreur est survenue lors de la mise à jour de l'équipe",
          type: "error"
        });
      });
  } else {
    store.dispatch('createTeam', teamForm.value).then((res) => {
      notify({
        title: "Création",
        text: "Votre équipe a été créée avec succès",
        type: "success"
      });
      // Redirect to the team page
      router.push({ name: 'TeamDetail', params: { id: res.id } })
    })
      .catch(() => {
        notify({
          title: "Erreur",
          text: "Une erreur est survenue lors de la création de l'équipe",
          type: "error"
        });
      });
  }
}

function back() {
  if (store.getters.getTeam != null) {
    router.push({ name: 'TeamDetail', params: { id: store.getters.getTeam.id } })
  } else {
    router.push({ name: 'Teams' })
  }
}
</script>