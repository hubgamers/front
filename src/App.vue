<script setup>
import { RouterView } from 'vue-router'
import { Notifications } from '@kyvg/vue3-notification'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <notifications />
  <RouterView />
</template>