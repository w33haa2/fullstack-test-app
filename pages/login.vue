<template>
  <div class="h-screen">
    <sections-auth-login-form />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: [
    'guest',
  ],
})
</script>