<template>
  <div class="body">
    <Navbar />
    <div class="wrap">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'
defineComponent({
  name: 'VitrineLayout'
})
</script>

<style scoped>
  .body {
    background: #1C1C1C;
  }
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2, h3, h4, p, i {
    color: #FFFFFF;
  }

  h2 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
</style>