<template>
  <div class="h-screen">
    <span class="mx-8 cursor-pointer" @click="authStore.logout">Log Out</span>

    <sections-tasks ref="tasks" @submit="submit" @update="update" @delete="deleteTask" />
  </div>
</template>

<script setup>
import {authentication} from '@/store/authentication'
import {task} from '@/store/task'

const authStore = authentication()
const taskStore = task()

const tasks = ref()

definePageMeta({
  middleware: [
    'auth',
  ],
})

const submit = async (e) => {
  await taskStore.createTask(e)
  await refreshData()

}

const refreshData = async () => {
  if(!taskStore.tasks.createError) {
    tasks.value.hideModal()
    await tasks.value.refreshData()
  }
}

const update = async (e) => {
  await taskStore.updateTask(e)
  await refreshData()
}

const deleteTask = async (e) => {
  await taskStore.deleteTask(e)
  await refreshData()
}
</script>