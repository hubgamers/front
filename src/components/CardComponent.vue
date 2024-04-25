<template>
  <div class="card">
    <div class="image">
      <img src="https://picsum.photos/150/150" alt="image">
    </div>
    <div class="infos">
      <h3>{{ titleCard }}</h3>
      <p>{{desc}}</p>
      <hr>
      
      <div class="tags">
        <span>Tag 1</span>
      </div>
      
      <div class="actions">
        <button class="yellow">
          <RouterLink :to="linkOne">{{linkOneText}}</RouterLink>
        </button>
        <button class="green">
          <RouterLink :to="linkTwo">{{ linkTwoText }}</RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardComponent',
  props: {
    titleCard: {
      type: String,
      default: 'Titre de la carte'
    },
    desc: {
      type: String,
      default: 'Description de la carte'
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
      type: String,
      default: '#'
    },
    linkTwoText: {
      type: String,
      default: 'Lien'
    }
  }
});
</script>

<style lang="scss">
.card {
  margin: 1rem 0;
  display: flex;
  flex-flow: row;
  min-width: 300px;
  max-width: 700px;
  width: 100%;
  border-radius: 12px;
  
  .image {
    width: 30%;
    border-radius: 12px 12px 0 0;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  
  .infos {
    width: 70%;
    padding: 1rem;
    
    h3, p {
      color: #28536B;
    }
    h3 {
      font-size: 1.5rem;
      font-weight: 600;
    }
    
    hr {
      margin: 1rem 0;
      border: 2px solid #9DD9D2;
    }
    
    .tags {
      padding: 1rem 0;
      display: flex;
      gap: 0.5rem;
      
      span {
        border: 1px solid #28536B;
        padding: .5rem;
        color: #28536B;
        border-radius: 100px;
        transition: all .5s;
        
        &:hover {
          transition: all .5s;
          background-color: #28536B;
          color: white;
        }
      }
    }
  }
  
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>