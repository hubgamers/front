<template>
  <VitrineLayout>
    <div class="columns align-items-center">
      <h3>Liste des joueurs</h3>
      <h2>Recruter un joueur dans votre équipe</h2>
      <p class="description">
        En créant votre équipe, vous pouvez inviter n’importe quel joueur parmi la liste ci-dessous. Cette personne recevra une invitation qu’elle sera libre d’accepter ou de refuser dans un délai imparti.
      </p>
      
      <div class="row">
        <InputText label="Rechercher un joueur" placeholder="Nom, prénom, pseudo" />
        <input-text type="select" label="Sélectionner la plateforme" placeholder="Les p't">
          <option v-for="(game, key) in store.getters.getGames" :key="key" :value="game.id">{{ game.name }}</option>
        </input-text>
      </div>
    </div>
  </VitrineLayout>
</template>

<script setup>
import { defineComponent } from 'vue'
import VitrineLayout from '@/layout/VitrineLayout.vue'
import InputText from '@/components/InputText.vue'
import { useStore } from 'vuex'

defineComponent({
  name: 'FeaturesPage'
})

const store = useStore();
store.dispatch('getAllGames')
</script>

<style lang="scss" scoped>
h2, h3, h4, p, i {
  color: #FFFFFF;
}

h2 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.description {
  width: 400px;
  text-align: center;
}

</style>