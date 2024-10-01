<template>
    <Modal :size="size" title="Chargement en cours">
        <fwb-spinner size="12" />
    </Modal>
</template>
<script setup>
import { FwbSpinner } from 'flowbite-vue'
import Modal from './Modal.vue';

defineProps({
    size: {
        type: String,
        default: 'xl'
    }
})
</script>