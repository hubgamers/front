<script setup>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

defineComponent({
  name: 'TableComponent'
});

const props = defineProps({
  columns: {
    type: Array,
  },
  items: {
    type: Array,
  },
  url: {
    type: String,
    default: ''
  }
})

function isLink(value) {
  if (value != null && typeof value === 'string') {
    return value.startsWith('http://') || value.startsWith('https://');
  }
}

const store = useStore();
props.items.forEach(item => {
  props.columns.forEach(column => {
    if (column === 'playerId') {
      getPlayerById(item[column])
    }
  });
});

function getPlayerById(playerId) {
  store.dispatch('getPlayerById', playerId);
}
</script>
<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-white uppercase bg-[#403f3e] dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="p-4">
          <div class="flex items-center">
            <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="checkbox-all" class="sr-only">checkbox</label>
          </div>
        </th>
        <th v-for="(column, index) in columns" :key="index" scope="col" class="px-6 py-3">
          {{ column }}
        </th>
        <th scope="col" class="px-6 py-3">
          Action
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in items" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="w-4 p-4">
          <div class="flex flex-row gap-3 items-center">
            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="checkbox-table-1" class="sr-only">checkbox</label>
            
            <div v-if="url">
              <RouterLink :to="url + item['id']">
                <i class="fas fa-eye"></i>
              </RouterLink>
            </div>
          </div>
        </td>
        <td v-for="(column, key) in columns" :key="key" class="px-6 py-4">
          <template v-if="isLink(item[column])">
            <img :src="item[column]" alt="Image" class="w-[100px]">
          </template>
          <template v-else-if="column === 'players'">
            <p>{{item[column].length}}</p>
          </template>
          <template v-else-if="column === 'status'">
              <span v-if="item[column] === 'PENDING'" class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"><i class="fa fa-hourglass"></i> En attente</span>
              <span v-if="item[column] === 'ACCEPTED'" class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"><i class="fa fa-check"></i> Accepté</span>
              <span v-if="item[column] === 'REFUSED'" class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"><i class="fa fa-x"></i> Refusé</span>
          </template>
          <template v-else-if="column === 'playerId' && store.getters.getPlayer !== null">
            <span>{{store.getters.getPlayer.username}}</span>
          </template>
          <template v-else>
            {{ item[column] }}
          </template>
        </td>
        <td class="px-6 py-4">
          <RouterLink :to="url + 'edit/' + item['id']" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Editer
          </RouterLink>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>