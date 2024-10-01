<template>
    <div class="flex gap-1 items-center">
        <fwb-spinner size="12" />
        <p>Chargement en cours...</p>
    </div>
</template>
<script setup>
import { FwbSpinner } from 'flowbite-vue'
import { defineComponent } from 'vue';
defineComponent({
    name: 'LoadingComponent'
})
</script>