<template>
  <div class="sidebar">
    <div class="profile">
      <RouterLink to="/dashboard/profile">
        <div class="avatar">
          <img :src="(store.getters.getUser && store.getters.getUser.avatar) ? store.getters.getUser.avatar : '../../public/user.png'" alt="avatar" />
        </div>
       <div>
         <p>Accéder à mon profil</p>
       </div>
      </RouterLink>
    </div>
    <nav>
      <ul class="menu">
        <li>MENU</li>
        <li class="li">
          <RouterLink to="/dashboard">
            <i class="fa fa-dashboard"></i>
            <span>Tableau de bord</span>
          </RouterLink>
        </li>
        <li class="li">
          <RouterLink to="/dashboard/profile?tab=invitations">
            <i class="fa fa-envelope-open"></i>
            <span>Mes invitations</span>
          </RouterLink>
        </li>
        <li class="li">
          <RouterLink to="/dashboard/teams">
            <i class="fa fa-people-group"></i>
            <span>Équipes</span>
          </RouterLink>
        </li>
        <li class="li">
          <RouterLink to="/dashboard/players">
            <i class="fa-solid fa-users"></i>
            <span>Joueurs</span>
          </RouterLink>
        </li>
        <li class="li">
          <RouterLink to="/dashboard/production">
            <i class="fa fa-satellite-dish"></i>
            <span>Production <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">A venir</span></span>
          </RouterLink>
        </li>
        <li class="li">
          <RouterLink to="/dashboard/tournaments">
            <i class="fa fa-trophy"></i>
            <span>Tournois <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">A venir</span></span>
          </RouterLink>
        </li>
      </ul>
      <ul class="autres">
        <li>AUTRES</li>
        <li class="li">
          <RouterLink to="/dashboard/settings">
            <i class="fa fa-gear"></i>
            <span>Paramètres</span>
          </RouterLink>
        </li>
        <li class="li">
          <RouterLink to="/dashboard/subscriptions">
            <i class="fa fa-wallet"></i>
            <span>Abonnement</span>
          </RouterLink>
        </li>
        <li class="li">
          <RouterLink to="/help">
            <i class="fa fa-circle-info"></i>
            <span>Besoin d'aide</span>
          </RouterLink>
        </li>
        <li>
          <a href="#" @click="logout">
            <i class="fa fa-door-open"></i>
            <span>Se déconnecter</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useNotification } from '@kyvg/vue3-notification'
import { useStore } from 'vuex'

defineComponent({
  name: 'SidebarComponent'
})

const router = useRouter();
const { notify } = useNotification();
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

<style lang="scss" scoped>
.sidebar {
  padding: 1rem 0;
  background-color: #F1F2F7;
  height: 100vh;
  .profile {
    a {
      display: flex;
      flex-flow: column;
      align-items: center;
      font-weight: 400;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      div:last-of-type {
        display: none;
        @media screen and (min-width: 768px) {
          display: block;
          text-align: center;
          color: #28536B;
        }
      }
    }
  }

  nav {
    @media screen and (min-width: 768px) {
      padding: 1rem;
    }
    ul {
      display: flex;
      flex-flow: column;
      align-items: center;
      @media screen and (min-width: 1400px) {
        align-items: start;
        gap: 1rem;
      }
      li {
        padding: .8rem;
        a {
          @media screen and (min-width: 768px) {
            display: flex;
            flex-flow: column;
            align-items: center;
            text-align: center;
            @media screen and (min-width: 1400px) {
              flex-flow: row;
              gap: .5rem;
            }
            color: #28536B;
            font-weight: 400;
            &:hover {
              transition: all .5s;
              color: #9DD9D2;
            }
          }
          i {
            font-size: 1.3rem;
          }
          span {
            display: none;
            @media screen and (min-width: 768px) {
              display: flex;
              gap: .4rem;
              align-items: center;
            }
          }
        }
      }
    }
  }
}
</style>