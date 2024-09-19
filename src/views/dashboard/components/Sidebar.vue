<template>
 <div>
  
  <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
  </button>

  <aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div>
          <img src="../../../assets/logo.svg" alt="Logo HubGamers">
          <RouterLink to="/dashboard/profile" class="flex items-center gap-1 my-4">
            <img class="w-10 h-10 rounded-full" :src="(store.getters.getUser && store.getters.getUser.avatar) ? store.getters.getUser.avatar : 'https://avatar.iran.liara.run/public/6'" alt="Rounded avatar">
            <span class="font-semibold">{{ (store.getters.getUser && store.getters.getUser.username) ? store.getters.getUser.username : ''}}</span>
          </RouterLink>
        </div>
        <ul class="space-y-2 font-medium">
          <li>
            <RouterLink to="/dashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <i class="fa-solid fa-gauge-high"></i>
              <span class="ms-3">Tableau de bord</span>
            </RouterLink>
          </li>
          <li>
              <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-structures" data-collapse-toggle="dropdown-structures">
                    <i class="fa-solid fa-people-group"></i>
                    <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Structures</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
              </button>
              <ul id="dropdown-structures" class="hidden py-2 space-y-2">
                    <li>
                      <RouterLink to="/dashboard/structures" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Toutes les structures
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/dashboard/my-structures" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Mes structures
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/dashboard/structures/create" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Créer ma structure
                      </RouterLink>
                    </li>
              </ul>
          </li>
          <li>
              <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-tournaments" data-collapse-toggle="dropdown-tournaments">
                    <i class="fa-solid fa-trophy"></i>
                    <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Tournois</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
              </button>
              <ul id="dropdown-tournaments" class="hidden py-2 space-y-2">
                      <li>
                      <RouterLink to="/dashboard/tournaments" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Tous les tournois
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/dashboard/my-tournaments" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Mes tournois
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/dashboard/tournaments/create" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Créer un tournoi
                      </RouterLink>
                    </li>
              </ul>
          </li>
          <li>
            <RouterLink to="/dashboard/players" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <i class="fa-solid fa-headset"></i>
              <span class="ms-3">Joueurs</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/dashboard/production" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <i class="fa-solid fa-satellite-dish"></i>
              <span class="ms-3">Production</span>
            </RouterLink>
          </li>
          <li>
              <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-subscriptions" data-collapse-toggle="dropdown-subscriptions">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Abonnement</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
              </button>
              <ul id="dropdown-subscriptions" class="hidden py-2 space-y-2">
                      <li>
                      <RouterLink to="/dashboard/subscriptions" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Voir les offres d'abonnement
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/dashboard/my-subscription" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Mon abonnement
                      </RouterLink>
                    </li>
              </ul>
          </li>
          <li>
            <RouterLink to="/contact" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <i class="fa-regular fa-circle-question"></i>
              <span class="ms-3">Besoin d'aide</span>
            </RouterLink>
          </li>
          <li v-if="userIdAdmin">
            <RouterLink to="/admin" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <i class="fa-solid fa-hammer"></i>
              <span class="ms-3">Admin</span>
            </RouterLink>
          </li>
          <li>
            <a href="#" @click="logout" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <i class="fa-solid fa-right-from-bracket"></i>
              <span class="ms-3">Se déconnecter</span>
            </a>
          </li>
        </ul>
    </div>
  </aside>

 </div>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router'
import { useNotification } from '@kyvg/vue3-notification'
import { useStore } from 'vuex';

defineComponent({
  name: 'SidebarComponent'
});

const router = useRouter();
const { notify } = useNotification();
const userIdAdmin = ref(localStorage.getItem('roles').includes('ROLE_ADMIN'));
function logout() {
  localStorage.clear();
  notify({
    type: 'info',
    title: 'Déconnexion',
    text: 'Vous avez été déconnecté avec succès.'
  });
  router.push('/');
}

const store = useStore();
</script>
