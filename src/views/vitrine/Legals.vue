<template>
  <VitrineLayout>
   <div class="columns items-center">
     <h2>Mentions légales</h2>
     <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site Hubgamers l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>

     <h3>Édition du site</h3>
     <p>Le présent site, accessible à l’URL https://hubgamers.alexisbriet.fr (le « Site »), est édité par :</p>
     <p>Alexis BRIET, résidant 32 Rue Paul de Benseralde 80210 CHEPY, de nationalité Française (France), né(e) le 21/02/2003,  inscrite au R.C.S. de AMIENS sous le numéro 908 501 133 R.C.S. Amiens,</p>

     <h3>Hébergement</h3>
     <p>Le Site est hébergé par la société 1&1 / IONOS, situé 7 Place de la Gare - 57200 Sarreguemines, (contact téléphonique ou email : (+33) 9 70 80 89 11).</p>

     <h3>Directeur de publication</h3>
     <p>Le Directeur de la publication du Site est Alexis BRIET.</p>

     <h3>Nous contacter</h3>
     <p>Par téléphone : +33757500327</p>
     <p>Par email : contact@alexisbriet.fr</p>
     <p>Par courrier : 32 Rue Paul de Benseralde 80210 CHEPY</p>
   </div>
  </VitrineLayout>
</template>
<script setup>
import VitrineLayout from '@/layout/VitrineLayout.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'LegalsPage',
  components: {
    VitrineLayout
  }
})
</script>

<style scoped lang="scss">
.columns {
  max-width: 1200px;
  width: 100%;
  h2, h3, p {
    color: #FFFFFF;
  }
  h2 {
    font-size: 3rem;
  }
  h3 {
    font-size: 2rem;
  }
  p {
    text-align: center;
    margin-bottom: 2rem;
  }
}
</style>