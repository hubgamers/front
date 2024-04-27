<template>
  <div class="sidebar">
    <div v-if="showProfile" class="header">
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
    <hr>
    <nav>
      <ul>
        <li>
          <i class="fa fa-file"></i>
          <span @click="$emit('changeSideBarStatus', 'tournaments_registrations')">Inscriptions tournois</span>
        </li>
        <li>
          <i class="fa fa-message"></i>
          <span @click="$emit('changeSideBarStatus', 'messages')">Messages</span>
        </li>
      </ul>
    </nav>
    <hr>
    <nav>
      <ul>
        <li class="dropdownLi">
          <div>
            <i class="fa fa-people-group"></i>
            <span @click="showDropDown">Equipe</span>
          </div>
          <ul v-show="isDropDownVisible" class="dropdown">
            <li>
              <i class="fa fa-user-alt"></i>
              <span @click="$emit('changeSideBarStatus', 'compositon')">Composition</span>
            </li>
            <li>
              <i class="fa fa-file-edit"></i>
              <span @click="$emit('changeSideBarStatus', 'configuration')">Configuration</span>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <hr>
    <nav>
      <ul>
        <li>
          <i class="fa fa-trash text-red-600"></i>
          <span class="text-red-600" @click="$emit('changeSideBarStatus', 'dangerous_area')">Zone dangereuse</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'

defineComponent({
  name: 'SidebarOnPage'
})

defineProps({
  showProfile: {
    type: Boolean,
    default: true
  },
  team: {
    type: Object,
    required: true
  },
  tabStatus: {
    type: String,
    required: true
  }
})

let isDropDownVisible = ref(false);
function showDropDown() {
  isDropDownVisible.value = !isDropDownVisible.value;
}
let sideBarStatus = ref('')
defineEmits({
  changeSideBarStatus: null
})
</script>

<style lang="scss" scoped>
.sidebar {
  background: #FFF;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 300px;
  width: 100%;
  padding: 2rem 0;
  
  span {
    cursor: pointer;
  }
  
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
  
  nav ul li {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 2rem;
    
    &:hover {
      transition: all .5s;
      background-color: #F1F2F7;
    }

    &.dropdownLi {
      flex-flow: column;
      align-items: start;
      & > div {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
      }
    }
    
    ul.dropdown {
      flex-direction: column;
      gap: 1rem;
    }
  }
}
</style>