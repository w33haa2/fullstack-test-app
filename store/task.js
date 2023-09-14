import { defineStore } from 'pinia'
import { useNotification } from '@kyvg/vue3-notification';

const { notify } = useNotification()
export const task = defineStore('task', {
  state: () => ({
    tasks: {
      busy: false,
      list: [],
      listLength: 0,
      page: 1,
      createState: false,
      createError: false,
    }
  }),

  actions: {
    async fetchTasks(params) {

      // called locally because if declared on top of the file it bugs out because nuxt wont detect the nuxt instance for the plugin
      const { $ofetch } = useNuxtApp()
      this.tasks.busy = true

      return await $ofetch('/api/tasks', {
        method: 'GET',
        query: {
          page: this.tasks.page,
          limit: 10,
          ...(params && { search: params })
        }
      }).then((e) => {
        this.tasks.list = e.data
        this.tasks.listLength = e.meta.total
        this.tasks.busy = false
      }).catch((e) => {
        this.tasks.busy = false
      })
    },
    async createTask(params) {
      // called locally because if declared on top of the file it bugs out because nuxt wont detect the nuxt instance for the plugin
      const { $ofetch } = useNuxtApp()

      this.tasks.createState = true
      this.tasks.createError = null
      return await $ofetch('/api/tasks', {
        method: 'POST',
        body: params
      }).then((e) => {
        this.tasks.createState = false
        notify({
          text: 'Task Created!',
          title: 'Success',
          type: 'success'
        })
      }).catch((e) => {
          const keys = e?.response?._data?.errors ? Object.keys(e.response?._data.errors) : []

          this.tasks.createState = false
          this.tasks.createError = e?.response?._data?.errors[keys[0]][0] ?? 'Something went wrong'

          if(keys.length > 0) {
            notify({
              text: this.tasks.createError,
              title: 'Error',
              type: 'error'
            })
          }
      })
    },

    async updateTask(params) {
      // called locally because if declared on top of the file it bugs out because nuxt wont detect the nuxt instance for the plugin
      const { $ofetch } = useNuxtApp()

      this.tasks.createState = true
      this.tasks.createError = null
      return await $ofetch(`/api/tasks/${params.id}`, {
        method: 'PATCH',
        body: params
      }).then((e) => {
        this.tasks.createState = false
        notify({
          text: 'Task Updated!',
          title: 'Success',
          type: 'success'
        })
      }).catch((e) => {
        const keys = e?.response?._data?.errors ? Object.keys(e.response?._data.errors) : []

        this.tasks.createState = false
        this.tasks.createError = e?.response?._data?.errors[keys[0]][0] ?? 'Something went wrong'

        if(keys.length > 0) {
          notify({
            text: this.tasks.createError,
            title: 'Error',
            type: 'error'
          })
        }
      })
    },

    async deleteTask(params) {
      // called locally because if declared on top of the file it bugs out because nuxt wont detect the nuxt instance for the plugin
      const { $ofetch } = useNuxtApp()

      this.tasks.createState = true
      this.tasks.createError = null
      return await $ofetch(`/api/tasks/${params}`, {
        method: 'DELETE'
      }).then((e) => {
        this.tasks.createState = false
        notify({
          text: 'Task Deleted!',
          title: 'Success',
          type: 'success'
        })
      }).catch((e) => {
        const keys = e?.response?._data?.errors ? Object.keys(e.response?._data.errors) : []

        this.tasks.createState = false
        this.tasks.createError = e?.response?._data?.errors[keys[0]][0] ?? 'Something went wrong'

        if(keys.length > 0) {
          notify({
            text: this.tasks.createError,
            title: 'Error',
            type: 'error'
          })
        }
      })
    },
  }
})