<script setup lang="ts">
</script>

<template>
  <div class="sidebar">
    <div class="user_infos">
      <div class="avatar">
        <img src="" alt="">
      </div>
      <div class="user_name">
        <h2>John Doe</h2>
        <span>Accéder à mon compte</span>
      </div>
    </div>
    
    <nav>
      <ul>
        <li>
          <i class="fa fa-test"></i>
          <span>Tableau de bord</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.sidebar {
  background: yellow;
  
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 10px;
      display: flex;
      align-items: center;
      i {
        margin-right: 10px;
      }
    }
  }
}
</style>