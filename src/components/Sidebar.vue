<script setup lang="ts">
</script>

<template>
  <div class="sidebar">
    <nav>
      <ul>
        <li>
          <div class="user_infos">
            <div class="avatar">
              <img src="" alt="">
            </div>
            <div class="user_name">
              <h2>John Doe</h2>
              <RouterLink to="/profile">Accéder à mon compte</RouterLink>
            </div>
          </div>
        </li>
        <li>
          <i class="fa-solid fa-gauge"></i>
          <RouterLink to="/">Tableau de bord</RouterLink>
        </li>
        <li>
          <i class="fa-solid fa-people-group"></i>
          <RouterLink to="/my-teams">Mes équipes</RouterLink>
        </li>
        <li>
          <i class="fa-solid fa-trophy"></i>
          <RouterLink to="/my-tournaments">Mes tournois</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.sidebar {
  background: rgba(210, 210, 210, 0.49);
  height: 100vh;
  
  .user_infos {
    display: flex;
    flex-flow: column;
    padding: 0 10px;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: column nowrap;
    gap: 3rem;
    li {
      padding: 10px;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.3rem;
    }
  }
}
</style>