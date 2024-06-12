<template>
  <VitrineLayout>
    <div class="columns align-items-center">
      <h1>Tarification</h1>
      <div class="togglePeriod">
        <span>Mensuel</span>
        <label class="switch">
          <input type="checkbox" v-model="isYearly" @input="togglePeriod">
          <span class="slider round"></span>
        </label>
        <span>Annuel</span>
      </div>
      
      
      <div class="row gap-2">
        <PricingTable
          :period="period"
          title-price="Silver"
          description="L’abonnement simple pour commencer."
          price-strip-id="silver"
          :current-price="{
            monthly: 7,
            yearly: 70
          }"
          :old-price="{
              monthly: 10,
              yearly: 100
          }"
          :feats="[
            {
              content: 'Créer une équipe',
              ok: true
            },
            {
              content: 'Rejoindre une équipe',
              ok: true
            },
            {
              content: 'Participer aux tournois',
              ok: true
            },
            {
              content: 'Organiser des évènements',
              ok: false
            }
          ]"
        />
        <PricingTable
          :period="period"
          title-price="Gold"
          description="L’abonnement complet pour les équipes ambitieuses."
          price-strip-id="gold"
          :current-price="{
            monthly: 10,
            yearly: 100
          }"
          :old-price="{
              monthly: 15,
              yearly: 150
          }"
          :feats="[
            {
              content: 'Créer une équipe',
              ok: true
            },
            {
              content: 'Rejoindre une équipe',
              ok: true
            },
            {
              content: 'Participer aux tournois',
              ok: true
            },
            {
              content: 'Organiser des évènements',
              ok: true
            }
          ]"
        />
        <PricingTable
          :period="period"
          title-price="Platinum"
          description="L’abonnement ultime pour les équipes professionnelles."
          price-strip-id="platinum"
          :current-price="{
            monthly: 16,
            yearly: 160
          }"
          :old-price="{
              monthly: 20,
              yearly: 200
          }"
          :feats="[
            {
              content: 'Créer une équipe',
              ok: true
            },
            {
              content: 'Rejoindre une équipe',
              ok: true
            },
            {
              content: 'Participer aux tournois',
              ok: true
            },
            {
              content: 'Organiser des évènements',
              ok: true
            },
            {
              content: 'Accès à la production de tournois',
              ok: true
            }
          ]"
        />
      </div>
    </div>
  </VitrineLayout>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import VitrineLayout from '@/layout/VitrineLayout.vue'
import PricingTable from '@/views/vitrine/PricingTable.vue'

defineComponent({
  name: 'PricingPage'
})

let period = ref('monthly')
let isYearly = ref(false)

function togglePeriod() {
  if (isYearly.value) {
    isYearly.value = false
  } else {
    isYearly.value = true
  }
  period.value = isYearly.value ? 'yearly' : 'monthly'
}
</script>

<style lang="scss" scoped>
h1 {
  color: #FFFFFF;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.togglePeriod {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #FFFFFF;
}

.columns {
  display: flex;
  gap: 3rem;
  padding: 4rem 1rem;
}


/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>