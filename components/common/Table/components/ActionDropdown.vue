<template>
  <div
    :style="!show ? 'display: none' : 'position:fixed; right:4em'"
    class="animate__animated animate__fadeIn origin-top-left absolute right-9 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    role="menu"
  >
    <div v-for="(item, index) in items" :key="index">
      <button
        v-if="verifyVisibility(item)"
        class="whitespace-normal block px-4 font-medium py-3 w-full flex items-center text-left text-sm text-gray-700 hover:bg-gray-100"
        @click="handleCallback(item.callback)"
      >
        <common-fa-icon
          v-if="item.icon"
          :icon="item.icon"
          icon-class="pr-3 h-5 w-5"
        />
        <slot :name="`action-button-${index}`">
          {{ item.title }}
        </slot>
      </button>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  id: {
    type: [Number, String],
    required: true,
  },
})

const show = ref(false)
const handleCallback = (fn) => {
  // TODO: Add handler for router push prop
  fn(props.id)
}

const verifyVisibility = (item) => {
  if (item?.visible) {
    return item.visible
  } else if (item?.customCaseVisibility) {
    return item.customCaseVisibility(this.id)
  } else {
    return true
  }
}

const open = () => {
  show.value = true
}

const close = () => {
  show.value = false
}

defineExpose({
  open,
  close
})

</script>
