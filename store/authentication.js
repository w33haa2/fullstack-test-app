import { defineStore } from 'pinia'
import { useRouter, useCookie } from 'nuxt/app'
import { useNotification } from '@kyvg/vue3-notification';

const { notify } = useNotification()
export const authentication = defineStore('authentication', {
  state: () => ({
    user: {}
  }),

  actions: {
    async login(params) {

      // called locally because if declared on top of the file it bugs out because nuxt wont detect the nuxt instance for the plugin
      const { $ofetch } = useNuxtApp()
      const runtimeConfig = useRuntimeConfig()
      const router = useRouter()

      return await $ofetch(`${runtimeConfig.public.apiBase}/sanctum/csrf-cookie`).then(response => {
        $ofetch('/api/auth/login', {
          method: 'POST',
          body: params
        }).then((e) => {
          let user = useCookie('user')
          this.user = e.data

          user.value = this.user
          router.go('/tasks')
        }).catch((e) => {
          notify({
            text: e?.response?._data?.message ?? 'Something went wrong',
            title: 'Error',
            type: 'error'
          })
        })
      })
    },
    async register(params) {
      // called locally because if declared on top of the file it bugs out because nuxt wont detect the nuxt instance for the plugin
      const { $ofetch } = useNuxtApp()
      const router = useRouter()

      return await $ofetch('/api/auth/register', {
        method: 'POST',
        body: params
      }).then((e) => {
        notify({
          text: 'Registered Successfully!',
          title: 'Success',
          type: 'success'
        })
        router.push('/login')
      }).catch((e) => {
        const keys = e?.response?._data?.errors ? Object.keys(e.response?._data.errors) : []
        if(keys.length > 0) {
          notify({
            text:  e?.response?._data?.errors[keys[0]][0] ?? 'Something went wrong',
            title: 'Error',
            type: 'error'
          })
        }
      })
    },
    async logout(params) {

      // called locally because if declared on top of the file it bugs out because nuxt wont detect the nuxt instance for the plugin
      const { $ofetch } = useNuxtApp()
      const router = useRouter()

      return await $ofetch('/api/auth/logout', {
        method: 'POST'
      }).then((e) => {
        let user = useCookie('user')
        this.user = {}
        user.value = null
        router.go('/login')
      })
    },
  }
})