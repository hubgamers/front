<template>
  <div class="flex">
    <!-- Bouton pour ouvrir la sidebar sur mobile -->
    <button 
      @click="toggleSidebar" 
      class="sm:hidden p-4 text-gray-500 focus:outline-none fixed top-0 left-0 z-50"
    >
      <i class="fa-solid fa-bars"></i>
    </button>

    <!-- Sidebar -->
    <fwb-sidebar 
      class="fixed sm:static h-full z-40 sm:z-auto bg-white sm:bg-transparent transition-transform transform sm:translate-x-0"
      :class="{'-translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen}"
    >
      <div>
        <img src="../../../assets/logo.svg" alt="Logo HubGamers">
        <RouterLink to="/dashboard/profile" class="flex items-center gap-1 my-4">
          <img class="w-10 h-10 rounded-full" :src="(store.getters.getUser && store.getters.getUser.avatar) ? store.getters.getUser.avatar : 'https://avatar.iran.liara.run/public/6'" alt="Rounded avatar">
          <span class="font-semibold">{{ (store.getters.getUser && store.getters.getUser.username) ? store.getters.getUser.username : ''}}</span>
        </RouterLink>
      </div>
      <fwb-sidebar-item link="/dashboard">
        <template #icon>
          <i class="fa-solid fa-gauge-high"></i>
        </template>
        <template #default>Tableau de bord</template>
      </fwb-sidebar-item>
      <fwb-sidebar-dropdown-item>
        <template #icon>
          <i class="fa-solid fa-people-group"></i>
        </template>
        <template #trigger>Structures</template>
        <template #default>
          <fwb-sidebar-item class="pl-11" link="/dashboard/structures"> Toutes les structures </fwb-sidebar-item>
          <fwb-sidebar-item class="pl-11" link="/dashboard/my-structures"> Mes structures </fwb-sidebar-item>
          <fwb-sidebar-item class="pl-11" link="/dashboard/structures/create"> Créer une structure </fwb-sidebar-item>
        </template>
      </fwb-sidebar-dropdown-item>
      <fwb-sidebar-dropdown-item>
        <template #icon>
          <i class="fa-solid fa-gamepad"></i>
        </template>
        <template #trigger>Scrims</template>
        <template #default>
          <fwb-sidebar-item class="pl-11" link="/dashboard/scrims"> Toutes les scrims </fwb-sidebar-item>
          <fwb-sidebar-item class="pl-11" link="/dashboard/my-scrims"> Mes scrims </fwb-sidebar-item>
          <fwb-sidebar-item class="pl-11" link="/dashboard/scrims/create"> Créer une scrim </fwb-sidebar-item>
        </template>
      </fwb-sidebar-dropdown-item>
      <fwb-sidebar-dropdown-item>
        <template #icon>
          <i class="fa-solid fa-trophy"></i>
        </template>
        <template #trigger>Tournois</template>
        <template #default>
          <fwb-sidebar-item class="pl-11" link="/dashboard/tournaments"> Tous les tournois </fwb-sidebar-item>
          <fwb-sidebar-item class="pl-11" link="/dashboard/my-tournaments"> Mes tournois </fwb-sidebar-item>
          <fwb-sidebar-item class="pl-11" link="/dashboard/tournaments/create"> Créer un tournoi </fwb-sidebar-item>
        </template>
      </fwb-sidebar-dropdown-item>
      <fwb-sidebar-item link="/dashboard/players">
        <template #icon>
          <i class="fa-solid fa-headset"></i>
        </template>
        <template #default>Joueurs</template>
      </fwb-sidebar-item>
      <fwb-sidebar-item link="/dashboard/production">
        <template #icon>
          <i class="fa-solid fa-satellite-dish"></i>
        </template>
        <template #default>Production</template>
      </fwb-sidebar-item>
      <fwb-sidebar-dropdown-item>
        <template #icon>
          <i class="fa-solid fa-bag-shopping"></i>
        </template>
        <template #trigger>Abonnement</template>
        <template #default>
          <fwb-sidebar-item class="pl-11" link="/dashboard/subscriptions"> Offres d'abonnement </fwb-sidebar-item>
          <fwb-sidebar-item class="pl-11" link="/dashboard/my-subscription"> Gérer mon abonnement </fwb-sidebar-item>
        </template>
      </fwb-sidebar-dropdown-item>
      <fwb-sidebar-item link="/contact">
        <template #icon>
          <i class="fa-regular fa-circle-question"></i>
        </template>
        <template #default>Besoin d'aide</template>
      </fwb-sidebar-item>
      <fwb-sidebar-item link="/admin" v-if="userIdAdmin">
        <template #icon>
          <i class="fa-solid fa-hammer"></i>
        </template>
        <template #default>Admin</template>
      </fwb-sidebar-item>
      <li class="list-none">
        <a href="#" @click="logout" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <i class="fa-solid fa-right-from-bracket"></i>
          <span class="ms-3">Se déconnecter</span>
        </a>
      </li>
    </fwb-sidebar>

    <!-- Overlay pour fermer la sidebar sur mobile -->
    <div 
      v-if="isSidebarOpen && isMobile" 
      class="fixed inset-0 bg-gray-900 opacity-50"
      @click="toggleSidebar"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useNotification } from '@kyvg/vue3-notification';
import { useStore } from 'vuex';
import { FwbSidebar, FwbSidebarItem, FwbSidebarDropdownItem } from 'flowbite-vue'

defineComponent({
  name: 'SidebarComponent'
})

const router = useRouter();
const { notify } = useNotification();
const userIdAdmin = ref(localStorage.getItem('roles').includes('ROLE_ADMIN'));

const store = useStore();

const isSidebarOpen = ref(false);  // Variable pour gérer l'ouverture de la sidebar

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

// Détecter si l'utilisateur est sur mobile
const isMobile = computed(() => window.innerWidth < 640);

function logout() {
  localStorage.clear();
  notify({
    type: 'info',
    title: 'Déconnexion',
    text: 'Vous avez été déconnecté avec succès.'
  });
  router.push('/');
}
</script>
