// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      title: "devlinks",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt"],
  plugins: ["~/plugins/vue-draggable.client.js"],
});
