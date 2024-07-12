<template>
  <VitrineLayout>
    <div class="columns align-items-center">
      <h3>Fonctionnalités</h3>
      <h2>Créer son équipe</h2>

      <div class="row">
        <FeatComponent
          title="Créer des sous-équipes"
          content="Créez des équipes spécifiques pour différents jeux et plateformes, et regroupez-les sous une même équipe principale."
          icon="fa-user-plus" />
        <FeatComponent
          title="Invitez des joueurs"
          content="Tous les joueurs ayant activé leur compte peuvent être invités dans vos sous-équipes."
          icon="fa-user-plus" />
        <FeatComponent
          title="Gérer votre staff"
          content="Ajoutez des personnes à votre staff pour gérer les équipes, les tournois et bien plus."
          icon="fa-user-plus" />
      </div>

      <LargeComponent
        title="Créer une sous-équipe"
        content="Une équipe de 6 joueurs sur Valorant PC qui pourra s'inscrire à des tournois et participer à des parties classées ensemble."
        buttonText="Commencez dès maintenant"
        imgUrl="bg-esport.jpg"
      />

      <div class="row">
        <div>
          <ColumnBannerComponent
            title="Système d'invitation intégré"
            content="Invitez facilement des joueurs à rejoindre votre équipe en utilisant notre système d'invitation intégré. Gérez les permissions et les accès avec facilité."
            buttonText="Inviter des joueurs"
          />
        </div>
        <div class="columns gap-3">
          <div class="row">
            <ColumnBannerComponent
              title="Participation aux tournois"
              content="Rejoignez des tournois officiels ou communautaires avec votre équipe. Facilité d'inscription et coordination pour une expérience compétitive optimale."
              buttonText="Voir les tournois"
            />
            <ColumnBannerComponent
              title="Personnalisation avancée des équipes"
              content="Personnalisez chaque détail de votre équipe, de l'avatar au style de jeu. Renforcez l'identité de votre équipe pour une expérience de jeu unique."
              buttonText="Personnaliser mon équipe"
            />
          </div>
          <LargeComponent
            title="Gestion efficace du staff"
            content="Optimisez la gestion de votre équipe en attribuant des rôles spécifiques à votre staff. Facilitez la coordination des tâches et la communication interne."
            buttonText="Gérer le staff"
          />
        </div>
      </div>
    </div>
  </VitrineLayout>
</template>

<script setup>
import { defineComponent } from 'vue'
import VitrineLayout from '@/layout/VitrineLayout.vue'
import FeatComponent from '@/views/vitrine/components/Feat.vue'
import LargeComponent from '@/views/vitrine/components/LargeBanner.vue'
import ColumnBannerComponent from '@/views/vitrine/components/ColumnBanner.vue'

defineComponent({
  name: 'FeaturesPage'
})
</script>

<style lang="scss" scoped>
h2 {
  font-size: 2rem;
  @media screen and (min-width: 768px){
    font-size: 4rem;
  }
  font-weight: 700;
  margin-bottom: 2rem;
}

.description {
  width: 400px;
  text-align: center;
}
</style>
