// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
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