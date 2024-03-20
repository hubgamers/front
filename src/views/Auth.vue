<template>
  <div class="py-10 px-10">
    <Topbar :title="isLogin ? 'Se connecter' : 'Se créer un compte'" />

    <form v-if="isLogin" @submit.prevent="login">
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label for="login" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom d'utilisateur ou adresse mail</label>
          <input v-model="auth.login" type="text" id="login" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="JohnDoe80" required />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
          <input v-model="auth.password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••••••" required />
        </div>
      </div>
      <div>
        <ButtonDark typeBtn="submit">Se connecter</ButtonDark>
      </div>
    </form>

    <form v-if="!isLogin" @submit.prevent="register">
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom d'utilisateur</label>
          <input v-model="auth.username" type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="JohnDoe80" required />
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse mail</label>
          <input v-model="auth.email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@hubgamers.fr" required />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
          <input v-model="auth.password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••••••" required />
        </div>
        <div>
          <ButtonDark typeBtn="submit">S'inscrire</ButtonDark>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import router from '@/router'
import { useRoute } from 'vue-router'
import ButtonDark from '@/components/ButtonDark.vue'
defineComponent({
  name: 'AuthentificationPage',
  components: {
    Topbar
  }
})

const store = useStore();
const params = useRoute().params;

let isLogin = ref(true)
if (params && params.register) {
  isLogin.value = false
}

let auth = ref({
  login: '',
  username: '',
  email: '',
  password: ''
})

function register() {
  store.dispatch('register', {
    username: auth.value.username,
    email: auth.value.email,
    password: auth.value.password
  }).then(() => {
    router.push('/dashboard')
  })
}

function login() {
  store.dispatch('login', { 
    login: auth.value.login, 
    password: auth.value.password
  }).then(() => {
    router.push('/dashboard')
  })
}
</script>