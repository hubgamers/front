<template>
  <div class="navbar">
    <div>
      <img class="max-w-[80px]" src="https://via.placeholder.com/50" alt="logo" />
      <h1>HubGamers</h1>
    </div>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">
            Accueil
          </RouterLink>
        </li>
        <li class="dropdown">
          <a href="#" @click="toggleDropdown">Services</a>
          <ul v-show="showDropdown">
            <li>
              <RouterLink to="/tournament">Tournoi</RouterLink>
            </li>
            <li>
              <RouterLink to="/teams">Equipe</RouterLink>
            </li>
            <li>
              <RouterLink to="/player">Joueur</RouterLink>
            </li>
          </ul>
        </li>
        <li>
          <RouterLink to="/contact">
            Contact
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/auth/login">
            <ButtonDark>Se connecter</ButtonDark>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style>
.navbar {
  display: flex;
  justify-content: space-around;
}
.navbar div {
  display: flex;
  gap: 1rem;
  align-items: center;
}
nav ul {
  display: flex;
  gap: 3rem;
  align-items: center;
  padding: 1rem;
}
.dropdown ul {
  display: flex;
  flex-flow: column;
  gap: 1rem;
  padding: 1rem;
  position: absolute;
  margin-top: 1rem;
  background: #dcdcdc;
  max-width: 150px;
}
</style>
<script setup lang="ts">

import ButtonDark from '@/components/ButtonDark.vue'
import { ref } from 'vue'

let showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
</script>