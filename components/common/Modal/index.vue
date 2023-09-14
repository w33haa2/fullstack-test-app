<template>
  <!-- Large Modal hidden -->
  <div
    style="background-color: rgba(0, 0, 0, 0.6)"
    :class="{ hidden: !show }"
    class="flex overflow-x-hidden fixed inset-0 z-50 justify-center items-center md:inset-0 h-full"
  >
    <div
      :class="[
        { 'max-w-md': size === 'sm' },
        { 'max-w-lg': size === 'md' },
        { 'max-w-4xl': size === 'lg' },
        { 'max-w-6xl': size === 'xl' },
        { 'max-w-7xl': size === '2xl' },
      ]"
      class="animate__animated animate__slideInDown relative flex md:block items-center justify-center md:px-4 w-full h-full md:h-auto"
    >
      <!-- Modal content -->
      <div
        class="relative bg-white rounded-lg shadow w-11/12 md:w-full"
      >
        <!-- Modal header -->
        <div
          class="flex justify-between items-center p-5 rounded-t"
        >
          <h3 class="text-xl font-medium text-gray-900">
            {{ title }}
          </h3>
          <slot v-if="!title" name="header" />
          <modal-close-button @click="emit('close')" />
        </div>
        <component
          :is="isForm ? 'form' : 'div'"
          @submit.prevent="emit('submit')"
        >
          <div class="px-6 md:py-1">
            <slot />
          </div>
          <!-- Modal footer -->
          <div
            v-if="showButtonGroup"
            class="flex items-center justify-end p-6 space-x-2 rounded-b border-gray-200"
          >
            <common-form-button
              v-if="showButton"
              type="submit"
              color="blue"
              :busy="busy"
              :disabled="busy"
              @click="emit('save')"
            >
              {{ saveTitle }}
            </common-form-button>
            <common-form-button
              color="gray"
              @click="emit('close')"
            >
              Close
            </common-form-button>
          </div>
        </component>
      </div>
    </div>
  </div>
</template>

<script setup>
import ModalCloseButton from '@/components/Common/Modal/components/ModalCloseButton'

const emit = defineEmits(['close', 'submit', 'save'])
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  showButtonGroup: {
    type: Boolean,
    default: true,
  },
  showButton: {
    type: Boolean,
    default: true,
  },
  isForm: {
    type: Boolean,
    default: false,
  },
  busy: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'md',
  },
  title: {
    type: String,
    default: '',
  },
  saveTitle: {
    type: String,
    default: 'Save',
  },
})
</script>
