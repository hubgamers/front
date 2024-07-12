<template>
  <div class="large_banner_feat row gap-2">
    <div>
      <h4>{{title}}</h4>
      <p>{{content}}</p>
      <button class="green">
        <RouterLink to="/dashboard">{{buttonText}}</RouterLink>
      </button>
    </div>
    <div v-if="imgUrl" class="image">
      <img :src="imgUrl" alt="Bg">
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'LargeComponent'
})

defineProps({
  title: String,
  content: String,
  buttonText: String,
  // Url à partir du dossier public
  imgUrl: String
})
</script>

<style lang="scss">
.large_banner_feat {
  display: flex;
  background-image: url("../../../../public/bg-color-red.jpg");
  background-size: cover;
  padding: 4rem 2rem;
  border-radius: 15px;
  margin: 2rem;

  div:first-of-type {
    flex: 2;

    h4 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    p {
      max-width: 400px;
      margin-bottom: 3rem;
    }
  }
  div:last-of-type {
    flex: 1;
    img {
      border-radius: 20px;
    }
  }
}
</style>