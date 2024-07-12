<template>
  <div class="body">
    <Navbar />
    <div class="wrap">
      <slot />
    </div>
  </div>
  <FooterComponent />
</template>

<script setup>
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'
import FooterComponent from '@/components/Footer.vue'
defineComponent({
  name: 'VitrineLayout'
})
</script>

<style>
  .body {
    background: #1C1C1C;
    min-height: 100vh;
  }
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
  }

  h1, h2, h3, h4, p, i {
    color: #FFFFFF;
  }

  h2 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
</style>