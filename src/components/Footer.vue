<template>
  <div class="row align-items-center justify-between py-10 px-4">
    <p>&copy; 2024 - Tous les droits réservés</p>
    <ul>
      <li><a href="https://hubgamers.alexisbriet.fr/legals" target="_blank">Mentions légales</a></li>
      <li><a href="https://hubgamers.alexisbriet.fr/cgu" target="_blank">Conditions Générales d'Utilisation</a></li>
      <li><a href="https://hubgamers.alexisbriet.fr/cgv" target="_blank">Conditions Générales des Ventes</a></li>
    </ul>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'FooterComponent',
})
</script>

<style scoped lang="scss">
div {
  background: #1C1C1C;
  ul {
    li {
      a {
        color: #FFFFFF;
        &:hover {
          color: #9DD9D2;
        }
      }
    }
  }
}
</style>