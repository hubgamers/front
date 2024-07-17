<template>
  <div class="card">
    <div class="image">
      <img :src="tournament.logo ? tournament.logo : 'https://picsum.photos/200/200'" alt="image">
    </div>
    <div class="infos">
      <div>
        <h3>{{ tournament.name }}</h3>
        <p>{{tournament.description.length > 45 ? tournament.description.substring(0, 45) + '...' : tournament.description}}</p>

        <ul class="meta">
          <li>
            <span><i class="fa fa-gamepad"></i> {{tournament.platform}}</span>
          </li>
          <li v-if="store.getters.getGames && store.getters.getGames.filter(game => game.id === parseInt(tournament.game))[0]">
            <span><i class="fa fa-gamepad"></i> {{store.getters.getGames.filter(game => game.id === parseInt(tournament.game))[0].name }}</span>
          </li>
          <li v-if="tournament.type">
            <span><i class="fa fa-gamepad"></i> {{tournament.type}}</span>
          </li>
        </ul>
      </div>
      
      <div class="actions mt-2">
        <button class="yellow">
          <RouterLink :to="linkOne">{{linkOneText}}</RouterLink>
        </button>
        <button v-if="linkTwo" class="green">
          <RouterLink :to="linkTwo">{{linkTwoText}}</RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue';
import { useStore } from 'vuex'

defineComponent({
  name: 'TournamentCardComponent'
});

defineProps({
  tournament: {
    type: Object,
    required: true
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/300'
  },
  linkOne: {
    type: String,
    default: '#'
  },
  linkOneText: {
    type: String,
    default: 'Lien'
  },
  linkTwo: {
    type: String
  },
  linkTwoText: {
    type: String
  }
})

const store = useStore();
store.dispatch('getAllGames')
</script>

<style lang="scss">
.card {
  margin: 1rem 0;
  display: flex;
  flex-flow: row;
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  
  .image {
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }
  
  .infos {
    width: 70%;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    h3, p {
      color: #28536B;
    }
    h3 {
      font-size: 1.5rem;
      font-weight: 600;
    }
    
    .tags {
      display: flex;
      gap: 0.5rem;
      margin: 1rem 0;
      
      li {
        span {
          border: 1px solid #28536B;
          padding: .5rem;
          color: #28536B;
          font-size: .8rem;
          transition: all .5s;

          &:hover {
            transition: all .5s;
            background-color: #28536B;
            color: white;
          }
        }
      }
    }
  }
  
  .actions {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem;
  }
}
</style>