<template>
  <button
    v-bind="$attrs"
    :class="`${!busy ? buttonColor: busyColor} ${width}`"
    :disabled="busy"
    class="flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
  >
    <slot />
  </button>

</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'indigo'
  },
  busy: {
    type: Boolean,
    default: false
  },
  nonBlocking: {
    type: Boolean,
    default: false
  },
})

const width = computed(() => {
  return props.nonBlocking ? '' : 'w-full'
})

const buttonColor = computed(() => {
  switch (props.color) {
    case 'blue':
      return `bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600`
    case 'red':
      return `bg-red-600 hover:bg-red-500 focus-visible:outline-red-600`
    case 'green':
      return `bg-green-600 hover:bg-green-500 focus-visible:outline-green-600`
    case 'gray':
      return `bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600`
    default:
      return `bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600`
  }
})

const busyColor = computed(() => {
  switch (props.color) {
    case 'blue':
      return `bg-blue-400`
    case 'red':
      return `bg-red-400`
    case 'green':
      return `bg-green-400`
    case 'gray':
      return `bg-gray-400`
    default:
      return `bg-indigo-400`
  }
})
</script>

<style scoped>

</style>