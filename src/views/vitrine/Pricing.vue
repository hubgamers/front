<template>
  <VitrineLayout>
    <div class="columns align-items-center">
      <h1>Tarification</h1>
      <Pricings />
    </div>
  </VitrineLayout>
</template>

<script setup>
import { defineComponent } from 'vue'
import VitrineLayout from '@/layout/VitrineLayout.vue'
import Pricings from '@/views/vitrine/components/Pricings.vue'

defineComponent({
  name: 'PricingPage'
})
</script>

<style lang="scss" scoped>
h1 {
  color: #FFFFFF;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2rem;
}
</style>