<template>
  <div>
    <label>{{ label }} <span v-if="required" class="required">*</span></label>
    <input :type="type" :placeholder="placeholder" v-model="model">
    <p class="info">{{info}}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
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
  }
})
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
  background-color: #F8FAFC;
  padding: .5rem 1rem;
  border: none;
}
input::placeholder {
  color: #B8BCCA;
}
p.info {
  color: #1b9cf8;
  font-size: 14px;
  margin: 0;
}
</style>