<template>
  <div>
    <div class="feat">
      <div class="title">
        <i :class="'fa-solid ' + icon"></i>
        <h4>{{title}}</h4>
      </div>
      <p class="content">{{content}}</p>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'FeatComponent'
})

defineProps({
  icon: String,
  title: String,
  content: String
})
</script>

<style lang="scss">
h2, h3, h4, p, i {
  color: #FFFFFF;
}
.feat {
  display: flex;
  flex-flow: column nowrap;

  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
    h4 {
      font-size: 2rem;
      font-weight: 700;
    }
  }
}
</style>