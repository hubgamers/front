<template>
  <div class="containerAuth">
    <h1>Créer un compte</h1>
    <div class="containerForm">
      <input-text v-model="auth.username" type="string" label="Nom d'utilisateur" placeholder="Nom d'utilisateur" :required="true" />
      <input-text v-model="auth.email" type="string" label="Email" placeholder="Email" :required="true" />
      <input-text v-model="auth.password" type="password" label="Mot de passe" placeholder="•••••••••" :required="true" />
    </div>
    <button-dark @click="register">Créer un compte</button-dark>
  </div>
</template>
<script setup lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import router from '@/router'
import { useRoute } from 'vue-router'
import ButtonDark from '@/components/ButtonDark.vue'
import InputText from '@/components/InputText.vue'
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
</style>