<template>
  <VitrineLayout>
    <div class="containerAuth">
      <h1 v-if="isLogin">Se connecter</h1>
      <h1 v-else>Créer un compte</h1>
      <div class="containerForm">
        <input-text v-if="!isLogin" v-model="auth.username" type="string" label="Nom d'utilisateur" placeholder="Nom d'utilisateur" :required="true" />
        <input-text v-if="!isLogin" v-model="auth.email" type="string" label="Email" placeholder="example@hubgamers.fr" :required="true" />
        <input-text v-if="isLogin" v-model="auth.login" type="string" label="Identifiant" placeholder="example@hubgamers.fr" :required="true" />
        <input-text v-model="auth.password" type="password" label="Mot de passe" placeholder="•••••••••" :required="true" />
        <input-text v-if="!isLogin" type="checkbox" label="J'accepte les conditions générales d'utilisation." :required="true" />
      </div>
      <div class="p2">
        <div class="columns align-items-center gap-2" v-if="isLogin">
          <RouterLink to="/auth/forgotPassword" class="info">Mot de passe oublié ?</RouterLink>
          <RouterLink to="/auth/register" class="info">Pas encore de compte ? S'inscrire</RouterLink>
        </div>
        <RouterLink v-else to="/auth/login" class="info">Déjà un compte ? Se connecter</RouterLink>
      </div>
      <div v-if="isLogin">
        <button @click="login" class="info">Se connecter</button>
      </div>
      <template v-else>
        <button @click="register" class="info">Créer un compte</button>
      </template>
    </div>
  </VitrineLayout>
</template>
<script setup lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import router from '@/router'
import { useRoute } from 'vue-router'
import InputText from '@/components/InputText.vue'
import VitrineLayout from '@/layout/VitrineLayout.vue'
defineComponent({
  name: 'AuthentificationPage',
})


const store = useStore();
const route = useRoute();
let isLogin = ref(true)
watchEffect(() => {
  isLogin.value = route.path.startsWith('/auth/login')
})

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

<style scoped>
.containerAuth {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.containerForm {
  display: flex;
  flex-flow: column;
  gap: 3rem;
  min-width: 600px;
  max-width: 300px;
}

h1 {
  color: #FFFFFF;
}

a {
  color: #FFFFFF;

  &:hover {
    text-decoration-line: underline;
    text-decoration-color: #FFFFFF;
  }
}
</style>