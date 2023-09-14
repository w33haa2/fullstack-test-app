<template>
  <div
    class="animate__animated animate__fadeIn"
  >
    <div class="flex-col sm:flex sm:flex-row sm:justify-between">
      <div class="flex items-center md:pt-0">
        <slot name="widget" />
      </div>
      <search-input v-if="searchable" :model-value="modelValue" @update:model-value="e => emit('update:modelValue', e)" :placeholder="searchPlaceholder" />
    </div>
    <div class="relative overflow-x-auto rounded-md table-wrapper border border-blue-500 rounded-md shadow-md">
      <table
        class="static min-w-full divide-y divide-gray-200 table-fixed"
      >
        <thead class="bg-blue-500">
          <tr>
            <th
              v-for="(column, index) in data.columns"
              :key="index"
              scope="col"
              class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase"
            >
              {{ column }}
            </th>
            <th v-if="showActionHeader" scope="col" class="p-4">
              <span class="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody
          class="bg-white divide-y divide-gray-200"
        >
          <template v-if="data.rows.length > 0 && !fetching">
            <tr
              v-for="({ rowValues, id }, index) in data.rows"
              :key="index"
              class="hover:bg-gray-100"
            >
              <td
                v-for="(values, i) in rowValues"
                :key="i"
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
              >
                <slot :name="`table-data-${i}`" :data="values">
                  {{ values }}
                </slot>
              </td>
              <td
                v-if="checkPermission(data.callbacks, id)"
                class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap relative"
              >
                <button
                  v-click-outside="() => hideDropdown(id)"
                  class="text-blue-600"
                  @click="openActionDropdown(id)"
                >
                  <common-fa-icon
                    icon="ellipsis-vertical"
                    icon-class="flex-shrink-0 h-5 w-5 text-gray-600"
                  />
                </button>
                <action-dropdown
                  :id="id"
                  :ref="e => actionButtons[`action-${id}`] = e"
                  class="z-50"
                  :items="data.callbacks"
                >
                  <template
                    v-for="(callback, callbackIndex) in data.callbacks"
                    :slot="`action-button-${callbackIndex}`"
                  >
                    <slot
                      :id="id"
                      :name="`action-buttons-${callbackIndex}`"
                      :data="rowValues"
                      :title="callback.title"
                    />
                  </template>
                </action-dropdown>
              </td>
            </tr>
          </template>
          <tr v-if="data.rows.length === 0 && !fetching">
            <td :colspan="data.columns.length + 1">
              <empty-state
                :title="emptyStateTitle"
                :description="emptyStateDescription"
              />
            </td>
          </tr>
          <tr v-if="fetching">
            <td :colspan="data.columns.length + 1" class="text-center py-4">
             <client-only>
               <font-awesome-icon
                   :icon="['fa','spinner']"
                   style="width: 4em; height: 4em"
                   class="flex-shrink-0 fa-spin text-gray-400 mx-auto"
               />
             </client-only>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <pagination
      v-if="pagination && data.rows.length > 0"
      :length="paginationLength"
      :page="paginationPage"
      :limit="paginationLimit"
      @paginate="(e) => emit('table-paginate', e)"
    />
  </div>
</template>

<script setup>
import has from 'lodash/has'
import ActionDropdown from '@/components/common/Table/components/ActionDropdown'
import SearchInput from '@/components/common/Table/components/SearchInput'
import EmptyState from '@/components/common/EmptyState'
import Pagination from '@/components/common/Table/components/Pagination'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  searchable: {
    type: Boolean,
    default: false,
  },
  paginationLength: {
    type: Number,
    default: 0,
  },
  paginationLimit: {
    type: Number,
    default: 10,
  },
  paginationPage: {
    type: Number,
    default: 1,
  },
  pagination: {
    type: Boolean,
    default: false,
  },
  fetching: {
    type: Boolean,
    default: false,
  },
  searchPlaceholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  emptyStateTitle: {
    type: String,
    default: '',
  },
  emptyStateDescription: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['table-paginate', 'update:modelValue'])

const showAction = ref(false)
const showActionHeader = ref(true)
const actionButtons = ref([])


const checkPermission = (arr, id) => {
  if (arr.length === 0) {
    showActionHeader.value = false
  }
  if (arr.every((val) => has(val, 'customCaseVisibility'))) {
    showActionHeader.value = arr.some((val) => val.customCaseVisibility(id))
  }
  if (arr.every((val) => has(val, 'visible'))) {
    showActionHeader.value = arr.some((val) => val.visible)
  }
  return showActionHeader.value
}

const hideDropdown = (id) => {
  if (actionButtons.value[`action-${id}`]) {
    actionButtons.value[`action-${id}`].close()
  }
}

const openActionDropdown = (id) => {
  actionButtons.value[`action-${id}`].open()
}

</script>
