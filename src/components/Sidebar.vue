<template>
  <div class="sidebar">
    <div class="profile">
      <div class="avatar">
        <img src="https://picsum.photos/150/150" alt="avatar" />
      </div>
      <RouterLink to="/profile">Mon profil</RouterLink>
    </div>
    <nav>
      <ul class="menu">
        <li>MENU</li>
        <li class="li">
          <i class="fa fa-dashboard"></i>
          <RouterLink to="/dashboard">Tableau de bord</RouterLink>
        </li>
        <li class="li">
          <i class="fa fa-people-group"></i>
          <RouterLink to="/my-teams">Mes équipes</RouterLink>
        </li>
        <li class="li">
          <i class="fa fa-trophy"></i>
          <RouterLink to="/tournaments">Tournois <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">A venir</span></RouterLink>
        </li>
        <li class="li">
          <i class="fa fa-satellite-dish"></i>
          <RouterLink to="/production">Production <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">A venir</span></RouterLink>
        </li>
      </ul>
      <ul class="autres">
        <li>AUTRES</li>
        <li class="li">
          <i class="fa fa-gear"></i>
          <RouterLink to="/settings">Paramètres</RouterLink>
        </li>
        <li class="li">
          <i class="fa fa-wallet"></i>
          <RouterLink to="/payments">Paiements</RouterLink>
        </li>
        <li class="li">
          <i class="fa fa-circle-user"></i>
          <RouterLink to="/account">Compte</RouterLink>
        </li>
        <li class="li">
          <i class="fa fa-circle-info"></i>
          <RouterLink to="/help">Besoin d'aide</RouterLink>
        </li>
      </ul>
      
      <ul>
        <li class="li">
          <i class="fa fa-door-open"></i>
          <RouterLink to="/logout">Se déconnecter</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'SidebarComponent'
})
</script>

<style lang="scss">
.sidebar {
  background: #F1F2F7;
  height: 100vh;
  padding: 2rem 0;
  
  .profile {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    margin-bottom: 2rem;
    
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
  }
  
  nav {
    padding: 2rem;
    
    ul > li {
      padding: 1rem;
      transition: all .5s;
      border-radius: 5px;
      color: #082431;
      &.li:hover {
        transition: all .5s;
        background-color: #8aa6b4;
      }
      a {
        font-weight: 600;
        color: #6b2865;
      }
      i {
        padding-right: 1rem;
      }
    }
  }
}
</style>