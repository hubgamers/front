<template>
  <div :class="'card ' + 'bg-' + bgColor + ' ' + (type === '' ? 'w300px' : 'wfull')">
    <div>
      <h2>{{title}}</h2>
      <span>{{subtitle}}</span>
    </div>

    <div class="action">
      <router-link :to="btnUri" class="btn btn-primary">{{btnText}}</router-link>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'CardDashboardComponent'
})

defineProps({
  title: String,
  subtitle: String,
  type: String,
  bgColor: String,
  btnUri: String,
  btnText: String
})
</script>

<style lang="scss" scoped>
.card {
  border-radius: 20px;

  &.wfull {
    width: 100%;
  }
  &.w300px {
    width: 300px;
  }

  div:first-of-type {
    padding: 1rem;
  }

  h2, span, a {
    color: #FFFFFF;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  span {
    font-size: 2rem;
    font-weight: bold;
  }

  .action {
    border-top: 2px solid #FFFFFF;
    padding: 1rem;
    cursor: pointer;
    transition: all .5s;

    &:hover {
      transition: all .5s;
      background: #9DD9D2;
      border-radius: 0 0 20px 20px;
    }
  }
}
</style>