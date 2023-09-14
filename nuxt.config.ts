// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    'animate.css/animate.min.css',
    '~/assets/scss/app.scss',
    'vue-select/dist/vue-select.css',
    '@vuepic/vue-datepicker/dist/main.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL
    }
  }
})
