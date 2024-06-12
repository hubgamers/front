<template>
  <VitrineLayout>
    <div class="row justify-between w100 p2">
      <div class="w50">
        <h2>Discutons de votre projet</h2>
        <p>Vous avez un projet que vous souhaitez développer à l’aide de notre outil ?</p>
        <p>Une question, ou autre ?</p>
        <br>
        <p class="w80">Laissez nous un message à travers le formulaire suivant. Nous vous contacterons dans les plus brefs délais.</p>
      </div>
      <form class="w50 columns gap-2">
        <InputText
          v-model="email"
          label="Email"
          type="email"
          placeholder="Votre adresse mail"
          required />
        <InputText
          v-model="content"
          label="Message"
          type="textarea"
          placeholder="Votre mesage"
          required />
        <button type="submit" class="green">Envoyer</button>
      </form>
    </div>
  </VitrineLayout>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import VitrineLayout from '@/layout/VitrineLayout.vue'
import InputText from '@/components/InputText.vue'

defineComponent({
  name: 'ContactPage'
})

let email = ref('')
let content = ref('')

function sendContact() {
  console.log('send contact')
}
</script>