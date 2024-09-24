<template>
  <div class="mb-4">
    <div v-if="type === 'checkbox'" class="checkbox">
      <fwb-checkbox 
        v-model="model"
        :placeholder="placeholder"
        :label="label"
        :disabled="disabled"
        :required="required"
      />
    </div>
    <template v-else-if="type === 'textarea'">
      <fwb-textarea
        v-model="model"
        :rows="4"
        :placeholder="placeholder"
        :label="label"
        :disabled="disabled"
        :required="required"
      />
    </template>
    <template v-else-if="type === 'file'">
      <fwb-file-input 
        v-model="model"
        :placeholder="placeholder"
        :label="label"
        :disabled="disabled"
        :required="required"
        @change="uploadFile"
      />
    </template>
    <template v-if="type === 'select'">
      <template v-if="multiple">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
        <multiselect v-model="model" :options="options" label="name" track-by="id" :placeholder="placeholder" multiple="true"></multiselect>
      </template>
      <template v-else>
        <fwb-select
          v-model="model"
          :options="options"
          :placeholder="placeholder"
          :label="label"
          :disabled="disabled"
          :required="required"
        />
      </template>
    </template>
    <template v-else-if="type === 'email' || type === 'password' || type === 'text'">
      <fwb-input
        v-model="model"
        :placeholder="placeholder"
        :label="label"
        :disabled="disabled"
        :required="required"
        :type="type"
      />
    </template>
    <p class="info">{{info}}</p>
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script setup>
import { defineProps, ref } from 'vue';
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
  options: { type: Array, default: () => [] }
});

const model = ref(props.model); // Liez à props.model
const emit = defineEmits(['uploadFile']);

function uploadFile($event) {
  emit('uploadFile', $event);
}
</script>

