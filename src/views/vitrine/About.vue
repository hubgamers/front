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
.team {
  position: relative;

  img {
    border-radius: 20px;
  }

  .infos {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    border-radius: 20px;
  }
}
</style>