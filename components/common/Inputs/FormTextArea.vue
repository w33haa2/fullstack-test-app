<template>
  <textarea
    v-bind="$attrs"
    @input="emit('update:modelValue', $event.target.value)"
    :value="modelValue"
    class="form-textarea form-textarea__primary"
  ></textarea>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String,Number]
  }
})
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped></style>
