import { authentication } from '@/store/authentication'

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = authentication()

  if (!authStore?.user?.id) {
    abortNavigation()
    setTimeout(() => {
      return navigateTo('/login')
    })
  }
})