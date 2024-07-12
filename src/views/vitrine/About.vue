<template>
  <VitrineLayout>
    <div class="columns align-items-center">
      <h2>Une plateforme tout en un</h2>
      <p>Une solution développée par Alexis BRIET, concepteur développeur d’applications.</p>

      <div class="row align-items-center justify-between mt-4">
        <div class="team">
          <img src="../../../public/alexis-briet.png" alt="Alexis BRIET, Concepteur développeur d'applications" />
          <div class="infos">
            <h4>Alexis BRIET</h4>
            <p>Concepteur développeur d'applications</p>
          </div>
        </div>
      </div>
    </div>
  </VitrineLayout>
</template>

<script setup>
import { defineComponent } from 'vue'
import VitrineLayout from '@/layout/VitrineLayout.vue'

defineComponent({
  name: 'AboutPage'
})
</script>

<style lang="scss" scoped>
h2 {
  font-size: 1.5rem;
  @media screen and (min-width: 768px){
    font-size: 4rem;
  }
}

p {
  padding: 1rem;
  text-align: center;
}

.team {
  position: relative;
  padding: 1rem;
  
  h4 {
    text-align: center;
    font-weight: 700;
  }

  img {
    border-radius: 20px;
  }

  .infos {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    border-radius: 20px;
  }
}
</style>