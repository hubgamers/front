<template>
  <div class="body">
    <Navbar />
    <div class="wrap">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'
defineComponent({
  name: 'VitrineLayout'
})
</script>

<style>
  .body {
    background: #1C1C1C;
  }
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>