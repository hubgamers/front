<template>
  <header>
    <div class="menu">
      <h2>HubGamers</h2>
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Accueil</RouterLink>
          </li>
          <li>
            <RouterLink to="/features">Fonctionnalités</RouterLink>
          </li>
          <li>
            <RouterLink to="/pricing">Tarifs</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">A propos</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact">Contactez-nous</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="actions">
      <template v-if="isConnected">
        <button class="green">
          <RouterLink to="/dashboard">Tableau de bord</RouterLink>
        </button>
        <button class="green" @click="logout">Déconnexion</button>
      </template>
      <button v-else class="green">
        <RouterLink to="/auth/register">S'inscrire gratuitement</RouterLink>
      </button>
      <ul class="socials">
        <li>
          <a href="https://linkedin.com/in/alexis-briet" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://x.com" target="_blank">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://twitch.tv" target="_blank">
            <i class="fa-brands fa-twitch"></i>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
<script setup lang="ts">
import { defineComponent, ref } from 'vue'

defineComponent({
  name: 'NavbarComponent',
})

let isConnected = ref(false)
if (localStorage.getItem('userId')) {
  isConnected.value = true
}

function logout() {
  localStorage.clear();
  window.location.reload();
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin-bottom: 5rem;
  .menu {
    display: flex;
    align-items: center;
    gap: 2rem;
    
    h2 {
      color: #FFFFFF;
      font-size: 1.5rem;
      font-weight: 700;
      margin: inherit;
    }
    
    nav ul {
      display: flex;
      gap: 2rem;
      
      li a {
        font-weight: 400;
        color: #FFFFFF;
        
        &:hover, &:focus, &:active {
          color: #9DD9D2;
        }
      }
    }
  }
  
  .actions {
    display: flex;
    gap: 2rem;
    align-items: center;

    a {
      color: #000;
      &:hover {
        color: #FFF;
      }
    }
    
    ul {
      display: flex;
      gap: 1rem;
      
      li a i {
        color: #FFFFFF;
        
        &:hover, &:focus, &:active {
          color: #9DD9D2;
        }
      }
    }
  }
}
</style>