<template>
  <div>
    <label
        :for="labelFor"
        :class="`text-${titleSize}`"
        class="block text-sm font-medium leading-6 text-gray-900"
    >{{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="mt-2">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  labelFor: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  titleSize: {
    type: String,
    default: 'sm',
  },
  required: {
    type: Boolean,
    default: false,
  },
})

</script>

<style scoped>

</style>