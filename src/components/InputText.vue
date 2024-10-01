<template>
  <div class="mb-4">
    <div v-if="type === 'checkbox'" class="checkbox">
      <fwb-checkbox 
        :modelValue="model"
        :placeholder="placeholder"
        :label="label"
        :disabled="disabled"
        :required="required"
        @update:modelValue="model = $event"
      />
    </div>
    <template v-else-if="type === 'textarea'">
      <fwb-textarea
        :modelValue="model"
        :rows="4"
        :placeholder="placeholder"
        :label="label"
        :disabled="disabled"
        :required="required"
        @update:modelValue="model = $event"
      />
    </template>
    <template v-else-if="type === 'file'">
      <fwb-file-input 
        :modelValue="model"
        :placeholder="placeholder"
        :label="label"
        :disabled="disabled"
        :required="required"
        @change="uploadFile"
        @update:modelValue="model = $event"
      />
    </template>
    <template v-if="type === 'select'">
      <template v-if="multiple">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
        <multiselect 
          v-model="model" 
          :options="options" 
          label="name" 
          track-by="id" 
          :placeholder="placeholder" 
          multiple 
          @input="updateSelectedIds"
        />
      </template>
      <template v-else>
        <fwb-select
          v-model="model" 
          :options="options.map(option => ({ value: option.id, name: option.name }))"
          :placeholder="placeholder"
          :label="label"
          :disabled="disabled"
          :required="required"
        />
      </template>
    </template>
    <template v-else-if="type === 'email' || type === 'password' || type === 'text'">
      <fwb-input
        :modelValue="model"
        :placeholder="placeholder"
        :label="label"
        :disabled="disabled"
        :required="required"
        :type="type"
        @update:modelValue="model = $event"
      />
    </template>
    <p class="info">{{info}}</p>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script setup>
import { defineProps, ref, watch } from 'vue';
import Multiselect from 'vue-multiselect';
import { FwbInput, FwbTextarea, FwbFileInput, FwbSelect, FwbCheckbox } from 'flowbite-vue';

const props = defineProps({
  label: { type: String, default: 'Label' },
  placeholder: { type: String, default: 'Placeholder' },
  type: { type: String, default: 'text' },
  required: { type: Boolean, default: false },
  info: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  multiple: { type: Boolean, default: false },
  options: { type: Array, default: () => [] },
  modelValue: { type: [String, Array], default: '' } // Ajout de modelValue
});

const model = ref(props.modelValue); // Liez à props.modelValue
const emit = defineEmits(['uploadFile', 'update:modelValue']); // Ajoutez update:modelValue

// Surveillez les changements de props.modelValue
watch(() => props.modelValue, (newValue) => {
  model.value = newValue;
});

const selectedIds = ref([]); // Un tableau pour les IDs sélectionnés
// Méthode pour mettre à jour le modèle
function updateSelectedIds(selectedOptions) {
  console.log(selectedOptions);
  selectedIds.value = selectedOptions.map(option => option.id); // Mettre à jour pour garder uniquement les IDs
  model.value = selectedIds.value; // Mettre à jour le modèle principal si nécessaire
}

function uploadFile($event) {
  emit('uploadFile', $event);
}

// Émettez les changements de model
watch(model, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>
