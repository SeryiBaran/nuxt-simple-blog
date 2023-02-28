// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  app: {
    baseURL: '/nuxt-simple-blog/',
  },
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
    baseURL: '/nuxt-simple-blog/api/_content',
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
