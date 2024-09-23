<template>
  <fwb-modal>
    <template #header>
      <div class="flex items-center text-lg">
        {{title}}
      </div>
    </template>
    <template #body>
      <slot></slot>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="closeModal" color="alternative">
          Fermer
        </fwb-button>
        <fwb-button @click="successModal" color="green">
          {{ successTextButotn }}
        </fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'ModalComponent'
})

defineProps({
  title: String,
  subtitle: String,
  successTextButotn: String
})
const emit = defineEmits(['close', 'success'])

function closeModal() {
  emit('close')
}

function successModal() {
  emit('success')
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