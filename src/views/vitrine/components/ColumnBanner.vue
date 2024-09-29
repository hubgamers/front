<template>
  <div class="column_banner_feat">
    <h4>{{title}}</h4>
    <p>{{content}}</p>
    <fwb-button color="default"><RouterLink to="/dashboard">{{buttonText}}</RouterLink></fwb-button>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import { FwbButton } from 'flowbite-vue'

defineComponent({
  name: 'ColumnBannerComponent'
})

defineProps({
  title: String,
  content: String,
  buttonText: String
})
</script>

<style lang="scss">
.column_banner_feat {
  display: flex;
  flex-flow: column;
  background-image: url("../../../../public/bg-color-red.jpg");
  background-size: cover;
  padding: 4rem 2rem;
  border-radius: 15px;
  margin: 2rem;
  height: 100%;

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
</style>