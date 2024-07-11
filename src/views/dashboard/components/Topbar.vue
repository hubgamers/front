<template>
  <div v-if="title !== null">
    <input v-if="showSearchBar" type="search" placeholder="Rechercher" v-model="search">
    <h1>{{title}}</h1>
    <h2 v-if="subtitle !== null">{{subtitle}}</h2>
  </div>
</template>

<script setup>
import { defineComponent, defineProps, ref } from 'vue'

defineComponent({
  name: 'TopbarForPage'
})

defineProps({
  title: String,
  subtitle: String,
  showSearchBar: {
    type: Boolean,
    default: false
  }
})

let search = ref('');
</script>

<style scoped>
h1 {
  color: #28536B;
  font-weight: 700;
  margin: 1rem 0 0;
}
h2 {
  color: #28536B;
  font-size: 1.5rem;
}
input {
  background-color: #e8f6fd;
  padding: .5rem 1rem;
  border: none;
  max-width: 625px;
  min-width: 300px;
  width: 100%;
}
input::placeholder {
  color: #B8BCCA;
}
</style>