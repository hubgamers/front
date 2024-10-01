<template>
  <div>
    <div class="column">
      <h2>{{ titlePrice }}</h2>
      <p>{{description}}</p>
      <div class="price">
        <div class="currentPrice">
          <template v-if="period === 'monthly'">
            <span>{{ currentPrice.monthly }}€</span>
            <span>par mois</span>
          </template>
          <template v-if="period === 'yearly'">
            <span>{{ currentPrice.yearly }}€</span>
            <span>par an</span>
          </template>
        </div>
        <div v-if="oldPrice" class="oldPrice">
          <span v-if="period === 'monthly'">{{ oldPrice.monthly }}€</span>
          <span v-if="period === 'yearly'">{{ oldPrice.yearly }}€</span>
        </div>
      </div>
      <hr>
      <h3>Il l'inclus</h3>
      <ul>
        <li v-for="(feat, key) in feats" :key="key">
          <i v-if="feat.ok === true" class="fa-solid fa-circle-check" style="color: forestgreen"></i>
          <i v-else class="fa-solid fa-circle-xmark" style="color: darkred;"></i>
          <span>{{feat.content}}</span>
        </li>
      </ul>
      <fwb-button v-if="!isConnected" color="default" @click="goRegister">Se connecter</fwb-button>
      <fwb-button v-else-if="stripeSessionId" color="default" @click="editPlan">Se connecter</fwb-button>
      <fwb-button v-else color="default" @click="subscribe">Souscrire</fwb-button>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { FwbButton } from 'flowbite-vue'

defineComponent({
  name: 'PricingTable'
})

const props = defineProps({
  period: {
    type: String,
    default: 'monthly'
  },
  titlePrice: {
    type: String,
    default: 'Silver'
  },
  description: {
    type: String,
    default: 'L’abonnement simple pour commencer.'
  },
  priceStripId: {
    type: String
  },
  currentPrice: {
    type: Object,
    required: true
  },
  oldPrice: {
    type: Object
  },
  feats: {
    type: Array,
    default: () => []
  },
  stripeSessionId: {
    type: String
  }
})

const store = useStore();
const isConnected = ref(localStorage.getItem('userId'));
function subscribe() {
  let priceStripId = props.priceStripId
  if (props.period === 'yearly') {
    priceStripId += '_yearly'
  }
  store.dispatch('createCheckoutSession', priceStripId).then((response) => {
    window.location.href = response
  })
}

function editPlan() {
  store.dispatch('createPortalSession', props.stripeSessionId).then((response) => {
    window.location.href = response
  })
}

const router = useRouter();
function goRegister() {
  router.push({ name: 'Register' })
}
</script>

<style lang="scss" scoped>
.column {
  padding: 1rem;
  background: #FFFFFF;
  display: flex;
  flex-flow: column;
  max-width: 300px;

  h2, p, span {
    color: #28536B;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  .price {
    display: flex;

    .currentPrice {
      display: flex;
      flex-flow: column;

      span:first-of-type {
        font-size: 4rem;
        font-weight: 700;
      }
    }

    .oldPrice {
      span {
        font-size: 1.5rem;
        font-weight: 700;
        color: #AEAEAE;
        text-decoration-line: line-through;
      }
    }
  }

  hr {
    margin: 1rem 0;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-flow: column;
    
    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem 0;
    }
  }

  button {
    margin-top: 2rem;
  }
}
</style>