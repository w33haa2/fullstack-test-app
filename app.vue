<template>
  <div>
    <NuxtPage />
    <client-only>
      <notifications />
    </client-only>
  </div>
</template>
<script setup>
import {authentication} from '@/store/authentication'

const authStore = authentication()
const user = useCookie('user')

if(user) {
  authStore.user = user.value
}
</script>