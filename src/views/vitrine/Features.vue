<template>
  <VitrineLayout>
    <div class="columns align-items-center">
      <h3>Fonctionnalités</h3>
      <h2>Créer son équipe</h2>
      <p class="description">Vous pouvez créer une équipe de x joueurs tout en incluant des personnes faisant partis du staff afin de participer aux tournois, ou simplement enchainez des parties de ranked.</p>

      <div class="feats">
        <FeatComponent
          title="Invitez des joueurs"
          content="test"
          icon="fa-user-plus" />
        <FeatComponent
          title="Invitez des joueurs"
          content="test"
          icon="fa-user-plus" />
        <FeatComponent
          title="Invitez des joueurs"
          content="test"
          icon="fa-user-plus" />
      </div>
      <LargeComponent
        title="Créer une équipe"
        content="Vous pouvez créer une équipe de x joueurs tout en incluant des personnes faisant partis du staff afin de participer aux tournois, ou simplement enchainez des parties de ranked."
        buttonText="Créer une équipe"
        imgUrl="bg-esport.jpg"
      />
      <div class="row">
        <div>
          <ColumnBannerComponent
            title="Créer une équipe"
            content="Vous pouvez créer une équipe de x joueurs tout en incluant des personnes faisant partis du staff afin de participer aux tournois, ou simplement enchainez des parties de ranked."
            buttonText="Créer une équipe"
          />
        </div>
        <div class="columns gap-3">
          <div class="row">
            <ColumnBannerComponent
              title="Créer une équipe"
              content="Vous pouvez créer une équipe de x joueurs tout en incluant des personnes faisant partis du staff afin de participer aux tournois, ou simplement enchainez des parties de ranked."
              buttonText="Créer une équipe"
            />
            <ColumnBannerComponent
              title="Créer une équipe"
              content="Vous pouvez créer une équipe de x joueurs tout en incluant des personnes faisant partis du staff afin de participer aux tournois, ou simplement enchainez des parties de ranked."
              buttonText="Créer une équipe"
            />
          </div>
          <LargeComponent
            title="Créer une équipe"
            content="Vous pouvez créer une équipe de x joueurs tout en incluant des personnes faisant partis du staff afin de participer aux tournois, ou simplement enchainez des parties de ranked."
            buttonText="Créer une équipe"
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

.feats {
  padding: 4rem 1rem;
  display: flex;
  gap: 6rem;
}
</style>