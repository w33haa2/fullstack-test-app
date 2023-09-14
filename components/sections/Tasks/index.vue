<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
    <div class="flex justify-end pb-3 gap-2">
      <common-form-button
          type="submit"
          non-blocking
          color="green"
          @click="toggleCreateModal"
      >
        Create Task
      </common-form-button>
    </div>
    <common-table
        :data="tableData"
        v-model="search"
        @update:model-value="handleSearch"
        :fetching="taskStore.tasks.busy"
        searchable
        empty-state-title="No Stores Available"
        empty-state-description="There are no stores available as of the moment."
        pagination
        :pagination-length="taskStore.tasks.listLength"
        :pagination-limit="10"
        :pagination-page="taskStore.tasks.page"
        @table-paginate="handlePaginate"
    >
      <template #table-data-0="{ data }">
        <pre class="font-medium">{{ data }}</pre>
      </template>
      <template #table-data-1="{ data }">
        <span class="font-semibold">{{ data }}</span>
      </template>
      <template #table-data-4="{ data }">
        <common-badge
          v-if="data === 'pending'"
          :title="data"
          variant="warning"
        />
        <common-badge
            v-else
            :title="data"
            variant="success"
        />
      </template>
    </common-table>
    <create-modal
        ref="createModal"
        :show="showCreateModal"
        @submit="submit"
        @close="hideModal"
    />
    <delete-modal
        ref="deleteModal"
        :show="showDeleteModal"
        @submit="deleteTask"
        @close="hideModal"
    />
  </div>
</template>

<script setup>
  import {task} from '@/store/task'
  import CreateModal from '@/components/sections/Tasks/components/Modals/CreateModal.vue'
  import DeleteModal from '@/components/sections/Tasks/components/Modals/DeleteModal.vue'
  import {debounce} from 'loadsh/function'

  const emit = defineEmits(['update', 'submit', 'delete'])

  const taskStore = task()
  const tableData = computed(() => {
    return {
      columns: [
        'ID',
        'Title',
        'Description',
        'Due Date',
        'Status',
      ],
      rows:  taskStore.tasks.list
          ? taskStore.tasks.list.map((e) => {
            return {
              id: e.id,
              rowValues: [
                e.id ?? '--',
                e.title ?? '--',
                e.description ?? '--',
                e.due_date ?? '--',
                e.status ?? '--',
              ],
            }
          })
          : [],
      callbacks: [
        {
          callback: (id) => openUpdateModal(id),
          title: 'Edit Task',
          icon: 'edit',
          visible: true,
        },
        {
          callback: (id) => openDeleteModal(id),
          title: 'Delete Store',
          icon: 'trash',
          visible: true,
        },
      ],
    }
  })

  const createModal = ref()
  const deleteModal = ref()

  const showCreateModal = ref(false)
  const showDeleteModal = ref(false)
  const search = ref('')

  const handlePaginate = async (e) => {
    taskStore.tasks.page = e
    await refreshData()
  }

  const refreshData = async () => {
    await taskStore.fetchTasks(search.value)
  }

  const handleSearch = debounce(async () =>{
    await taskStore.fetchTasks(search.value)
  }, 300)

  const submit = (e) => {
    if (e.id) {
      emit('update', e)
    } else {
      emit('submit', e)
    }
  }

  const openUpdateModal =(data) => {
    const taskData = taskStore.tasks.list.find((e) => e.id === data)
    createModal.value.setData(taskData)
    showCreateModal.value = true
  }

  const openDeleteModal =(data) => {
    deleteModal.value.setData(data)
    showDeleteModal.value = true
  }

  const deleteTask = (data) => {
    emit('delete', data)
  }

  const toggleCreateModal = () => {
    showCreateModal.value = true
    createModal.value.resetForm()
  }

  const hideModal =() => {
    showCreateModal.value = false
    showDeleteModal.value = false
  }

  taskStore.fetchTasks()

  defineExpose({
    hideModal,
    refreshData
  })
</script>

<style scoped>

</style>