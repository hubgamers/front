<template>
  <div>
    <div class="bg" @click="close"></div>
    <div class="content">
      <Topbar :title="title" :subtitle="subtitle" />
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import Topbar from '@/views/dashboard/components/Topbar.vue'

defineComponent({
  name: 'ModalComponent'
})

defineProps({
  title: String,
  subtitle: String
})
const emit = defineEmits(['close'])

function close() {
  emit('close')
}
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 500px;
  min-width: 700px;
  transform: translate(-50%, -50%);
  padding: 20px;
  background: #FFFFFF;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

</style>