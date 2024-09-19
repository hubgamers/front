<template>
  <fwb-sidebar class="static h-full">
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
        <fwb-sidebar-item class="pl-11"  link="/dashboard/my-structures"> Mes structures </fwb-sidebar-item>
        <fwb-sidebar-item class="pl-11"  link="/dashboard/structures/create"> Créer une structure </fwb-sidebar-item>
      </template>
    </fwb-sidebar-dropdown-item>
    <fwb-sidebar-dropdown-item>
      <template #icon>
        <i class="fa-solid fa-trophy"></i>
      </template>
      <template #trigger>Tournois</template>
      <template #default>
        <fwb-sidebar-item class="pl-11" link="/dashboard/tournaments"> Tous les tournois </fwb-sidebar-item>
        <fwb-sidebar-item class="pl-11"  link="/dashboard/my-tournaments"> Mes tournois </fwb-sidebar-item>
        <fwb-sidebar-item class="pl-11"  link="/dashboard/tournaments/create"> Créer un tournoi </fwb-sidebar-item>
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
        <fwb-sidebar-item class="pl-11"  link="/dashboard/my-subscriptions"> Gérer mon abonnement </fwb-sidebar-item>
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
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import { FwbSidebar, FwbSidebarItem, FwbSidebarDropdownItem } from 'flowbite-vue'
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
