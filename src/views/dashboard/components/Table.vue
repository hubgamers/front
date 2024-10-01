<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
      <thead class="bg-gray-50 dark:bg-gray-700">
      <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          <div class="flex items-center">
            <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="checkbox-all" class="sr-only">checkbox</label>
          </div>
        </th>
        <th v-for="(column, index) in columns" :key="index" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          {{ getColumnHeader(column) }}
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Action
        </th>
      </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
      <tr v-for="(item, index) in items" :key="index" class="bg-white dark:bg-gray-800">
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="checkbox-table-1" class="sr-only">checkbox</label>
          </div>
        </td>
        <td v-for="(column, key) in columns" :key="key" class="px-6 py-4 whitespace-nowrap">
          <template v-if="column === 'players'">
            <p>{{ item[column].length }}</p>
          </template>
          <template v-else-if="column === 'status'">
            <span :class="getStatusClass(item[column])">{{ getStatusText(item[column]) }}</span>
          </template>
          <template v-else-if="column === 'game'">
            <p>{{store.getters.getGames.filter((game) => game.id === parseInt(item[column]))[0].name }}</p>
          </template>
          <template v-else>
            {{ getColumnValue(item, column) }}
          </template>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
          <div class="flex items-center">
            <div v-if="type === ''" class="flex gap-1">
              <RouterLink :to="url + 'edit/' + item['id']" class="text-blue-600 hover:underline dark:text-blue-500">
                Editer
              </RouterLink>
              <RouterLink :to="url + 'view/' + item['id']" class="text-blue-600 hover:underline dark:text-blue-500">
                Détails
              </RouterLink>
            </div>
            <template v-else-if="type === 'invitation'">
              <template v-if="item['status'] === 'PENDING' && (canAcceptInvitation || item['type'] === 'JOIN_STAFF' || item['type'] === 'JOIN_TEAM_ROSTER')">
                <button @click="acceptInvitation(item['id'])" class="text-green-600 hover:underline dark:text-green-500">Accepter</button>
                <button @click="declineInvitation(item['id'])" class="text-red-600 hover:underline dark:text-red-500">Refuser</button>
              </template>
            </template>
            <template v-else-if="type === 'teamRoster'">
              <button @click="editTeamRoster(item['id'])" class="text-blue-600 hover:underline dark:text-blue-500">Editer</button>
            </template>
            <template v-else-if="type === 'structureId'">
              <button class="text-blue-600 hover:underline dark:text-blue-500">
                <RouterLink to="/team/{{ item['id'] }}">Voir</RouterLink>
              </button>
            </template>
          </div>
        </td>
      </tr>
      <p v-if="items.length === 0">Aucune donnée disponible pour le moment.</p>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { notify } from '@kyvg/vue3-notification'

defineComponent({
  name: 'TableComponent'
})

defineProps({
  columns: {
    type: Array,
  },
  items: {
    type: Array
  },
  url: {
    type: String,
    default: ''
  },
  type: {
    type: String
  },
  canAcceptInvitation: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['edit', 'delete']);

const store = useStore();
store.dispatch('getAllGames')

function getColumnHeader(column) {
  switch (column) {
    case 'userId':
      return 'Utilisateur';
    case 'playerId':
      return 'Joueur';
    case 'title':
      return 'Titre';
    case 'name':
      return 'Nom';
    case 'visibility':
      return 'Visibilité';
    case 'game':
      return 'Jeu';
    case 'platform':
      return 'Plateforme';
    case 'players':
      return 'Joueurs';
    case 'structureId':
      return 'Equipe';
    case 'rosterId':
      return 'Roster';
    default:
      return column;
  }
}

function getColumnValue(item, column) {
  if (column === 'playerId' && store.getters.getPlayer !== null) {
    return store.getters.getPlayer.username;
  } else if (column === 'structureId' && store.getters.getStructure !== null) {
    return store.getters.getStructure.name;
  } else {
    return item[column];
  }
}

function getStatusText(status) {
  switch (status) {
    case 'PENDING':
      return 'En attente';
    case 'ACCEPTED':
      return 'Accepté';
    case 'REFUSED':
      return 'Refusé';
    default:
      return status;
  }
}

function getStatusClass(status) {
  switch (status) {
    case 'PENDING':
      return 'bg-yellow-100 text-yellow-800 p-2 rounded';
    case 'ACCEPTED':
      return 'bg-green-100 text-green-800 p-2 rounded';
    case 'REFUSED':
      return 'bg-red-100 text-red-800 p-2 rounded';
    default:
      return '';
  }
}

function acceptInvitation(invitationId) {
  store.dispatch('acceptInvitation', invitationId)
  .then(() => {
    notify({
      type: 'success',
      title: 'Invitation acceptée',
      text: 'Vous avez accepté l\'invitation'
    });
    store.dispatch('getAllInvitationsByStructureId', store.getters.getStructure.id);
  })
  .catch(() => {
    notify({
      type: 'error',
      title: 'Erreur',
      text: 'Une erreur est survenue lors de l\'acceptation de l\'invitation'
    });
  });
}

function declineInvitation(invitationId) {
  store.dispatch('declineInvitation', invitationId)
  .then(() => {
    notify({
      type: 'success',
      title: 'Invitation refusée',
      text: 'Vous avez refusé l\'invitation'
    });
    store.dispatch('getAllInvitationsByStructureId', store.getters.getStructure.id);
  })
  .catch(() => {
    notify({
      type: 'error',
      title: 'Erreur',
      text: 'Une erreur est survenue lors du refus de l\'invitation'
    });
  });
}

function editTeamRoster(teamRosterId) {
  emit('edit', teamRosterId)
}
</script>

<style scoped>
/* Add any necessary scoped styles */
</style>
