<template>
  <VitrineLayout>
    <div class="containerAuth columns items-center">
      <h1 v-if="isLogin">Se connecter</h1>
      <h1 v-else>Créer un compte</h1>
      <div class="containerForm columns gap-1">
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
        <button @click="login" :disabled="isSubmitted" class="info">Se connecter</button>
      </div>
      <template v-else>
        <button @click="register" :disabled="isSubmitted" class="info">Créer un compte</button>
      </template>
    </div>
  </VitrineLayout>
</template>
<script setup>
import { defineComponent, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import router from '@/router/index.js'
import { useRoute } from 'vue-router'
import InputText from '@/components/InputText.vue'
import VitrineLayout from '@/layout/VitrineLayout.vue'
import { useNotification } from '@kyvg/vue3-notification'
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

const isSubmitted = ref(false);
const { notify }  = useNotification()
function register() {
  isSubmitted.value = true;
  store.dispatch('register', {
    username: auth.value.username,
    email: auth.value.email,
    password: auth.value.password
  })
    .then(() => {
      notify({
        title: 'Succès',
        text: 'Votre compte a été créé, veuillez patientez pendant la redirection',
        type: 'success'
      })
      auth.value.login = auth.value.email;
      login();
    })
    .catch((error) => {
      notify({
        title: 'Erreur',
        text: error,
        type: 'error'
      })
      isSubmitted.value = false;
    })
}

function login() {
  isSubmitted.value = true;
  store.dispatch('login', {
    login: auth.value.login, 
    password: auth.value.password
  })
    .then(() => {
      notify({
        title: 'Succès',
        text: 'Vous êtes connecté',
        type: 'success'
      })
      setTimeout(() => {
        router.push('/dashboard')
      }, 300)
     })
    .catch((error) => {
      notify({
        title: 'Erreur',
        text: error,
        type: 'error'
      })
      isSubmitted.value = false;
    })
}
</script>

<style scoped>
.containerAuth {
  background: #FFFFFF;
  max-width: 1400px;
  margin: 0 auto;
  height: fit-content;
  padding: 4rem;
  border-radius: 8px;
}

.containerForm {
  gap: 3rem;
  max-width: 600px;
  min-width: 300px;
  @media screen and (min-width: 768px) {
    max-width: 800px;
    min-width: 600px;
  }
}

h1 {
  color: #000;
}

a {
  color: #000;

  &:hover {
    text-decoration-line: underline;
    text-decoration-color: #000;
  }
}
</style>