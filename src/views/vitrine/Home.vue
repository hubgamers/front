<template>
  <VitrineLayout>
    <div class="container max-w-2xl flex flex-col px-6">
      <img src="../../assets/HubGamers.png" alt="Logo de HubGamers" class="max-w-36">
      <h1>{{stateForm === 'register' ? 'Créer un compte' : 'Se connecter'}}</h1>
      <p v-if="stateForm === 'register'">Commencer l'aventure sur HubGamers en me créant un compte.</p>
      <p v-else-if="stateForm === 'login'">Accéder à votre compte pour gérer votre structure.</p>
      <div v-if="stateForm === 'register'">
        <input-text v-model="registerForm.email" type="email" label="Email" placeholder="hello@hubgamers.fr" :required="true" />
        <input-text v-model="registerForm.password" type="password" label="Mot de passe" placeholder="•••••••••" :required="true" />
        <input-text v-model="registerForm.confirmPassword" type="password" label="Confirmer le mot de passe" placeholder="•••••••••" :required="true" />
        <input-text v-model="registerForm.agreeTerms" type="checkbox" label="J'accepte les conditions générales." :required="true" />
        <div class="flex flex-col sm:flex-row gap-4">
          <fwb-button color="default" @click="submitForm()" :disabled="isSubmitted">S'inscrire</fwb-button>
          <fwb-button color="alternative" @click="toggleStateForm()" :disabled="isSubmitted">Déjà un compte, je me connecte</fwb-button>
        </div>
      </div>
      <div v-if="stateForm === 'login'">
        <input-text v-model="loginForm.login" type="text" label="Nom d'utilisateur ou adresse mail" placeholder="helloHubGamers ou hello@hubgamers.fr" :required="true" />
        <input-text v-model="loginForm.password" type="password" label="Mot de passe" placeholder="•••••••••" :required="true" />
        <div class="flex flex-col sm:flex-row gap-4">
          <fwb-button color="default" @click="submitForm()" :disabled="isSubmitted">Se connecter</fwb-button>
          <fwb-button color="alternative" @click="toggleStateForm()" :disabled="isSubmitted">Je n'ai pas de compte, je m'inscris</fwb-button>
        </div>
      </div>
    </div>
  </VitrineLayout>
</template>

<script setup>
import { defineComponent, onBeforeMount, ref } from 'vue'
import VitrineLayout from '@/layout/VitrineLayout.vue'
import InputText from '@/components/InputText.vue'
import { FwbButton } from 'flowbite-vue'
import { useStore } from 'vuex';
import { notify } from '@kyvg/vue3-notification';
import { useRoute, useRouter } from 'vue-router';

defineComponent({
  name: 'HomePage'
})

const stateForm = ref('register')
function toggleStateForm() {
  stateForm.value = stateForm.value === 'register' ? 'login' : 'register'
}

const registerForm = ref({
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
})
const loginForm = ref({
  login: '',
  password: ''
})

const store = useStore();
const router = useRouter();
const route = useRoute();
onBeforeMount(() => {
  if (route.name === 'Login') {
    stateForm.value = 'login';
  } else {
    stateForm.value = 'register';
  }
})

const isSubmitted = ref(false);
function submitForm() {
  console.log('submit form')
  if (stateForm.value === 'register') {
    register();
  } else {
    login();
  }
}

function register() {
  store.dispatch('register', {
      username: registerForm.value.username,
      email: registerForm.value.email,
      password: registerForm.value.password
    })
    .then(() => {
      notify({
        title: 'Succès',
        text: 'Votre compte a été créé, veuillez patientez pendant la redirection',
        type: 'success'
      })
      loginForm.value.login = registerForm.value.email;
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
  store.dispatch('login', {
    login: loginForm.value.login, 
    password: loginForm.value.password
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
      console.log(error)
      if (error.status && error.status === 401) {
        notify({
          title: 'Erreur',
          text: 'Identifiant ou mot de passe incorrect',
          type: 'error'
        })
        isSubmitted.value = false;
        return;
      } else if (error.status && error.status === 400) {
        notify({
          title: 'Erreur',
          text: 'Le compte n\'existe pas',
          type: 'error'
        })
      } else {
        notify({
          title: 'Erreur',
          text: error.data.error,
          type: 'error'
        })
      }
      isSubmitted.value = false;
    })
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #339CA9;
}
p {
  margin-bottom: 1rem;
  color: #4A5568;
}
input {
  background-color: #f9fafb!important;
}
</style>