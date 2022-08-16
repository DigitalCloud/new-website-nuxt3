import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "@intlify/nuxt3"],
  css: ["plyr/dist/plyr.css"],
  intlify: {
    localeDir: "locales",
    vueI18n: {
      // You can setting same `createI18n` options here !
      locale: "en",
    },
  },
  // image: {},
  tailwindcss: {
    cssPath: "~/assets/scss/main.scss",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  // i18n: {
  //     locales: ['en','ar'],
  //     defaultLocale: 'en',
  //     differentDomains: true,
  //     vueI18n: {
  //         fallbackLocale: 'en',
  //     }
  // },
});
