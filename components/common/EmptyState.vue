<template>
  <div class="text-center py-4">
    <client-only>
      <font-awesome-icon
          :icon="['fa','folder-open']"
          style="width: 5em; height: 5em"
          class="flex-shrink-0 mx-auto text-gray-700"
      />
    </client-only>
    <h3 class="mt-2 text-sm font-medium text-gray-900">{{ title }}</h3>
    <p class="mt-1 text-sm text-gray-500">
      {{ description }}
    </p>
    <div class="mt-4">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup>
import FaIcon from '@/components/common/FaIcon.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'No items here',
  },
  description: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: 'folder-open',
  },
})
</script>
