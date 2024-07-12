<template>
  <div class="row justify-between py-10 px-4">
    <p>&copy; 2024 - Tous les droits réservés</p>
    <ul>
      <li><RouterLink to="/legals">Mentions légales</RouterLink></li>
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