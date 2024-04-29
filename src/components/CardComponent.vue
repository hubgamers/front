<template>
  <div class="card">
    <div class="image">
      <img src="https://picsum.photos/200/200" alt="image">
    </div>
    <div class="infos">
      <div>
        <h3>{{ titleCard }}</h3>
        <p>{{desc}}</p>

        <ul class="tags">
          <li>
            <span><i class="fa fa-gamepad"></i> Tag 1</span>
          </li>
          <li>
            <span><i class="fa fa-gamepad"></i> Tag 1</span>
          </li>
          <li>
            <span><i class="fa fa-gamepad"></i> Tag 1</span>
          </li>
        </ul>
      </div>
      
      <div class="actions">
        <button class="yellow">
          <RouterLink :to="linkOne">{{linkOneText}}</RouterLink>
        </button>
        <button class="green">
          <RouterLink :to="linkTwo">{{linkTwoText}}</RouterLink>
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
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  
  .image {
    padding: .5rem;
    img {
      width: 200px;
      height: 200px;
      border-radius: 20px;
      object-fit: cover;
    }
  }
  
  .infos {
    width: 70%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
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