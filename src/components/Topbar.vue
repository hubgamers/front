<template>
  <div>
    <h1 v-if="title != null" class="text-4xl font-extrabold dark:text-white">{{title}}</h1>
    <p v-if="subtitle != null" class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 pt-5">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps } from 'vue'

defineComponent({
  name: 'TopbarForPage'
})

defineProps({
  title: String,
  subtitle: String
})
</script>