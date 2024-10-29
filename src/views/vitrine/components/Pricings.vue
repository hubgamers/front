<template>
  <div>
    <div class="togglePeriod row align-items-center justify-center gap-1">
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
        title-price="Pro"
        description="L’abonnement simple pour commencer."
        price-strip-id="pro"
        :stripeSessionId="stripeSessionId"
        :new-stripe-price-id="stripePriceId"
        :current-price="{
            monthly: 15,
            yearly: 100
          }"
        :old-price="{
              monthly: 20,
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
              ok: false
            }
          ]"
      />
      <PricingTable
        :period="period"
        title-price="Elite"
        description="L’abonnement complet pour les équipes ambitieuses."
        price-strip-id="elite"
        :stripeSessionId="stripeSessionId"
        :new-stripe-price-id="stripePriceId"
        :current-price="{
            monthly: 30,
            yearly: 250
          }"
        :old-price="{
              monthly: 35,
              yearly: 300
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
    </div>
  </div>
</template>
<script setup>
import PricingTable from '@/views/vitrine/PricingTable.vue'
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

defineComponent({
  name: 'PricingsComponent'
})

defineProps({
  isEditable: Boolean
})

let stripeSessionId = ref('')
let stripePriceId = ref('')
let isSubscribed = ref(false)

const store = useStore();
if (localStorage.getItem("userId")) {
  store.dispatch('getUserById', localStorage.getItem("userId")).then((response) => {
    stripeSessionId.value = response.stripeSessionId
    stripePriceId.value = response.stripePriceId
    isSubscribed.value = true
  })
}

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
.togglePeriod {
  padding: 1rem 0;
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