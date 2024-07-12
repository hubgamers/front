<template>
  <VitrineLayout>
    <div class="row gap-2">
      <div class="text">
        <h1 class="text-8xl">Créez votre équipe en quelques clics</h1>
        <p>Recrutez vos prochains joueurs</p>
        <p>Faites la promotion de votre équipe</p>
        <p>Participez aux tournois des autres utilisateurs</p>
        <p>Organisez vos propres évènements</p>
        <p>Et bien plus !</p>

        <button class="green">
          <RouterLink to="/auth/register">Commencez dès maintenant</RouterLink>
        </button>
      </div>
      <div class="image">
        <img src="../../../public/bg-esport.jpg" alt="BG Esport">
      </div>
    </div>
  </VitrineLayout>
</template>

<script setup>
import { defineComponent } from 'vue'
import VitrineLayout from '@/layout/VitrineLayout.vue'

defineComponent({
  name: 'HomePage'
})
</script>

<style lang="scss" scoped>
.text {
  padding: 0 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;

  h1, p {
    color: #FFFFFF;
  }

  h1 {
    font-size: 3rem;
    margin: inherit inherit 1rem;
  }

  p {
    font-size: 1.3rem;
    padding: 1rem 0;
  }
}
.image {
  flex: 1;
  @media screen and (mix-width: 768px) {
    width: 300px;
  }
}

</style>