// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  modules: ['nuxt-icon', '@pinia/nuxt', 'nuxt-toastify'],
  compatibilityDate: '2024-09-19',
  ssr: false,

  toastify: {
    autoClose: 2000,
    position: 'top-right',
    theme: 'auto'
  }
})
