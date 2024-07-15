<template>
  <div class="card">
    <div class="image">
      <img :src="image" alt="image">
    </div>
    <div class="infos columns justify-between">
      <h3>{{ titleCard }}</h3>
      <p>{{desc != null && desc.length > 45 ? desc.substring(0, 45) + '...' : desc}}</p>
      <div class="actions row items-center gap-1 mt-1">
        <button v-if="linkOne && linkOneText" class="yellow">
          <RouterLink :to="linkOne">{{linkOneText}}</RouterLink>
        </button>
        <button v-if="linkTwo && linkTwoText" class="green">
          <RouterLink :to="linkTwo">{{linkTwoText}}</RouterLink>
        </button>
        <button v-if="btnModalText" @click="openModal" class="green">{{btnModalText}}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'TeamCardComponent',
});
defineProps({
    titleCard: {
      type: String
    },
    desc: {
      type: String
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/300'
    },
    linkOne: {
      type: String
    },
    linkOneText: {
      type: String
    },
    linkTwo: {
      type: String
    },
    linkTwoText: {
      type: String
    },
    btnModalText: {
      type: String
    }
});
const emit = defineEmits(['modal'])

function openModal() {
  emit('modal')
}
</script>

<style lang="scss">
.card {
  display: flex;
  flex-flow: row;
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  
  .image {
    display: none;
    @media screen and (min-width: 768px){
      display: block;
      max-width: 150px;
      max-height: 150px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
      }
    }
  }
  
  .infos {
    width: 100%;
    padding: 1rem;
    @media screen and (min-width: 768px) {
      width: 70%;
      padding: 1rem 0 1rem 1rem;
    }

    h3, p {
      color: #28536B;
    }
    h3 {
      text-align: center;
      @media screen and (min-width: 768px) {
        text-align: left;
      }
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
}
</style>