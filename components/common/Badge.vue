<template>
  <span class="badge" style="min-width: 7em" :class="variantClass">
    {{ title.toUpperCase() }}
  </span>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'primary',
  },
})
const variantClass = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'badge__secondary'
    case 'danger':
      return 'badge__danger'
    case 'success':
      return 'badge__success'
    case 'info':
      return 'badge__info'
    case 'warning':
      return 'badge__warning'
    case 'secondary':
      return 'badge__secondary'
    default:
      return 'badge__secondary'
  }
})
</script>
