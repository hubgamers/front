<template>
  <VitrineLayout>
    <div class="row justify-between w100 p2">
      <div>
        <h2>Discutons de votre projet</h2>
        <p>Vous avez un projet que vous souhaitez développer à l’aide de notre outil ?</p>
        <p>Une question, ou autre ?</p>
        <br>
        <p>Laissez nous un message à travers le formulaire suivant. Nous vous contacterons dans les plus brefs délais.</p>
      </div>
      <form class="columns gap-2 form">
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

</script>

<style lang="scss" scoped>
h2 {
  font-size: 1.5rem;
  @media screen and (min-width: 768px){
    font-size: 4rem;
  }
}

.form {
  min-width: 400px;
}
</style>