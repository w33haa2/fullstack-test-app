<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="login" class="space-y-4">
        <common-form-group label="Email Address" required>
          <common-inputs-form-input v-model="email" id="email" name="email" type="email" autocomplete="email" required />
        </common-form-group>

        <common-form-group label="Password" required>
          <common-inputs-form-input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required />
        </common-form-group>

        <div class="pt-4">
          <common-form-button :busy="busy" type="submit">
            Sign In
          </common-form-button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <nuxt-link to="register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import {authentication} from '@/store/authentication'

const authStore = authentication()
const email = ref('')
const password = ref('')
const busy = ref(false)
const login = async () => {
  busy.value = true
  await authStore.login({
    email: email.value,
    password: password.value,
  })
  busy.value = false
}
</script>

<style scoped>

</style>