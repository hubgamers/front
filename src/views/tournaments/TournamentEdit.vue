<template>
  <div>
    <Topbar title="Gérer mon tournoi" subtitle="Créer ou éditer mon tournoi" />


    <form @submit="createTournament">
      <input type="text" v-model="name">

      <select name="tournamentType" id="tournamentType" v-model="tournamentType">
        <option value="TOURNAMENT"></option>
        <option value="LEAGUE"></option>
        <option value="LADDER"></option>
      </select>

      <textarea v-model="description"></textarea>

      <input type="text" v-model="game">

      <select name="platform" id="platform" v-model="platform">
        <option value="PS4"></option>
        <option value="PS5"></option>
        <option value="XBOX"></option>
        <option value="Switch"></option>
        <option value="PC"></option>
      </select>


      <input type="text" v-model="logo">

      <input type="text" v-model="banner">
      
      <button type="submit">Créer le tournoi</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'

import { defineComponent } from 'vue'
import { useStore } from 'vuex'
defineComponent({
  name: 'TournamentEditPage'
})

let name = ''
let tournamentType = ''
let description = ''
let game = ''
let platform = ''
let logo = ''
let banner = ''

function createTournament() {
  console.log('createTournament')
  console.log(name)
  console.log(tournamentType)
  console.log(description)
  console.log(game)
  console.log(platform)
  console.log(logo)
  console.log(banner)
  
  // Call the store
  const store = useStore();

  const count = store.state.count;
  const increment = () => {
    store.dispatch('increment');
  };
  console.log(increment);
  
  // TODO : installer le store et faire tous les services api pour créer le CRUD du tournoi
}
</script>