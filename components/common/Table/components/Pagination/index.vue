<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="bg-white px-4 py-3 flex flex-col md:flex-row flex-col-reverse items-center justify-between border-t border-gray-200 sm:px-6 rounded-b-md"
  >
    <div
      class="sm:flex-1 sm:flex sm:items-center sm:justify-between pt-3 md:pt-0"
    >
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{ currentPageMin }}</span>
          to
          <span class="font-medium">{{ currentPageMax }}</span>
          of
          <span class="font-medium">{{ length }}</span>
          results
        </p>
      </div>
    </div>
    <div class="sm:flex-1 sm:flex sm:items-center sm:justify-end pt-2 md:pt-0">
      <nav
        class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <button
          :class="
            page === 1
              ? 'border-gray-200 text-gray-400'
              : 'text-gray-500 border-gray-300 hover:bg-gray-50'
          "
          :disabled="page === 1"
          class="relative inline-flex items-center px-2 py-2 rounded-l-md border bg-white text-sm font-medium"
          @click="emit('paginate', page - 1)"
        >
          <span class="sr-only">Previous</span>
          <!-- Heroicon name: solid/chevron-left -->
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <template v-if="pages > 6">
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <button
            aria-current="page"
            :class="
              page === 1
                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
            "
            :disabled="page === 1"
            class="cursor-pointer relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            @click="handleClick(1)"
          >
            1
          </button>
          <button
            :class="
              page === 2
                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
            "
            :disabled="page === 2"
            class="hidden lg:block cursor-pointer relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            @click="handleClick(2)"
          >
            2
          </button>
          <button
            v-if="page === 3"
            :class="
              page === 3
                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
            "
            :disabled="page === 3"
            class="hidden lg:block cursor-pointer relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            @click="handleClick(3)"
          >
            3
          </button>
          <span
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
          >
            ...
          </span>
          <span
            v-if="page > 3 && page < pages - 2"
            :class="
              page > 3 && page < pages - 2
                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
            "
            class="hidden lg:block cursor-pointer relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            {{ page }}
          </span>
          <span
            v-if="page > 3 && page < pages - 2"
            class="hidden lg:block relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
          >
            ...
          </span>
          <button
            v-if="page == pages - 2"
            :class="
              page == pages - 2
                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
            "
            :disabled="page === pages - 2"
            class="hidden lg:block cursor-pointer relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            @click="handleClick(pages - 2)"
          >
            {{ pages - 2 }}
          </button>
          <button
            :class="
              page == pages - 1
                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
            "
            :disabled="page === pages - 1"
            class="hidden lg:block cursor-pointer relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            @click="handleClick(pages - 1)"
          >
            {{ pages - 1 }}
          </button>
          <button
            :class="
              page == pages
                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
            "
            :disabled="page === pages"
            class="cursor-pointer relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            @click="handleClick(pages)"
          >
            {{ pages }}
          </button>
        </template>
        <template v-else>
          <button
            v-for="item in pages"
            :key="item"
            :disabled="page === item"
            :class="
              page == item
                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
            "
            class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            @click="handleClick(item)"
          >
            {{ item }}
          </button>
        </template>
        <button
          :class="
            page === pages
              ? 'border-gray-200 text-gray-400'
              : 'text-gray-500 border-gray-300 hover:bg-gray-50'
          "
          :disabled="page === pages"
          class="relative inline-flex items-center px-2 py-2 rounded-r-md border bg-white text-sm font-medium text-gray"
          @click="emit('paginate', page + 1)"
        >
          <span class="sr-only">Next</span>
          <!-- Heroicon name: solid/chevron-right -->
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  length: {
    type: Number,
    default: 0,
  },
  limit: {
    type: Number,
    default: 10,
  },
  page: {
    type: Number,
    default: 1,
  },
})

const emit = defineEmits(['paginate'])

const pages = computed(() => {
  return Math.ceil(props.length / props.limit)
})

const currentPageMin = computed(() => {
  return props.page === 1 ? 1 : props.page * props.limit + 1 - props.limit
})

const currentPageMax = computed(() => {
  return props.page < Math.ceil(props.pages * 0.9)
      ? props.page * props.limit
      : props.length
})

const handleClick = (page) => {
  emit('paginate', page)
}
</script>
