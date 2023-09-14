<template>
  <common-modal
    :busy="taskStore.tasks.createState"
    :show="show"
    is-form
    @save="submit"
    @close="emit('close')"
  >
    <div class="flex flex-col items-center justify-center">
      <client-only>
        <font-awesome-icon
            :icon="['fa','exclamation']"
            style="width: 5em; height: 5em"
            class="text-blue-500 rounded-full border bg-blue-100 border-4 border-blue-500 p-4 mb-4"
        />
      </client-only>
      <span class="font-medium text-lg"
        >Are you sure you want to delete this?</span
      >
      <span class="font-extralight text-sm"
        >Action is irreversible after this.</span
      >
    </div>
  </common-modal>
</template>

<script setup>

import {task} from '@/store/task'

const taskStore = task()

const emit = defineEmits(['submit', 'close'])
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})

const id = ref(null)
const setData = (data) => {
  id.value = data
}

const submit = () => {
  emit('submit', id.value)
}

defineExpose({
  setData
})
</script>
