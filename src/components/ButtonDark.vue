<template>
  <div>
    <button :type="typeBtn" class="text-white bg-gray-800 hover:bg-gray-400 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><slot></slot></button>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ButtonDark',
  props: {
    typeBtn: {
      type: String,
      default: 'button'
    }
  }
});
</script>