<template>
  <div>
    <div v-if="type === 'checkbox'" class="checkbox">
      <input :type="type" :placeholder="placeholder" v-model="model">
      <label>{{ label }} <span v-if="required" class="required">*</span></label>
    </div>
    <template v-else-if="type === 'textarea'">
      <label>{{ label }} <span v-if="required" class="required">*</span></label>
      <textarea :placeholder="placeholder" v-model="model"></textarea>
    </template>
    <template v-else-if="type === 'file'">
      <label>{{ label }} <span v-if="required" class="required">*</span></label>
      <input :type="type" @change="uploadFile" v-model="model">
    </template>
    <template v-else>
      <label>{{ label }} <span v-if="required" class="required">*</span></label>
      <input :type="type" :placeholder="placeholder" v-model="model">
    </template>
    <p class="info">{{info}}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const model = defineModel();
const emit = defineEmits(['uploadFile'])
function uploadFile($event) {
  // Emit an event to the parent component
  emit('uploadFile', $event)
}

defineProps({
  label: {
    type: String,
    default: 'Label'
  },
  placeholder: {
    type: String,
    default: 'Placeholder'
  },
  type: {
    type: String,
    default: 'text'
  },
  required: {
    type: Boolean,
    default: false
  },
  info: {
    type: String,
    default: ''
  }
});

</script>



<style scoped>
div {
  display: flex;
  flex-flow: column;
  gap: .3rem;
}
label {
  color: #6F7482;
  font-size: 16px;
}
span.required {
  color: #ED0131;
}
input, textarea {
  background-color: #e8f6fd;
  padding: .5rem 1rem;
  border: none;
}
input::placeholder {
  color: #B8BCCA;
}
input[type="checkbox"] {
  padding: .5rem;
  width: 20px;
  height: 20px;
  background-color: #9fe1ff;
}
textarea {
  min-height: 100px;
}
p.info {
  color: #1b9cf8;
  font-size: 14px;
  margin: 0;
}
.checkbox {
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: .5rem;
}
</style>