// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css:[
    '~/assets/css/main.css'
  ],
  modules: [
    '@pinia/nuxt'
  ],
  plugins:['~/plugins/vue-draggable.client.js']

})
