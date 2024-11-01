// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@samk-dev/nuxt-vcalendar'
  ],
  tailwindcss: {
    config:{
      theme: {
        extend: {
          backgroundImage:{
            "app" : "url('~/public/img/hero.jpg')",
          }
        }
      }
    },
  },
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
  }
})