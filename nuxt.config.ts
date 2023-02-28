// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@mdi/font/css/materialdesignicons.css", "vuetify/lib/styles/main.css"],
  modules: ["@nuxt/content", "@pinia/nuxt"],
  content: {
    documentDriven: true,
    markdown: {
      tags: {
        h1: 'Heading1',
        p: 'Paragraph',
      }
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  alias: {
    "@/*": "./src/*",
  },
  pages: true,
  router: {
    options: {
      hashMode: true
    }
  }
});
