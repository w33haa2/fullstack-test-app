<template>
  <div class="h-screen">
    <sections-auth-register-form />
  </div>
</template>

<script>
definePageMeta({
  middleware: [
    'guest',
  ],
})
</script>