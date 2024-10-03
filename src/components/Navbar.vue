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
            <a href="https://hubgamers.alexisbriet.fr">Retourner sur l'accueil</a>
          </li>
          <li v-if="isConnected">
            <a href="#" @click="logout">Déconnexion</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { notify } from '@kyvg/vue3-notification';
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router';

defineComponent({
  name: 'NavbarComponent',
})

let isConnected = ref(false)
let isMenuOpen = ref(false)

if (localStorage.getItem('userId')) {
  isConnected.value = true
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

const router = useRouter();
function logout() {
  localStorage.clear();
  notify({
    type: 'info',
    title: 'Déconnexion',
    text: 'Vous avez été déconnecté avec succès.'
  });
  router.push('/login');
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
      color: #339CA9;
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
      color: #339CA9;
      font-size: 1.5rem;
      i {
        color: #339CA9;
      }
    }

    nav {
      ul {
        display: flex;
        gap: 2rem;

        li a {
          font-weight: 700;
          color: #000;
          transition: all .5s ease;

          &:hover, &:focus, &:active {
            transition: all .5s ease;
            color: #9DD9D2;
          }
        }
      }

      &.is-open {
        display: block;
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
  }
}
</style>
