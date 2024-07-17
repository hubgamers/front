<template>
  <header>
    <div class="menu">
      <h2 :class="{ 'is-open': isMenuOpen }">HubGamers</h2>
      <button class="menu-toggle" @click="toggleMenu">
        <i class="fa fa-bars"></i>
      </button>
      <nav :class="{ 'is-open': isMenuOpen }">
        <ul>
          <li>
            <RouterLink to="/" @click="closeMenu">Accueil</RouterLink>
          </li>
          <li>
            <RouterLink to="/features" @click="closeMenu">Fonctionnalités</RouterLink>
          </li>
          <li>
            <RouterLink to="/pricing" @click="closeMenu">Tarifs</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" @click="closeMenu">A propos</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" @click="closeMenu">Contactez-nous</RouterLink>
          </li>
          <li class="is-mobile-link" v-if="!isConnected">
            <RouterLink to="/auth/login" @click="closeMenu">Connexion</RouterLink>
          </li>
          <li class="is-mobile-link" v-if="!isConnected">
            <RouterLink to="/auth/register" @click="closeMenu">Inscription</RouterLink>
          </li>
          <li class="is-mobile-link" v-if="isConnected">
            <RouterLink to="/dashboard" @click="closeMenu">Tableau de bord</RouterLink>
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

<script setup>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

defineComponent({
  name: 'NavbarComponent',
})

let isConnected = ref(false)
let isMenuOpen = ref(false)

if (localStorage.getItem('userId')) {
  isConnected.value = true
}

const router = useRouter();
function logout() {
  localStorage.clear();
  router.push('/');
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
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
      &.is-open {
        display: none;
      }
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      color: #FFFFFF;
      font-size: 1.5rem;
    }

    nav {
      ul {
        display: flex;
        gap: 2rem;

        li a {
          font-weight: 700;
          color: #FFFFFF;

          &:hover, &:focus, &:active {
            color: #9DD9D2;
          }
        }
      }

      &.is-open {
        display: block;
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
  
  .is-mobile-link {
    display: none;
    @media screen and (max-width: 768px){
      display: block;
    }
  }

  @media (max-width: 768px) {
    .menu {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .menu-toggle {
        display: block;
      }

      nav {
        display: none;
        width: 100%;
        ul {
          flex-direction: column;
          gap: 1rem;
          li {
            width: 100%;
            a {
              display: block;
              padding: 0.5rem 0;
            }
          }
        }
      }
    }

    .actions {
      display: none;
      @media screen and (min-width: 768px){
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
}
</style>
