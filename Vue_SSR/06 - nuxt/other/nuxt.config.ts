// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    "/": { ssr: true },
    "/category": { ssr: false },
  },
});
