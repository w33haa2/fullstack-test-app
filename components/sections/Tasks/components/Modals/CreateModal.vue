<template>
  <common-modal
    :show="show"
    is-form
    :busy="taskStore.tasks.createState"
    title="Create Store"
    @close="emit('close')"
    @save="submit"
  >
    <div class="flex flex-col md:gap-4">
      <form-group label-for="title" label="Task Title" required>
        <form-input id="title" v-model="title" type="text" required block />
      </form-group>
      <form-group label-for="name" label="Status" required>
        <vue-select :clearable="false" v-model="status" :options="statusOptions" />
      </form-group>
      <form-group label-for="description" label="Task Title" required>
        <form-text-area id="description" v-model="description" type="description" required block />
      </form-group>
      <form-group label-for="name" label="Due Date" required>
        <vue-date-picker v-model="dueDate" />
      </form-group>
    </div>
  </common-modal>
</template>

<script setup>
import {format} from 'date-fns'
import VueSelect from 'vue-select'
import VueDatePicker from '@vuepic/vue-datepicker';

import FormGroup from '@/components/common/FormGroup'
import FormInput from '@/components/common/inputs/FormInput'
import FormTextArea from '@/components/common/inputs/FormTextArea.vue'
import {task} from '@/store/task'
import {startCase} from 'loadsh/string'

const statusOptions = ['Pending', 'Done']
const taskStore = task()
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['close', 'submit'])
const title = ref()
const description = ref()
const dueDate = ref()
const status = ref('Pending')
const updateId = ref(null)

const setData = (e) => {
  updateId.value = e.id
  title.value = e.title
  description.value = e.description
  dueDate.value = e.due_date
  status.value = startCase(e.status)
}

const resetForm = () => {
  title.value = null
  description.value = null
  dueDate.value = null
  status.value = null
}

const submit = (e) => {
  emit('submit', {
    ...(updateId.value && {id: updateId.value}),
    title: title.value,
    description: description.value,
    due_date: format(new Date(dueDate.value), "yyyy-MM-dd HH:mm:ss"),
    status: status.value.toLowerCase(),
  })
  updateId.value = null
}

defineExpose({
  setData,
  resetForm
})
</script>
