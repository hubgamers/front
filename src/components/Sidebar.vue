<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'SidebarComponent'
})
</script>

<template>
  <div class="sidebar min-h-screen">
    <nav>
      <ul>
        <li>
          <div class="user_infos">
            <div class="avatar">
              <img class="rounded-full" src="https://picsum.photos/200" alt="Avatar">
            </div>
            <div class="flex flex-col">
              <span class="text-lg text-center">John Doe</span>
              <RouterLink to="/dashboard/profile">Accéder à mon compte</RouterLink>
            </div>
          </div>
        </li>
        <li>
          <i class="fa-solid fa-gauge"></i>
          <RouterLink to="/dashboard">Tableau de bord</RouterLink>
        </li>
        <li>
          <i class="fa-solid fa-people-group"></i>
          <RouterLink to="/dashboard/my-teams">Mes équipes</RouterLink>
        </li>
        <li>
          <i class="fa-solid fa-trophy"></i>
          <RouterLink to="/dashboard/my-tournaments">Mes tournois</RouterLink>
        </li>
        <li style="padding: 0">
          <ul class="w-full">
            <li class="bg-black text-white">
              <i class="fa-solid fa-cog"></i>
              <RouterLink to="/dashboard/options" class="text-white">Paramètres</RouterLink>
            </li>
            <li class="bg-red-700 text-white">
              <i class="fa-solid fa-unlink"></i>
              <RouterLink to="/auth/logout" class="text-white">Déconnexion</RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.sidebar {
  background: rgba(210, 210, 210, 0.49);

  .user_infos {
    display: flex;
    flex-flow: column;
    padding: 0 10px;
  }
  
  nav > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    gap: 2rem;
    li {
      padding: 10px;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.3rem;
      width: 100%;

      &:hover {
        transition: all;
        transition-duration: 0.5s;
        cursor: pointer;
        background: rgba(210, 210, 210, 0.7);
      }

      ul:last-of-type {
        display: flex;
        flex-flow: column;
        gap: 1rem;
        padding: 0;
      }
    }
  }
}
</style>