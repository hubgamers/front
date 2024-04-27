<template>
  <div class="sidebar">
    <div v-if="showProfile"  class="header">
      <div class="profile">
        <div>
          <div class="avatar">
            <img src="https://picsum.photos/150/150" alt="avatar" />
          </div>
          <div>
            <h3 class="font-bold">Vitality</h3>
            <p>Offre gratuite</p>
          </div>
        </div>
        <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-800 ring-1 ring-inset ring-blue-600/20">Mise à niveau</span>
      </div>
    </div>
    <hr>
    <div class="p-5">
      <p>Vous avez l’offre gratuite.</p>
      <p>Explorer les avantages d’un compte pro.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'SidebarOnPage'
})

defineProps({
  showProfile: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="scss" scoped>
.sidebar {
  background: #FFF;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 300px;
  width: 100%;

  .profile {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    margin-bottom: 2rem;

    & > div {
      display: flex;
    }

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
}
</style>