<template>
  <client-only>
    <font-awesome-icon
        :icon="[!regular ? 'fa' : 'far', icon]"
        class="flex-shrink-0"
        :class="iconClass + `${spin ? 'fa-spin' : ''}`"
    />
  </client-only>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  regular: {
    type: Boolean,
    default: false,
  },
  spin: {
    type: Boolean,
    default: false,
  },
  iconClass: {
    type: String,
    default: '',
  },
})
</script>
