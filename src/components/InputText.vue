<template>
  <div>
    <div v-if="type === 'checkbox'" class="checkbox">
      <input :type="type" :placeholder="placeholder" v-model="model">
      <label>{{ label }} <span v-if="required" class="required">*</span></label>
    </div>
    <template v-else>
      <label>{{ label }} <span v-if="required" class="required">*</span></label>
      <input :type="type" :placeholder="placeholder" v-model="model">
    </template>
    <p class="info">{{info}}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Label'
  },
  placeholder: {
    type: String,
    default: 'Placeholder'
  },
  model: {
    type: String,
    default: ''
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
})

let model = ref(props.model)
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
input {
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