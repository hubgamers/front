<template>
  <div>
    <div class="feat columns">
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

<style lang="scss" scoped>
h2, h3, h4, p, i {
  color: #FFFFFF;
}
.feat {
  padding: 2rem;
  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
    h4 {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
}
</style>