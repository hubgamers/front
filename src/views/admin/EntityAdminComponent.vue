<template>
  <DashboardLayout :title="title" :subtitle="subtitle">
    <br>
    <div class="flex flex-col space-y-4">
      <div class="flex flex-col space-y-4" v-if="pageState === 'list'">
        <h3 class="text-lg font-semibold">Liste</h3>
        <Table :columns="columns" :items="items" :url="url" type="" />
      </div>
      <div v-else-if="pageState === 'details'">
        <h3 class="text-2xl">Détails</h3>
        <pre>{{details}}</pre>
      </div>
      <div v-else-if="pageState === 'edit'">
        <h3 class="text-2xl">Edition</h3>
        <form @submit.prevent="submitForm">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <input-text v-model="userForm.username" label="Username" placeholder="" required />
            <input-text v-model="userForm.email" label="Email" placeholder="" required />
            <input-text v-model="userForm.roles" type="checkbox" :multiple="true" label="Roles" placeholder="" required />
          </div>
          <button type="submit" class="green my-4">Editer</button>
        </form>
      </div>
    </div>
  </DashboardLayout>
</template>
<script setup>
import DashboardLayout from '@/layout/DashboardLayout.vue'
import { defineComponent, onBeforeMount, ref } from 'vue'
import { useStore } from 'vuex'
import Table from '@/views/dashboard/components/Table.vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import InputText from '@/components/InputText.vue'

defineComponent({
  name: 'EntityAdminComponent',
})

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  },
  entityName: {
    type: String,
    required: true
  }
})

const store = useStore();
const entityName = ref(props.entityName);

const details = ref({});
const userForm = ref({});
switch (entityName.value) {
  case 'user':
    details.value = store.getters.getUser;
    userForm.value = {
      username: '',
      email: '',
      roles: '',
      avatar: '',
      banner: ''
    };
    break;
  case 'tournament':
    details.value = store.getters.getTournament;
    break;
  case 'structure':
    details.value = store.getters.getStructure;
    break;
  case 'player':
    details.value = store.getters.getPlayer;
    break;
  case 'tag':
    details.value = store.getters.getTag;
    break;
  case 'invitation':
    details.value = store.getters.getInvitation;
    break;
  case 'bo-format':
    details.value = store.getters.getBoFormat;
    break;
  case 'platform':
    details.value = store.getters.getPlatform;
    break;
  case 'tier':
    details.value = store.getters.getTier;
    break;
  case 'game':
    details.value = store.getters.getGame;
    break;
}


const route = useRoute();
const params = route.params;
const pageState = ref('list');

function submitForm() {
  if (pageState.value === 'edit') {
    switch (entityName.value) {
      case 'user':
        store.dispatch('updateUser', userForm.value)
        break;
      case 'tournament':
        store.dispatch('updateTournament', userForm.value)
        break;
      case 'structure':
        store.dispatch('updateStructure', userForm.value)
        break;
      case 'player':
        store.dispatch('updatePlayer', userForm.value)
        break;
      case 'tag':
        store.dispatch('updateTag', userForm.value)
        break;
      case 'invitation':
        store.dispatch('updateInvitation', userForm.value)
        break;
      case 'bo-format':
        store.dispatch('updateBoFormat', userForm.value)
        break;
      case 'platform':
        store.dispatch('updatePlatform', userForm.value)
        break;
      case 'tier':
        store.dispatch('updateTier', userForm.value)
        break;
      case 'game':
        store.dispatch('updateGame', userForm.value)
        break;
    }
  } else {
    switch (entityName.value) {
      case 'user':
        store.dispatch('createUser', userForm.value)
        break;
      case 'tournament':
        store.dispatch('createTournament', userForm.value)
        break;
      case 'structure':
        store.dispatch('createStructure', userForm.value)
        break;
      case 'player':
        store.dispatch('createPlayer', userForm.value)
        break;
      case 'tag':
        store.dispatch('createTag', userForm.value)
        break;
      case 'invitation':
        store.dispatch('createInvitation', userForm.value)
        break;
      case 'bo-format':
        store.dispatch('createBoFormat', userForm.value)
        break;
      case 'platform':
        store.dispatch('createPlatform', userForm.value)
        break;
      case 'tier':
        store.dispatch('createTier', userForm.value)
        break;
      case 'game':
        store.dispatch('createGame', userForm.value)
        break;
    }
  }
}

const columns = ref([]);
const items = ref([]);
const url = ref(`/admin/${entityName.value}/`);

// Fonction générique pour les dispatchs
const loadEntityData = async (entity, params) => {
  const entityMapping = {
    'user': { getter: 'getUserColumns', items: 'getUsers', actions: ['getUserColumns', 'getAllUsers'] },
    'tournament': { getter: 'getTournamentColumns', items: 'getTournaments', actions: ['getTournamentColumns', 'getAllTournaments'] },
    'structure': { getter: 'getStructureColumns', items: 'getStructures', actions: ['getStructureColumns', 'getAllStructures'] },
    'player': { getter: 'getPlayerColumns', items: 'getPlayers', actions: ['getPlayerColumns', 'getAllPlayersAdmin'] },
    'invitation': { getter: 'getInvitationColumns', items: 'getInvitations', actions: ['getInvitationColumns', 'getAllInvitations'] },
    'bo-format': { getter: 'getBoFormatColumns', items: 'getBoFormats', actions: ['getBoFormatColumns', 'getAllBoFormats'] },
    'platform': { getter: 'getPlatformColumns', items: 'getPlatforms', actions: ['getPlatformColumns', 'getAllPlatforms'] },
    'tier': { getter: 'getTierColumns', items: 'getTiers', actions: ['getTierColumns', 'getAllTiers'] },
    'game': { getter: 'getGameColumns', items: 'getGames', actions: ['getGameColumns', 'getAllGames'] },
    'tag': { getter: 'getTagColumns', items: 'getTags', actions: ['getTagColumns', 'getAllTags'] },
  };

  const entityData = entityMapping[entity];
  if (entityData) {
    await Promise.all(entityData.actions.map(action => store.dispatch(action)));
    columns.value = store.getters[entityData.getter] || [];
    items.value = store.getters[entityData.items];
  }

  if (params && params.id) {
    await store.dispatch(`get${entity.charAt(0).toUpperCase() + entity.slice(1)}ById`, params.id);
  }
};

// Détection de l'état de la page
const determinePageState = (routeName) => {
  if (routeName.includes('View')) return 'details';
  if (routeName.includes('List')) return 'list';
  if (routeName.includes('Edit')) return 'edit';
  return 'create';
};

onBeforeMount(async () => {
  await loadEntityData(entityName.value, params);
  if (route && route.name) {
    pageState.value = determinePageState(route.name);
  }
});


onBeforeRouteLeave((to, from, next) => {
  if (to.params && to.params.id) {
    switch (entityName.value) {
      case 'user':
        store.dispatch('getUserById', to.params.id)
        break;
      case 'tournament':
        store.dispatch('getTournamentById', to.params.id)
        break;
      case 'structure':
        store.dispatch('getStructureById', to.params.id);
        break;
      case 'player':
        store.dispatch('getPlayerById', to.params.id)
        break;
      case 'tag':
        store.dispatch('getTagById', to.params.id)
        break;
      case 'invitation':
        store.dispatch('getInvitationById', to.params.id)
        break;
      case 'bo-format':
        store.dispatch('getBoFormatById', to.params.id)
        break;
      case 'platform':
        store.dispatch('getPlatformById', to.params.id)
        break;
      case 'tier':
        store.dispatch('getTierById', to.params.id)
        break;
      case 'game':
        store.dispatch('getGameById', to.params.id)
        break;
    }
  }
  
  if (to && to.name && to.name.includes('View')) {
    pageState.value = 'details';
  } else if (to && to.name && to.name.includes('List')) {
    pageState.value = 'list';
  } else if (to && to.name && to.name.includes('Edit')) {
    pageState.value = 'edit';
  } else {
    pageState.value = 'create';
  }
  next();
})
</script>