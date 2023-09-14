<template>
  <input
      v-bind="$attrs"
      @input="emit('update:modelValue', $event.target.value)"
      :value="modelValue"
      class="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String,Number]
  }
})
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>