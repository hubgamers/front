<template>
  <div class="py-10 px-10">
    <Topbar title="Mon profil" subtitle="Modifier vos informations" />
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'

import { defineComponent } from 'vue'
defineComponent({
  name: 'ProfilePage'
})
</script>