<template>
  <div class="py-10 px-10">
    <Topbar title="Mes équipes" subtitle="Gérer l'ensemble de vos équipes." />
    
    <Table :columns="columns" :items="items" />
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import { defineComponent } from 'vue'
import Table from '@/components/Table.vue'
defineComponent({
  name: 'TeamsPage'
})

let columns: [
    { key: 'name', label: 'Nom' },
    { key: 'age', label: 'Âge' },
    { key: 'email', label: 'Email' }
  ];
let items: [
  { name: 'Alice', age: 30, email: 'alice@example.com' },
  { name: 'Bob', age: 25, email: 'bob@example.com' },
  { name: 'Charlie', age: 35, email: 'charlie@example.com' }
]
</script>