<template>
<div style="background-color: #f6f9fd">
  <navbar />
  <div  class="scroll-area profile-page">
    <!---->
    <div  class="block gap-4 relative mx-auto w-full lg:py-6 lg:flex xl:w-11/12 3xl:w-10/12" style>
      <sections-profile-components-sidebar />
      <div  class="w-full lg:w-11/12 3xl:w-11/12">
        <sections-profile-components-profile-header />
        <div  class="flex flex-col gap-x-4 lg:flex-row">
          <sections-profile-components-profile-details />
          <sections-profile-components-profile-progress />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>

import Navbar from '@/components/sections/Profile/components/Navbar.vue'

</script>

<style scoped>

</style>