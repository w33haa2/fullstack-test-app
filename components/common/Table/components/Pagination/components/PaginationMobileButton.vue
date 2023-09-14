<template>
  <button
    :class="disabled ? 'opacity-75 pointer-events-none' : ''"
    :disabled="disabled"
    class="relative disabled:bg-gray-200 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
    v-on="$listeners"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
