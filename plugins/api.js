import { ofetch } from 'ofetch'
import { authentication } from '@/store/authentication'
export default defineNuxtPlugin(({ $config }) => {
  const authStore = authentication()

  const instance = ofetch.create({
    baseURL: $config.public.apiBase,
    headers: {
      Accept: 'application/json',
      ...(authStore.user && { authorization: `Bearer ${authStore.user.access_token}` })
    }
  })

  return {
    provide: {
      ofetch: instance
    }
  }
})