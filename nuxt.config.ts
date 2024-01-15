// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      serverApiUrl: process.env.NUXT_PUBLIC_SERVER_API_URL,
    },
  },
})
